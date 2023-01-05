import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';
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
// getStaticProps budle时候运行,只运行一次
export const getStaticProps: GetStaticProps = async (ctx: any) => {
  // https://pokeapi.co/api/v2/pokemon/2
  const { id } = ctx.params;
  console.log(ctx.query, 22222222, ctx.params, 666, id);
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
    (data) => data.json(),
  );
  return {
    props: { data: res },
    revalidate:10 //自动触发,重新生成需要改变的地方
  };
};
export const getStaticPaths: GetStaticPaths = async (ctx: any) => {
  return {
    paths: _.range(1, 10).map((id:number) => ({ params: { id: `${id}` } })),
     //blocking 访问20以外的数字退化为getServerSideProps
     // false 404
     // true 报错
    fallback: false,
  };
};
