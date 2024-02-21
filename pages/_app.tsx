import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ContextProviders from "@/context";
import NextNProgress from 'nextjs-progressbar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {

  return (
      
      <>
        <NextNProgress color="green" startPosition={0.3} stopDelayMs={10} height={3.2} showOnShallow={true} />
        <ToastContainer />
        <ContextProviders>
        <Component {...pageProps} />
        </ContextProviders>
      </>

  )
}
