import { GetPostId } from '../GetPostById'
import { carregarPublicacoes } from '../getPots';
import { Banner } from '@/app/componets/banner/Banner';

export async function generateStaticParams() {
  const users = await carregarPublicacoes();
  const publicacoes = users.map((posts) => ({ publicacoesId: posts.id.toString() }));

  return publicacoes;
}

export default async function PostDetailsPage({
  params,
}: {
  params: { publicacoesID: string };
}) {
  const post = await GetPostId(params.publicacoesID);

  return (
    <>
     <Banner post={post}/>
    </>
  );
}