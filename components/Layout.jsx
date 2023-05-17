import React, { useEffect, useState, useContext } from 'react';
import NavBar from './NavBar';
import { useRouter } from 'next/router';
import Footer from './Footer';
import { routesWithoutNavBars } from '../config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import secureLocalStorage from 'react-secure-storage';

export const OverlayContext = React.createContext({
  overlay: false,
  setOverlay: () => {},

  setLoggedIn: () => {},
  loggedIn: false,

  info: null,
  setInfo: () => {},

  loading: false,
  setloading: () => {},

  user: null,
  setUser: () => {},

  progressIndicator: null,
  setProgressIndicator: () => {},

  setdashboardInfo: () => {},
  dashboardInfo: {},

  walletBalance: {},
  setwalletBalance: () => {},

  isActive: true,
  setIsActive: () => {},

  defaultUserTab: '1',
  setDefaultUSerTab: () => {},
});

const Layout = ({ children }) => {
  const [overlay, setOverlay] = useState(false);
  const [walletBalance, setwalletBalance] = useState('--');
  const [dashboardInfo, setdashboardInfo] = useState(null);
  const [loading, setloading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [info, setInfo] = useState(null);
  const [user, setUser] = useState({});
  // const [progressIndicator, setProgressIndicator] = useState({});
  const [defaultUserTab, setDefaultUSerTab] = useState('1');
  const router = useRouter();

  const [progressIndicator, setProgressIndicator] = useState(() => {
    // Retrieve data from localStorage or set default value
    const storedData = secureLocalStorage.getItem('progressIndicator');
    return storedData ? JSON.parse(storedData) : {};
  });

  // useEffect(() => {
  //   secureLocalStorage.setItem(
  //     'progressIndicator',
  //     JSON.stringify(progressIndicator)
  //   );
  // }, [progressIndicator]);

  const handleLogOut = () => {
    secureLocalStorage.removeItem('Token');
    secureLocalStorage.clear();
    router.push('/');
  };

  console.log(progressIndicator);

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
        user,
        setUser,
        progressIndicator,
        setProgressIndicator,
        defaultUserTab,
        setDefaultUSerTab,
        isActive,
        setIsActive,
        handleLogOut,
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
