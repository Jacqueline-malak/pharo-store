import '../styles/global.css'
import'../styles/Home.module.css'

import { NextUIProvider } from '@nextui-org/react';
import Navbar from './navbar'
import Layout from './layout'



function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <Layout>
        <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;