import { ThemeOptions } from "@material-ui/core";

// Also needs to be changed inside gatsby-config.js
// in gatsby-plugin-prefetch-google-fonts
const MAIN_FONT = "Roboto";

const typography: ThemeOptions["typography"] = {
  fontFamily: [MAIN_FONT, "-apple-system", "sans-serif"].join(","),
};

export default typography;
