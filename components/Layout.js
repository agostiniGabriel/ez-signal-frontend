/**
 * @description       : Componente container do layout de navbar e footer para todas as pag
 * @author            : Gabriel Agostini
 * @group             :
 * @last modified on  : 09-10-2023
 * @last modified by  : Gabriel Agostini
 **/
import NavBar from "./NavBar";
import Head from "next/head";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Ez Signal</title>
        <meta name="description" content="Signal Processign Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      {children}
      <footer>
        <Footer />
      </footer>
    </>
  );
}
