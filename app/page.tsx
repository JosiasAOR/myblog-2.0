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

  


  

  return <>
  <h1 style={{marginTop:55}} >Ultimas Publicações</h1>

  <div style={{maxWidth:400}}>

  </div>
  
  </>;

}
