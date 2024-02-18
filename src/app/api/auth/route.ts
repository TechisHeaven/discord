import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import uuid4 from "uuid4";
import { decrypt, encrypt } from "@/lib/helpers/jwtHandler";

const prisma = new PrismaClient();

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const token = request.cookies.get("session-token")?.value;
    const header = await request.headers.get("authorization");
    if (!header) {
      return;
    }
    const { id } = JSON.parse(header);
    // const { id } = await decrypt(token);

    if (!id || id === undefined) {
      return Response.json(
        {
          error: true,
          success: false,
          message: "Missing id in request payload",
        },
        { status: 400 }
      );
    }
    const user = await prisma.user.findFirst({
      where: {
        id,
      },
    });

    if (user || user !== null) {
      const { id, name, username, email } = user;
      return Response.json(
        {
          success: true,
          error: false,
          messsage: "User Find SuccessFully! ",
          user: { id, name, username, email },
        },
        { status: 200 }
      );
    } else {
      return Response.json(
        { error: true, success: false, message: "User not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    return Response.json(
      {
        error: true,
        success: false,
        message: "Internal Server Error " + error,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    //generate a new UUID4
    const id = uuid4();
    const {
      email,
      name,
      username,
      password,
      dob,
      avatar,
      channels,
      friends,
      servers,
    } = await request.json();

    const newUser = await prisma.user.create({
      data: {
        id,
        avatar,
        channels,
        dob,
        email,
        friends,
        name,
        password,
        servers,
        username,
      },
    });

    if (newUser) {
      const token = await encrypt({ id, name });
      return NextResponse.json({ ...newUser, token });
    }
  } catch (error) {
    if (error) {
      return NextResponse.json({ error });
    }
  }
}
