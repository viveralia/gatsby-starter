import { useStaticQuery, graphql } from "gatsby";
import React, { FC } from "react";
import { Helmet } from "react-helmet";

type Meta =
  | { content: unknown; name: string; property?: undefined }
  | { content: unknown; name?: undefined; property: string };

export interface SEOProps {
  description?: string;
  lang?: string;
  meta?: Meta[];
  title: string;
}

const SEO: FC<SEOProps> = ({ description, lang = "es", meta = [], title }) => {
  const { site } = useStaticQuery(query);

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle && `%s | ${defaultTitle}`}
      meta={[
        {
          content: metaDescription,
          name: `description`,
        },
        {
          content: title,
          property: `og:title`,
        },
        {
          content: metaDescription,
          property: `og:description`,
        },
        {
          content: `website`,
          property: `og:type`,
        },
        {
          content: `summary`,
          name: `twitter:card`,
        },
        {
          content: site.siteMetadata?.author || ``,
          name: `twitter:creator`,
        },
        {
          content: title,
          name: `twitter:title`,
        },
        {
          content: metaDescription,
          name: `twitter:description`,
        },
      ].concat(meta)}
    />
  );
};

export default SEO;

const query = graphql`
  query SEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
