import React, { FC } from "react";

import { makeStyles } from "@material-ui/core";

import SEO from "../components/seo";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
  },
}));

const IndexPage: FC = () => {
  const classes = useStyles();

  return (
    <>
      <SEO title="Index Page" />
      <div className={classes.root}>Index Page</div>
    </>
  );
};

export default IndexPage;
