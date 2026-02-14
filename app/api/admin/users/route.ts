import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json({ users });
}

export async function PATCH(request: Request) {
  const { id } = await request.json();
  const user = await prisma.user.update({
    where: { id },
    data: { role: "admin", isAdmin: true },
  });
  return NextResponse.json({ user });
}
