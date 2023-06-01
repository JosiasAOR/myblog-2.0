'use client'
import { useState, useEffect } from "react";
import { getDatabase, ref, child, get, refFromURL, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import styles from './postDetails.module.css'
import { getPostId } from "../getPostById";
const firebaseConfig = {
  apiKey: "AIzaSyBgScV6VBQqvQ9clzfayzL_V5RzRdHrAqI",
  authDomain: "oblogdojo.firebaseapp.com",
  projectId: "oblogdojo",
  storageBucket: "oblogdojo.appspot.com",
  messagingSenderId: "344952979196",
  appId: "1:344952979196:web:e0c7bedc25712375e1e179"
};


initializeApp(firebaseConfig);


///////////////////////////////////////
export default function postDetailsPage({
  params,
}: {
  params: { publicacoesID: string };
}) {
  const [posts, setPosts] = useState<any>(false);
  async function fetchPublicacoes() {
    try {
      const publicacoes = await getPostId(params.publicacoesID);
      console.log('call back', publicacoes)
      return setPosts(publicacoes)
    } catch (error) {
      console.error('Erro ao carregar publicações:', error);
    }
  }

  useEffect(() => {
    fetchPublicacoes();
  }, []);
  return (
    <>
      <main className={styles.main}>
        <div className={styles.containerTop} style={{ backgroundImage: `url(${posts.image})` }}>
          <div className={styles.viewsEndCategory}>
            <span className={styles.category} >{posts.category}</span>
          </div>
        </div>

        <div className={styles.divContent}>
          <h1 className={styles.theme}>{posts.theme}</h1>

          <p className={styles.content}>{posts.content}</p>
        </div>
      </main>
    </>
  );
}

