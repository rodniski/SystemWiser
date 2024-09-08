import Head from 'next/head';

interface SEOHeadProps {
  title: string;
  description: string;
  url: string;
  image: string;
}

const SEOHead = ({ title, description, url, image }: SEOHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content="System Wiser, tecnologia, soluções tecnológicas, consultoria TI, desenvolvimento de software, cibersegurança" />
      <meta name="author" content="System Wiser" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />seo
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEOHead;
