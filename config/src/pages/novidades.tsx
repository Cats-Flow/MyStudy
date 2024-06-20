import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Masonry from "react-masonry-css";

import { Footer, Header } from "../content/layout";
import { GitCommit, CaretLeft, CaretRight } from "@phosphor-icons/react";

export function Logs() {
  const breach = [
    {
      title: "<!-- B1.0.1 -->",
      item: [
        "Lógica para retornar página.",
      ]
    },
    {
      title: "<!-- B1.0.0 -->",
      item: [
        "Estrutura do Header criada.",
        "Página dos cursos criada.",
        "Página do painel inicial criada.",
        "Página de novidade criada.",
        "Página inicial criada.",
        "Página de login, criar conta e alterar senha criadas.",
        "Estrutura de pastas do projeto."
      ]
    },
  ];

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSections = isMobile ? breach.slice(startIndex, endIndex) : breach;
  const totalPages = Math.ceil(breach.length / itemsPerPage);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <section className="_body">
      <Helmet>
        <title>Novidades | Nauka</title>
        <meta name="title" content="Novidades | Nauka" />
      </Helmet>
      <Header />
      <main className="_main">
        <Masonry breakpointCols={breakpointColumnsObj} className="_masonry" columnClassName="_column">
          {currentSections.map((section, index) => (
            <section key={index} className="_card">
              <div className="_fav">
                <GitCommit className="ico" />
              </div>
              <h2>{section.title}</h2>
              <div className="_div">
                <ul className="_list">
                  {section.item.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </Masonry>
        {isMobile && (
          <div className="_row">
            <button title="Retornar de página" className="_btn rd" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
              <CaretLeft className="ico" />
            </button>
            <span className="_block">{currentPage} de {totalPages}</span>
            <button title="Avançar de página" className="_btn rd" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
              <CaretRight className="ico" />
            </button>
          </div>
        )}
      </main>
      <Footer />
    </section>
  );
}
