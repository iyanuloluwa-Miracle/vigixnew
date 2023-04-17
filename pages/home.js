import BreadCrumb from '../components/BreadCrumb';
import Cards from '../components/Cards';
import HomeGraph from '../components/HomeGraph';
import HomeTable from '../components/HomeTable';
import Welcome from '../components/Welcome';
// import styles from '../styles/vigilant.module.css';

export default function Home() {
  return (
    <>
      <Welcome />
      <BreadCrumb tab={'home'} />
      <Cards />
      <HomeGraph />
      <HomeTable />
    </>
  );
}
