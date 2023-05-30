'use client'
import { useState,useEffect } from "react";
import { getDatabase, ref, child, get, refFromURL, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import styles from './postDetails.module.css'
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
export default   function postDetailsPage({
  params,
}: {
  params: { userId: string };
}) {
  const [posts, setPosts] = useState<any>(false);

  async function fetchPublicacoes() {
      try {
          const publicacoes = await getPostId(params.userId);
      } catch (error) {
          console.error('Erro ao carregar publicações:', error);
      }
  }

  useEffect(() => {
      fetchPublicacoes();
  }, []);
   async function getPostId(postId:string) {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, `Publicacoes/`));
    snapshot.forEach((mensagem) => {
const publicacoesID:any = params.publicacoesID;
      if(mensagem.val().id==publicacoesID){

       return setPosts(mensagem.val())

      }else{
      
return console.log('ERRO')
      }
      // mensagens.push(mensagem.val());
  });
  // return mensagens
  }

  return (
    <>
     <main className={styles.main}>
      <div className={styles.containerTop}>
      <img className={styles.img} src={posts.image} />
      <h1 className={styles.theme}>{posts.theme}</h1>
      <span className={styles.category} >{posts.category}</span>
      <span>Views</span>
      </div>
      <div>
        <h2 className={styles.theme2}>{posts.theme}</h2>
        <p className={styles.content}>{posts.content}</p>
      </div>
     </main>
    </>
  );
}

