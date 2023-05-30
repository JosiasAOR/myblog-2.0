'use client'
import { useState,useEffect } from 'react'
import './globals.css'
import { SlMenu } from "react-icons/sl";
import styles from './layout.module.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { getDatabase, ref, child, get } from "firebase/database";
import { initializeApp } from 'firebase/app';




const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const firebaseConfig = {
    apiKey: "AIzaSyBgScV6VBQqvQ9clzfayzL_V5RzRdHrAqI",
    authDomain: "oblogdojo.firebaseapp.com",
    projectId: "oblogdojo",
    storageBucket: "oblogdojo.appspot.com",
    messagingSenderId: "344952979196",
    appId: "1:344952979196:web:e0c7bedc25712375e1e179"};
    initializeApp(firebaseConfig);
  useEffect(() => {
    carregarPublicacoes();
  });
  const [exibirMenu,setExibirMenu]=useState(false)
  const [publicacoes,setPublicacoes]=useState(false)


   function carregarPublicacoes() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Publicacoes/`))
      .then((snapshot) => {
        const mensagens:any = [];
        snapshot.forEach((mensagem) => {
          mensagens.push(mensagem.val());
        });

        setPublicacoes(mensagens);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <html lang="en">
      <body className={inter.className}>
      <SlMenu className={styles.hambu} onClick={()=>{setExibirMenu(!exibirMenu)}}/>

        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}> <Link className={styles.link} href="/"> Home</Link></li>
            <li className={styles.li}> <Link href="/publicacoes"> Publicações</Link></li>
            <li className={styles.li}> <Link href="/projetos"> Projetos</Link></li>
            <li className={styles.li}> <Link href="/sobreMim"> Sobre Mim</Link></li>
          </ul>
        </nav>

         { exibirMenu?<nav className={styles.nav2}>
          <ul className={styles.ul2}>
            <li className={styles.li2} onClick={()=>{setExibirMenu(!exibirMenu)}}> <Link className={styles.link} href="/"> Home</Link></li>
            <li className={styles.li2} onClick={()=>{setExibirMenu(!exibirMenu)}}> <Link href="/publicacoes"> Publicações</Link></li>
            <li className={styles.li2} onClick={()=>{setExibirMenu(!exibirMenu)}}> <Link href="/projetos"> Projetos</Link></li>
            <li className={styles.li2} onClick={()=>{setExibirMenu(!exibirMenu)}}> <Link href="/sobreMim"> Sobre Mim</Link></li>
          </ul>
        </nav>:''}
        
        
      {children}
        
      
      
      
      </body>
    </html>
  )
}
