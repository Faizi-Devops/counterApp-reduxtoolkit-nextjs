import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import store from '@/store/store';
import { Provider } from 'react-redux/es/exports';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
