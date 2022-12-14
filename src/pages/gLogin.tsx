import type { NextPage } from 'next';
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';
import Head from 'next/head';
import { useEffect } from 'react';

const GLogin = (props) => {
  const { data: session } = useSession();
  const login = () => {
    signIn();
    props.setLogin(1);
    localStorage.setItem('token', 1);
		localStorage.setItem('username', session);
  };


  return (
    <div
      style={{
        backgroundColor: '#999999',
        width: '40%',
        padding: '7% 5% 7% 5%',
        margin: '10% 33%',
				display: "flex",
				flexDirection: "row",
				justifyContent: "center",
      }}
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <div>
          {session && session.user ? (
            <button onClick={() => signOut()}>Sign out</button>
          ) : (
            <div>
              <button className="btn btn-1 btn-sep icon-info" onClick={() => login()}>Sing in</button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default GLogin;
