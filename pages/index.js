import Image from 'next/image';
import BreadCrumb from '../components/BreadCrumb';
import Crads from '../components/Crads';
import HomeGraph from '../components/HomeGraph';
import HomeTable from '../components/HomeTable';
import Welcome from '../components/Welcome';
import styles from '../styles/vigilant.module.css';

export default function Home() {
  return (
    <>
      <Welcome />
      <BreadCrumb tab={'home'} />
      <Crads />
      <HomeGraph />
      <HomeTable />
    </>
  );
}
