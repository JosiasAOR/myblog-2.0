import { carregarPublicacoes } from '../getPots';
import { Banner } from '@/app/componets/banner/Banner';
import { GetPostId } from '../GetPostById';

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
    <div>
    {post !== null && <Banner post={post} />}
    </div>

    </>
  );
}