import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
          rel="stylesheet"
        ></link>

        <meta name="theme-color" content="#460102" />
        <meta name="msapplication-TileColor" content="#460102" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/logo1.png"
        />
        <link
          rel="icon"
          type="image/svg"
          sizes="32x32"
          href="/favicon/logo1.png"
        />
        <link
          rel="icon"
          type="image/svg"
          sizes="16x16"
          href="/favicon/logo1.png"
        />
        <title>Vigilant</title>
      </Head>

      {/* <CookiesProvider> */}
      <Layout>
        {/* <Toaster /> */}
        {/* <Component {...pageProps} /> */}
        <Component {...pageProps} />
      </Layout>
      {/* </CookiesProvider> */}
    </>
  );
}

export default MyApp;
