import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const entities = await prisma.entity.findMany();
    return NextResponse.json({ entities });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch entities" }, { status: 500 });
  }
}
