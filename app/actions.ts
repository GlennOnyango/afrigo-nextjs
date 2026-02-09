'use server'



import { prisma } from "@/lib/prisma";
import { EntityType } from "@prisma/client";

export async function registerPost(formData: FormData) {
  const fullName = formData.get('fullname') as string | null;
  const wechatId = formData.get('wechatId') as string | null;
  const email = formData.get("email") as string | null;
  const userType = formData.get("userType") as string | null;
  const additionalType = formData.get("additionalInfo") as string | null;

  if (!fullName || !wechatId || !email || !userType) {
    return { success: false, message: "Missing required fields." };
  }

  let entityType: EntityType;
  try {
    entityType = EntityType[userType as keyof typeof EntityType];
    if (!entityType) {
      return { success: false, message: "Invalid entity type." };
    }
  } catch {
    return { success: false, message: "Invalid entity type." };
  }

  try {
    const entity = await prisma.entity.create({
      data: {
        fullName,
        weChatId: wechatId,
        emailAddress: email,
        entityType,
        additionalRequirements: additionalType || undefined,
      },
    });
    return { success: true, message: "Registration successful!", entity };
  } catch (error: unknown) {
    let message = "Registration failed.";
    // Prisma unique constraint violation error code is 'P2002'
    if (isErrorWithMessage(error)) {
      message = "An error occured while registering, please try using another email address. Contact us if you are unable to resolve the issue.";
    }
    return { success: false, message };
  }

function isErrorWithMessage(error: unknown): error is { message: string } {
  return (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as { message: unknown }).message === "string"
  );
}
}