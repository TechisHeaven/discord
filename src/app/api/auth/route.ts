import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import uuid4 from "uuid4";
import { processEnv } from "@/lib/helpers/processEnvCustom";
import CreateJwtToken from "@/lib/helpers/jwtHandler";

const prisma = new PrismaClient();
export async function GET(request: NextRequest, response: NextResponse) {
  //   return response.json({ message: "hello world" });
  console.log(processEnv.SECRET_NAME);
  return Response.json({
    url: request.nextUrl,
    secret_name: processEnv.SECRET_NAME,
  });
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
      const token = CreateJwtToken({ id, name });
      return Response.json({ ...newUser, token });
    }
  } catch (error) {
    if (error) {
      return Response.json({ error });
    }
  }
}
