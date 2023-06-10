'use client'
import { useEffect, useState } from "react";
import { GetPostId } from "../services/GetPostById";
import { InPost } from './InPost';

export default function PostDetailsPage({
  params,
}: {
  params: { publicacoesID: string };
}) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      const post = await GetPostId(params.publicacoesID);
      setPost(post);
    }
    fetchPost();
  }, [params.publicacoesID]);

  return <>{post && <InPost post={post} />}</>;
}
