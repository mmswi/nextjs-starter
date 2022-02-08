import '../styles/styles.scss';
import type { AppProps } from 'next/app';
import { wrapper } from 'app/store';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);