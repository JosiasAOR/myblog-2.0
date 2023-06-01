import { getDatabase, ref, child, get, update } from "firebase/database";
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

export async function adicionarVisualizacao(postId: string) {
  const dbRef = ref(getDatabase());
  const postRef = child(dbRef, `Publicacoes/${postId}`);
  const snapshot = await get(postRef);
  const post = snapshot.val();
  console.log('ssssss',post)
  if (post) {
    const novasVisualizacoes = (post.visualizacoes || 0) + 1;
    update(postRef, {
      visualizacoes: novasVisualizacoes,
    });
  }
}
