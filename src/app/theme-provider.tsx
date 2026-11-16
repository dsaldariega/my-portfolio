"use client";

import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    button: { fontWeight: 600, textTransform: "none" },
  },
  palette: {
    primary: {
      main: "#d93645",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f7f8f5",
    },
  },
  shape: {
    borderRadius: 6,
  },
});

export default function ThemeProviderWrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
