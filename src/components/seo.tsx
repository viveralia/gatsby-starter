import React, { FC } from "react";
import { Helmet } from "react-helmet";

import { graphql, useStaticQuery } from "gatsby";

interface Meta {
  content: string;
  name: string;
  property?: undefined;
}

export interface SEOProps {
  description?: string;
  lang?: string;
  meta?: Meta[];
  title: string;
}

interface SeoQuery {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
    };
  };
  file: {
    childImageSharp: {
      favicon16: { src: string };
      favicon32: { src: string };
      favicon64: { src: string };
    };
  };
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    file(relativePath: { eq: "favicon.png" }) {
      childImageSharp {
        favicon16: fixed(width: 16, height: 16, quality: 100) {
          src
        }
        favicon32: fixed(width: 32, height: 32, quality: 100) {
          src
        }
        favicon64: fixed(width: 64, height: 64, quality: 100) {
          src
        }
      }
    }
  }
`;

const SEO: FC<SEOProps> = ({ description, lang = "es", meta = [], title }) => {
  const { file, site } = useStaticQuery<SeoQuery>(query);
  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const { favicon16, favicon32, favicon64 } = file.childImageSharp;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s · ${defaultTitle}` : undefined}
      link={[
        { href: favicon16.src, rel: "icon", sizes: "16x16", type: "image/png" },
        { href: favicon32.src, rel: "icon", sizes: "32x32", type: "image/png" },
        { href: favicon64.src, rel: "shortcut icon", type: "image/png" },
      ]}
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
