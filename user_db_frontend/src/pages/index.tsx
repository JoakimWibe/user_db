import Head from 'next/head';
import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import UserList from '@/components/userList/UserList';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ data }: any) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(data);
  }, []);

  return (
    <Layout>
      <Head>
        <title>User Database</title>
        <meta name="description" content="A user database" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <UserList users={users} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await axios.get(`http://localhost:5273/api/Users`);
  const data = res.data;

  return { props: { data } };
}
