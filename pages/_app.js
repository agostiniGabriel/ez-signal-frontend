/**
 * @description       :
 * @author            : Gabriel Agostini
 * @group             :
 * @last modified on  : 20-11-2023
 * @last modified by  : Gabriel Agostini
 **/
import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { wrapper } from "../store/store";
import { Provider } from "react-redux";
import Layout from "../components/Layout";

const breakpoints = {
  xsm: "160px",
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const themeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ breakpoints, themeConfig });

function EzSignal({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...props.pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}

export default EzSignal;
