import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { GetServerSideProps } from 'next';
import _ from 'lodash';
export default function List(props: any) {
  const data = props.data;
  const pic = _.get(data, 'sprites.other.dream_world.front_default');
  return (
    <>
      <Head>
        <title>列表页</title>
      </Head>
      <Link href='/'>跳转首页</Link>
      <div>
        <h2>{data.name}</h2>
        <div>{data.height}</div>
        <Image src={pic} width={400} height={200} />
      </div>
    </>
  );
}
// getServerSideProps从后台获取数据，函数名固定
// 每次发起页面请求执行，每次页面刷新都会重新执行
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  // https://pokeapi.co/api/v2/pokemon/2
  const { id } = ctx.params;
  console.log(ctx.query,22222222,ctx.params,666,id)
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
    (data) => data.json(),
  );
  return {
    props: { data: res },
  };
};
