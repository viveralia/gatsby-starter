import React, { FC } from "react";

import { makeStyles } from "@material-ui/core";

import SEO from "../components/seo";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
  },
}));

const NotFoundPage: FC = () => {
  const classes = useStyles();

  return (
    <>
      <SEO title="Not Found" />
      <div className={classes.root}>Not Found</div>
    </>
  );
};

export default NotFoundPage;
