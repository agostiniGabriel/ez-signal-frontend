/**
 * @description       : 
 * @author            : Gabriel Agostini
 * @group             : 
 * @last modified on  : 21-02-2022
 * @last modified by  : Gabriel Agostini
**/
import '../styles/globals.css'
import { ChakraProvider, LightMode , DarkMode , GlobalStyle } from '@chakra-ui/react';
import { useRef } from 'react';
import Layout from '../components/Layout';


function EzSignal({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default EzSignal
