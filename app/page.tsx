'use client'
import { useState, useEffect } from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import { initializeApp } from 'firebase/app';
import { Banner } from './componets/banner/banner';

export default function Home() {
  const [exibir, setExibit] = useState(false)
  const firebaseConfig = {
    apiKey: "AIzaSyBgScV6VBQqvQ9clzfayzL_V5RzRdHrAqI",
    authDomain: "oblogdojo.firebaseapp.com",
    projectId: "oblogdojo",
    storageBucket: "oblogdojo.appspot.com",
    messagingSenderId: "344952979196",
    appId: "1:344952979196:web:e0c7bedc25712375e1e179"
  };
  initializeApp(firebaseConfig);
  useEffect(() => {
    carregarPublicacoes();
  });
  const [Publicacoes, setPublicacoes] = useState(false)
  function carregarPublicacoes() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Publicacoes/`))
      .then((snapshot) => {
        const mensagens = [];
        snapshot.forEach((mensagem) => {
          mensagens.push(mensagem.val());
        });

        setPublicacoes(mensagens);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  const listItens = Publicacoes ? (
    Publicacoes.map((item) => (
       <div>
          <Banner post={item} />

       </div>
    ))
  ):''
  return <>
    <main>

      <h1>
        Home Page
      </h1>
      <button onClick={() => {
      }}>Exibir na tela</button>
      {exibir ? exibir : 'null'},
      {listItens}

    </main>
  </>
}