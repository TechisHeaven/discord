import { decrypt, encrypt } from "@/lib/helpers/jwtHandler";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import uuid4 from "uuid4";

const prisma = new PrismaClient();

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    //generate a new UUID4
    const Serverid = uuid4();

    const session = request.headers.get("session-token");
    const token = JSON.parse(session!);
    const { id } = await decrypt(token!);
    const userID = id;
    if (!id) {
      return Response.json({
        status: 404,
        error: true,
        success: false,
        message: "Id does not exist",
      });
    }

    const { name } = await request.json();
    const channelId = uuid4();
    const channelName = "general";
    const newServer = await prisma.server.create({
      data: {
        id: Serverid,
        name: name,
        ownerId: userID,
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
          create: {
            id: userID,
          },
        },
      },
    });
    console.log(newServer);
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

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const session = request.headers.get("session-token");
    const token = JSON.parse(session!);
    const { id } = await decrypt(token!);
    if (!id) {
      return Response.json({
        status: 404,
        error: true,
        success: false,
        message: "Id does not exist",
      });
    }

    const server = await prisma.server.findMany({
      select: {
        id: true,
        name: true,
        users: true, // Include the users field
        channels: true,
        ownerId: true,
      },
    });

    if (server && server.length > 0) {
      return Response.json(
        {
          server,
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
