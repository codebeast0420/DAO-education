import type { AppProps } from 'next/app';
import type { NextPageWithLayout } from '@/types';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import ModalsContainer from '@/components/modal-views/container';
import DrawersContainer from '@/components/drawer-views/container';
import SettingsButton from '@/components/settings/settings-button';
import SettingsDrawer from '@/components/settings/settings-drawer';
import { WalletProvider } from '@/lib/hooks/use-connect';
import 'overlayscrollbars/css/OverlayScrollbars.css';
// base css file
import 'swiper/css';
import '@/assets/css/scrollbar.css';
import '@/assets/css/globals.css';
import '@/assets/css/range-slider.css';
import React, { useEffect, useState } from 'react';
import { SessionProvider } from 'next-auth/react';
import GLogin from './gLogin';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function CustomApp({ Component, pageProps }: AppPropsWithLayout) {
  //could remove this if you don't need to page level layout
  const getLayout = Component.getLayout ?? ((page) => page);
  const [login, setLogin] = useState('');
  const test = (status: any) => {
    console.log('success');
    setLogin(status);
  };

  useEffect(() => {
    if (localStorage.getItem('token') != null)
      setLogin(localStorage.getItem('token'));
  }, []);
  return (
    <>
      {login ? (
        <>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1 maximum-scale=1"
            />
            <title>
              Criptic - React Next Web3 NFT Crypto Dashboard Template
            </title>
          </Head>
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="light"
          >
            <WalletProvider>
              {getLayout(<Component {...pageProps} />)}
              <SettingsButton />
              <SettingsDrawer />
              <ModalsContainer />
              <DrawersContainer />
            </WalletProvider>
          </ThemeProvider>
        </>
      ) : (
        <SessionProvider session={pageProps.session}>
          <div>{login}</div>
          <GLogin setLogin={test} />
        </SessionProvider>
      )}
    </>
  );
}

export default CustomApp;
