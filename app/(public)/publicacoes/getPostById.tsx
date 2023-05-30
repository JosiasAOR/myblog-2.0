import { getDatabase, ref, child, get } from "firebase/database";
import { initializeApp } from 'firebase/app';
 const firebaseConfig = {
    apiKey: "AIzaSyBgScV6VBQqvQ9clzfayzL_V5RzRdHrAqI",
    authDomain: "oblogdojo.firebaseapp.com",
    projectId: "oblogdojo",
    storageBucket: "oblogdojo.appspot.com",
    messagingSenderId: "344952979196",
    appId: "1:344952979196:web:e0c7bedc25712375e1e179"
  };


initializeApp(firebaseConfig);

export async function getPostId(postId:string) {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, `Publicacoes/${postId}`));

  const mensagens: any=snapshot.val()
  return mensagens;

  // snapshot.forEach((mensagem) => {
  //   mensagens.push(mensagem.val());
  // });

}

  
  
 