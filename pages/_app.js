/**
 * @description       : 
 * @author            : Gabriel Agostini
 * @group             : 
 * @last modified on  : 22-02-2022
 * @last modified by  : Gabriel Agostini
**/
import '../styles/globals.css'
import { ChakraProvider , extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools'
import Layout from '../components/Layout';

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px'
});

const theme = extendTheme({ breakpoints });

function EzSignal({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default EzSignal
