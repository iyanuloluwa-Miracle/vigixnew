// import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../components/Layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'sonner';

const queryClient = new QueryClient();

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
        <Toaster
          position="top-right"
          expand={false}
          richColors
          closeButton
          offset="16px"
        />
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Component {...pageProps} />
        </QueryClientProvider>
      </Layout>

      {/* </CookiesProvider> */}
    </>
  );
}

export default MyApp;
