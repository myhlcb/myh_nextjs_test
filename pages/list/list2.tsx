import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
export default function List(props: any) {
  return (
    <>
      <Head>
        <title>列表页</title>
      </Head>
      <div>
        <h2>{props.age}</h2>
      </div>
    </>
  );
}
//页面build执行,只执行一次
export const getStaticProps: GetStaticProps = (ctx) => {
  return { props: { age: 10 } };
};

