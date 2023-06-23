"use client";

import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

interface Props {
  children: ReactNode;
}

const Providers = ({ children, ...props }: ThemeProviderProps) => {
  return (
      <SessionProvider>{children}</SessionProvider>
  );
};

export default Providers;
