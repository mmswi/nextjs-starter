import 'reflect-metadata';
import '../styles/styles.scss';
import type { AppProps } from 'next/app';
import { wrapper } from 'app/client/store';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);