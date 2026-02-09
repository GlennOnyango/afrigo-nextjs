// Utility to show toast from sonner
"use client";
import { Dispatch, SetStateAction } from "react";
import { toast } from "sonner";

export function showRegistrationSuccessToast(
  message: string,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
) {
  toast.success(message, {
    description:
      "Thank you for registering with us. We have received your details and will get in touch soon. If you have any questions, feel free to contact our support team.",
    duration: 3000,
    position: "top-right",
    onAutoClose() {
      toast.dismiss();
      setIsOpen(false);
    },
    action: {
      label: "Close",
      onClick: () => {
        toast.dismiss();
        setIsOpen(false);
      },
    },
  });
}
