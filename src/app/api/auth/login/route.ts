import CreateJwtToken from "@/lib/helpers/jwtHandler";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import uuid4 from "uuid4";
const prisma = new PrismaClient();

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    //generate a new UUID4
    const id = uuid4();
    const { email, password } = await request.json();

    const user = await prisma.user.findFirst({ where: { email: email } });

    if (!user) {
      return Response.json({
        status: 404,
        message: "User not found",
      });
    }

    const checkLogin = user.password === password;
    if (checkLogin) {
      const name = user.name;
      const token = CreateJwtToken({ id, name });
      return Response.json({ status: 200, message: "Login successful", token });
    } else {
      return Response.json({ status: 401, message: "Invalid Credantials" });
    }
  } catch (error) {
    if (error) {
      return Response.json({
        status: 500,
        message: error + "Something Went Wrong",
      });
    }
  }
}
