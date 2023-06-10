import { carregarPublicacoes } from "../services/getPots";
import { Banner } from "@/app/componets/banner/Banner";
import { InPost } from "@/app/componets/banner/InPost";
import { GetPostId } from "../services/GetPostById";

export async function generateStaticParams() {
  const users = await carregarPublicacoes();
  const publicacoes = users.map((posts) => ({
    publicacoesId: posts.id.toString(),
  }));

  return publicacoes;
}

export default async function PostDetailsPage({
  params,
}: {
  params: { publicacoesID: string };
}) {
  const post = await GetPostId(params.publicacoesID);

  return <>{post !== null && <InPost post={post} />}</>;
}
