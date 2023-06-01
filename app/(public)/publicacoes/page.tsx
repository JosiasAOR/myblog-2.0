'use client'
import { useState, useEffect } from 'react';
import { Banner } from '@/app/componets/banner/Banner';
import Link from 'next/link';
import { carregarPublicacoes } from './getPots';
import styles from './publicacoes.module.css'
import { adicionarVisualizacao } from './setViewPost';


export default function Publicacoes() {
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
    }, [posts]);

    const listItens = posts ? (
        posts.map((item: any) => (
            
            <Link key={item} href={`/publicacoes/${item.id}`}>
                <Banner post={item} />

            </Link>

        ))
    ) : false;

    return (
        <div style={{marginTop:55}} className={styles.container}>
            <h1  className={styles.theme} >Publicações</h1>

            <div className={styles.div}>
            <div onClick={()=>{
                console.log('aqui os views: ',adicionarVisualizacao(posts.id))
                }} >

                {posts ? listItens : 'Click for show'}
            </div>

            </div>
        </div>
    );
}
