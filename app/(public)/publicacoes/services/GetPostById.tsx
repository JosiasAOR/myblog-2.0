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

export function GetPostId(params: any) {
  const dbRef = ref(getDatabase());
  return get(child(dbRef, `Publicacoes/`)).then((snapshot) => {
    let post = null;
    snapshot.forEach((mensagem) => {
      if (mensagem.val().id == params) {
        post = mensagem.val();
      }
    });
    return post;
  });
}


  
  
 