'use client'
import { useState, useEffect } from "react";
import { Banner } from "@/app/componets/banner/Banner";
import Link from "next/link";
import { carregarPublicacoes } from "./services/getPots";
import styles from "./publicacoes.module.css";

const ITEMS_PER_PAGE = 6 // Define o número de itens por página

export default function Publicacoes() {
  const [posts, setPosts] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);

  async function fetchPublicacoes() {
    try {
      const publicacoes = await carregarPublicacoes();
      setPosts(publicacoes);
    } catch (error) {
      console.error("Erro ao carregar publicações:", error);
    }
  }

  useEffect(() => {
    fetchPublicacoes();
  }, []);

  // Função para buscar os itens da página atual
  function getCurrentPageItems() {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return posts.slice(startIndex, endIndex);
  }

  const listItens = getCurrentPageItems().map((item: any) => (
    <Link key={item} href={`/publicacoes/${item.id}`}>
      <Banner post={item} />
    </Link>
  ));

  // Função para avançar para a próxima página
  function nextPage() {
    setCurrentPage((prevPage) => prevPage + 1);
    window.scrollTo(0, 0); // Rolagem para o topo da página
  }

  // Função para voltar para a página anterior
  function previousPage() {
    setCurrentPage((prevPage) => prevPage - 1);
    window.scrollTo(0, 0); // Rolagem para o topo da página
  }

  return (
    <div style={{ marginTop: 55 }} className={styles.container}>
      <h1 className={styles.theme}>Publicações</h1>

      <div className={styles.div}>{listItens}</div>

      <div className={styles.pagination}>
        <button
          onClick={previousPage}
          disabled={currentPage === 1}
          className={`${styles.pageButton} ${styles.previousButton}`}
        >
          Anterior
        </button>
        <button
          onClick={nextPage}
          disabled={getCurrentPageItems().length < ITEMS_PER_PAGE}
          className={`${styles.pageButton} ${styles.nextButton}`}
        >
          Próxima
        </button>
      </div>
    </div>
  );
}
