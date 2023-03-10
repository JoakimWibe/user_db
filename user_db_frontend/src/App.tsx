import { ChakraProvider } from '@chakra-ui/react';
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import UserList from './components/UserList';

export const UserContext = createContext({});
const baseUrl = 'http://localhost:5273/api';

export const App = () => {
  const [userData, setUserData] = useState({
    users: [],
    addresses: [],
  });

  const getUserData = async () => {
    try {
      const [userResponse, addressResponse] = await axios.all([axios.get(baseUrl + '/Users'), axios.get(baseUrl + '/Addresses')]);

      setUserData({
        users: userResponse.data,
        addresses: addressResponse.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <ChakraProvider>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Navbar />
        <UserList />
      </UserContext.Provider>
    </ChakraProvider>
  );
};
