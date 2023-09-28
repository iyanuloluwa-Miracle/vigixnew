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

function generateRandom20DigitNumber() {
  let randomNumber = '';
  for (let i = 0; i < 20; i++) {
    randomNumber += Math.floor(Math.random() * 10); // Generates a random digit between 0 and 9
  }
  return randomNumber;
}

const fixedRandomNumber = Cookies.get('fixedRandomNumber');
  if (!fixedRandomNumber) {
    const randomNumber = generateRandom20DigitNumber();
    Cookies.set('fixedRandomNumber', randomNumber, { expires: 365 }); // Set the cookie to expire in 365 days
  }




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
    let parsedUser = null;

    try {
      parsedUser = JSON.parse(storedUser);
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }

    return parsedUser;
  });

  // useEffect(() => {
  //   secureLocalStorage.setItem(
  //     'progressIndicator',
  //     JSON.stringify(progressIndicator)
  //   );
  // }, [progressIndicator]);

  const handleLogOut = () => {
    router.push('/');
    secureLocalStorage.removeItem('token');
    secureLocalStorage.clear();
    // Cookies.clear();
  };


  const generateFixed20DigitNumber = (() => {
    // This variable will hold the fixed 20-digit number
    let fixedNumber;

    // Check if the number has been generated already; if not, generate it
    if (!fixedNumber) {
      let randomNumber = '';
      for (let i = 0; i < 20; i++) {
        randomNumber += Math.floor(Math.random() * 10); // Generates a random digit between 0 and 9
      }
      fixedNumber = randomNumber;
    }

    // Return a function that always returns the same fixed number
    return () => fixedNumber;
  })();

  const fixedRandomNumber = generateFixed20DigitNumber();
  // const fixedRandomNumber = generateRandom20DigitNumber();




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
        fixedRandomNumber,
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
