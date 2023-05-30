'use client'
import { useState, useEffect } from 'react';
import { Banner } from '@/app/componets/banner/banner';
import Link from 'next/link';
import { carregarPublicacoes } from './getPots';



export default  function Publicacoes() {
    const [posts, setPosts] = useState<any>(false);

    async function fetchPublicacoes() {
        try {
            const publicacoes = await carregarPublicacoes();
            setPosts(publicacoes);
        } catch (error) {
            console.error('Erro ao carregar publicações:', error);
        }
    }

    useEffect(() => {
        fetchPublicacoes();
    }, []);

    const listItens = posts ? (
        posts.map((item: any) => (
            <Link key={item} href={`/publicacoes/${item.id}`}>
                    <Banner post={item} />
            </Link>
        ))
    ) : false;

    return (
        <div>
            <h1>Publicações</h1>
            <button onClick={()=>{

                fetchPublicacoes()
            }}>MOSTRAR OBJETO</button>
            {posts ? listItens : 'Click for show'}
        </div>
    );
}
