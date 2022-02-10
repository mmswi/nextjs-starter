import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { wrapper } from 'app/store';
import { fetchProduct, selectProduct } from 'app/store/slices/product';


const Product: NextPage = (props: any) => {
  const product = useSelector(selectProduct) as any;

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="row">
        <h1 className="text-center">
          Product name: {product?.name}
        </h1>
        <p>
          Go to <Link href="/">
            <a>Home page</a>
          </Link> {' | '}
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </p>

        <p>
          Product, {props.productData}!
        </p>
      </main>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ query }) => {
  console.log('store state on the server before dispatch', store.getState());
  const productData = query.data || 'page data';
  //  http://localhost:3000/product?data='some-data'
  await store.dispatch(fetchProduct());
  console.log('store state on the server after dispatch', store.getState());

  return {
    props: {
      productData
    }
  };
});

export default Product;
