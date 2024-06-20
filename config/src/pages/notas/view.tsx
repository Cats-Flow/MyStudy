import { Copy, Notepad, Nut } from "@phosphor-icons/react";
import React from "react";
import { Helmet } from "react-helmet";
import { Favorite } from "../../content/cards";
import { Header, Footer } from "../../content/layout";

export function NotasView() {
  return (
    <section className="_bodyn _board">
      <Helmet>
        <title>Gerenciamento multi-mídia e social - Anotação | Nauka</title>
        <meta name="title" content="Gerenciamento multi-mídia e social - Anotação | Nauka" />
      </Helmet>
      <Header />
      <main className="_main">
        <section className="_column p2">
          <section className="_card">
            <div className="_fav">
              <Nut className="ico" />
            </div>
            <h2>Configurações</h2>
            <div className="_div">
              <p className="_cmd">Universidade Anhanguera</p>
              <p className="_cmd">Graduação em Jormalismo</p>
              <p className="_cmd">Empreendedorismo e Inovação</p>
              <p className="_cmd">24/15/2024</p>
              <div className="_cnt">
                <p className="_cmd">https://nk.so/notas/?AT-1358259NK</p>
                <button className="_btn">
                  <Copy className="ico" />
                </button>
              </div>
            </div>
            <button title="Editar configurações da nota" className="_btn active center">Editar</button>
          </section>
          <Favorite />
        </section>
        <section className="_column p5">
          <section className="_card _mk">
            <div className="_fav">
              <Notepad className="ico" />
            </div>
            <h2>Gerenciamento multi-mídia e social</h2>
            <section className="_textarea"></section>
          </section>
        </section>
      </main>
      <Footer />
    </section>
  )
}