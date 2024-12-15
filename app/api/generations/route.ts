import { NextResponse } from "next/server";

export async function GET() {
  //get the user ID from Clerk then search in DB to get all prompt IDs of the User

  return NextResponse.json({ prompts: [23, 11, 13, 17, 31] }, { status: 200 });
}
