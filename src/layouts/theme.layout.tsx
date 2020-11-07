import React, { FC, useMemo } from "react";

import {
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core";

import { darkTheme, lightTheme } from "../config/themes";

const ThemeLayout: FC = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(() => {
    return responsiveFontSizes(prefersDarkMode ? darkTheme : lightTheme);
  }, [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeLayout;
