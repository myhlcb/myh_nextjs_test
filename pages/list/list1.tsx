
import React from 'react';
import Head from 'next/head';
import Link from 'next/link'
import {GetServerSideProps} from 'next'
export default function List(props: any) {
  return (
    <>
      <Head>
        <title>列表页</title>
      </Head>
      <div>
        <h1>{props.name}</h1>
        <Link href='/'>跳转首页</Link>
      </div>
    </>
  );
}
// getServerSideProps从后台获取数据，函数名固定
// 每次发起页面请求执行，每次页面刷新都会重新执行
export const getServerSideProps:GetServerSideProps = async (ctx: any) => {
  return {
    props: { name: '列表页' },
  };
};
