import '../styles/styles.scss';
import type { AppProps } from 'next/app';
import { wrapper } from 'app/store';
import { setProfileData } from 'app/store/slices/profile';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = wrapper.getInitialAppProps(store => async ({ ctx }) => {
  console.log(ctx.pathname);
  store.dispatch(setProfileData('profile name'));

  return {
    pageProps: {}
  };
});

export default wrapper.withRedux(MyApp);