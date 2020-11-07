import { createMuiTheme, Theme } from "@material-ui/core";

import colors from "./colors.config.theme";
import overrides from "./overrides.config.theme";
import typography from "./typography.config.theme";

const baseTheme = { overrides, typography };

type ThemeTypes = "light" | "dark";

const createTheme = (type: ThemeTypes): Theme => {
  return createMuiTheme({
    ...baseTheme,
    palette: {
      primary: {
        main: colors.primary[type],
      },
      type,
    },
  });
};

export const lightTheme = createTheme("light");
export const darkTheme = createTheme("dark");
