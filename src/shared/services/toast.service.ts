import { createStandaloneToast, UseToastOptions } from "@chakra-ui/react";

type ReturnToastType = string | number | undefined;
export const ToastService = {
  success: (title: string, options: UseToastOptions = {}): ReturnToastType => {
    const toast = createStandaloneToast();
    return toast({
      title,
      status: "success",
      duration: 3000,
      isClosable: true,
      ...options,
    });
  },
  error: (title: string, options: UseToastOptions = {}): ReturnToastType => {
    const toast = createStandaloneToast();
    return toast({
      title,
      status: "error",
      duration: 3000,
      isClosable: true,
      ...options,
    });
  },
};
