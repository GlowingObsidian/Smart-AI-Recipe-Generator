import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body || !body.userID)
    return NextResponse.json(
      { error: "Malformed request body." },
      { status: 401 }
    );

  const allPrompts = await prisma.prompt.findMany({
    where: {
      userID: body.userID,
    },
    select: {
      id: true,
      title: true,
      created: true,
      updated: true,
    },
  });

  return NextResponse.json({ allPrompts }, { status: 200 });
}
