import Head from 'next/head';

const SEOSetup = ({
  title = "Palace on Ganges Heritage Hotel | Stay at Assi Ghat, Varanasi",
  description = "Discover the timeless beauty of Varanasi at Palace on Ganges Heritage Hotel. Situated on Assi Ghat, this heritage hotel offers comfortable rooms, traditional cuisine, and stunning views of the Ganges River. Book your heritage stay today.",
  keywords = "Palace on Ganges Heritage Hotel, Heritage Hotel Varanasi, Hotel Assi Ghat Varanasi, Stay on Assi Ghat, Ganges River Hotel Varanasi, Varanasi Heritage Accommodation, Palace on Ganges, Assi Ghat Hotels",
  author = "Palace on Ganges",
  url = "/",
  image = "/favicon.ico",
}) => {
  console.log(title, description, keywords, author, url, image)
  console.log("here is the seo setupppppp");
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" key="description" content={description} />
      <meta name="keywords" key="keywords" content={keywords} />
      <meta name="author" key="author" content={author} />
      <meta property="og:title" key="og:title" content={title} />
      <meta property="og:description" key="og:description" content={description} />
      <meta property="og:url" key="og:url" content={`https://palaceonganges.com"${url}`} />
      <meta property="og:image" key="og:image" content={image} />
      <meta property="og:image:type" content={image} />
      <meta property="og:image:width" content={image} />
      <meta property="og:image:height" content={image} />
    </Head>
  );
};

export default SEOSetup;
