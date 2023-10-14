import Head from 'next/head';
import BreadCrumb from '../components/BreadCrumb';
import Cards from '../components/Cards';
import HomeGraph from '../components/HomeGraph';
import HomeTable from '../components/HomeTable';
import Welcome from '../components/Welcome';
import HomeIncidents from '../src/components/HomeIncidents';



export default function Home() {



  return (
    <>
      <Head>
        <title>Vigilant|home</title>
      </Head>
      <Welcome />

      <BreadCrumb tab={'home'} />
      <Cards />
      <HomeIncidents />
      <HomeGraph />
    </>
  );
}
