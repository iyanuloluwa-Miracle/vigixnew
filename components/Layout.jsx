import React, { createContext, useEffect, useState, useContext } from 'react';
import NavBar from './NavBar';
import { useRouter } from 'next/router';
import Footer from '../src/components/Footer';
import { routesWithoutNavBars } from '../config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import secureLocalStorage from 'react-secure-storage';
import Cookies from 'js-cookie';

const UserContext = createContext();

export const OverlayContext = () => useContext(UserContext);

// export const OverlayContext = React.createContext();

const Layout = ({ children }) => {
  const [overlay, setOverlay] = useState(false);
  const [walletBalance, setwalletBalance] = useState('--');
  const [dashboardInfo, setdashboardInfo] = useState(null);
  const [loading, setloading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [info, setInfo] = useState(null);
  // const [user, setUser] = useState({});
  const [useData, setUserData] = useState({});
  // const [progressIndicator, setProgressIndicator] = useState({});
  const [defaultUserTab, setDefaultUSerTab] = useState('1');
  const router = useRouter();

  const [progressIndicator, setProgressIndicator] = useState(() => {
    // Retrieve data from localStorage or set default value
    const storedData = secureLocalStorage.getItem('progressIndicator');
    return storedData ? JSON.parse(storedData) : null;
  });

  const [user, setUser] = useState(() => {
    // Retrieve data from localStorage or set default value
    const storedUser = secureLocalStorage.getItem('user');
    console.log(storedUser);
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // useEffect(() => {
  //   secureLocalStorage.setItem(
  //     'progressIndicator',
  //     JSON.stringify(progressIndicator)
  //   );
  // }, [progressIndicator]);

  const handleLogOut = () => {
    secureLocalStorage.removeItem('token');
    secureLocalStorage.clear();
    Cookies.clear();
    router.push('/');
  };

  return (
    <UserContext.Provider
      value={{
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
        useData,
        setUserData,
        progressIndicator,
        setProgressIndicator,
        defaultUserTab,
        setDefaultUSerTab,
        handleLogOut,
      }}
    >
      {!routesWithoutNavBars.includes(router.pathname) && <NavBar />}
      <main>
        <>{children}</>
      </main>
      <Footer />
      {/* {<Footer />} */}
    </UserContext.Provider>
  );
};

export default Layout;
