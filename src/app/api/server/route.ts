import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import uuid4 from "uuid4";

const prisma = new PrismaClient();

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    //generate a new UUID4
    const id = uuid4();

    const { name } = await request.json();
    const channelId = uuid4();
    const channelName = "general";
    const newServer = await prisma.server.create({
      data: {
        id,
        name: name,
        channels: {
          create: [
            {
              id: channelId,
              name: channelName,
              type: "voice",
            },
          ],
        },
        users: {
          create: [], // Specify your user data if needed
        },
      },
    });
    if (newServer) {
      return Response.json(
        {
          ...newServer,
          success: true,
          message: "Server Created",
          error: false,
          status: 201,
        },
        { status: 201 }
      );
    } else {
      return Response.json(
        {
          error: true,
          success: false,
          message: "Server not Created",
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
