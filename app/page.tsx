"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { carregarPublicacoes } from "./(public)/publicacoes/services/getPots";
import { Banner } from "./componets/banner/Banner";

export default function Home({
  params,
}: {
  params: { publicacoesID: string };
}) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const post = await carregarPublicacoes()
      console.log(post,'here Post')
      setPost(post);
    }
    fetchPost();
  }, [params.publicacoesID]);

  const listItens = post?.map((item: any) => (
    <Link key={item} href={`/publicacoes/${item.id}`}>
      <Banner key={item.id} post={item}/>
    </Link>
  ));
  

  return <>
  <h1 style={{marginTop:55}} >Ultimas Publicações</h1>

  <div style={{maxWidth:400}}>
  {listItens}

  </div>
  
  </>;

}
