import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import uuid4 from "uuid4";
import { decrypt, encrypt } from "@/lib/helpers/jwtHandler";
import { CreateHashPassword } from "@/lib/HandleHasingPassword";

const prisma = new PrismaClient();

export async function GET(request: NextRequest, response: NextResponse) {
  try {
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
    let { email, name, username, password, dob } = await request.json();

    const findDuplicate = await prisma.user.findFirst({
      where: { OR: [{ username }, { email }] },
    });
    if (findDuplicate || findDuplicate !== null) {
      return Response.json(
        {
          status: 401,
          success: false,
          message: "Email or Username Duplcation",
          error: true,
        },
        { status: 401 }
      );
    }

    const Hashedpassword: string = await CreateHashPassword(password);
    const newUser = await prisma.user.create({
      data: {
        id,
        dob,
        email,
        name,
        password: Hashedpassword,
        username,
      },
    });
    if (newUser) {
      const token = await encrypt({ id, name });
      return Response.json(
        { ...newUser, token, success: true, error: false, status: 200 },
        { status: 200 }
      );
    } else {
      return Response.json(
        {
          error: true,
          success: false,
          message: "User not Created",
          status: 400,
        },
        { status: 400 }
      );
    }
  } catch (error) {
    if (error) {
      return Response.json(
        {
          status: 501,
          error: true,
          success: false,
          message: "Something Went Wrong" + error,
        },
        { status: 501 }
      );
    }
  }
}
