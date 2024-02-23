import { decrypt } from "@/lib/helpers/jwtHandler";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const id = request.nextUrl.searchParams.get("id") as string;

    if (!id) {
      return Response.json({
        status: 404,
        error: true,
        success: false,
        message: "Id does not exist",
      });
    }

    const server = await prisma.server.findMany({
      where: {
        id,
      },
      select: {
        channels: true,
      },
    });

    if (server && server.length > 0) {
      return Response.json(
        {
          ...server,
          success: true,
          message: "Servers Fetched successfully",
          error: false,
          status: 200,
        },
        { status: 200 }
      );
    } else {
      return Response.json(
        {
          error: true,
          success: false,
          message: "Server not Fetched",
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
