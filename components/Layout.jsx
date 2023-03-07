import React, { useEffect, useState, useContext } from 'react';
import NavBar from './NavBar';
import { useRouter } from 'next/router';
import Footer from './Footer';
import { routesWithoutNavBars } from '../config';

export const OverlayContext = React.createContext({
  overlay: false,
  setOverlay: () => {},

  setLoggedIn: () => {},
  loggedIn: false,

  info: null,
  setInfo: () => {},

  loading: false,
  setloading: () => {},

  setdashboardInfo: () => {},
  dashboardInfo: {},

  walletBalance: {},
  setwalletBalance: () => {},

  isActive: true,
  setIsActive: () => {},
});

const Layout = ({ children }) => {
  const [overlay, setOverlay] = useState(false);
  const [walletBalance, setwalletBalance] = useState('--');
  const [dashboardInfo, setdashboardInfo] = useState(null);
  const [loading, setloading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [info, setInfo] = useState(null);
  const router = useRouter();

  return (
    <OverlayContext.Provider
      value={{
        overlay,
        setOverlay,
        walletBalance,
        setwalletBalance,
        loading,
        setloading,
        dashboardInfo,
        setdashboardInfo,
        loggedIn,
        setLoggedIn,
        info,
        setInfo,

        isActive,
        setIsActive,
      }}
    >
      {!routesWithoutNavBars.includes(router.pathname) && <NavBar />}
      <main>
        <>{children}</>
      </main>
      {<Footer />}
    </OverlayContext.Provider>
  );
};

export default Layout;
