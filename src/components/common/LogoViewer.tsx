"use client";
import LightLogo from "@/assets/tsx_logo/lightLogo";
import Logo from "@/assets/tsx_logo/Logo";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";

export default function LogoViewer() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // You can add side effects here if needed
  }, [resolvedTheme]);

  return <div>{resolvedTheme === "dark" ? <LightLogo /> : <Logo />}</div>;
}
