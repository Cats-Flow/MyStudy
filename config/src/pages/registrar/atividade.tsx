import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Header } from "../../content/layout";
import { ActiviesColumn } from "../../content/activities";
import { ClipboardText } from "@phosphor-icons/react";
import { Account, Favorite } from "../../content/cards";

export function RAT() {
  return (
    <section className="_body _rat">
      <Helmet>
        <title>Registrar nova atividade | Nauka</title>
        <meta name="title" content="Registrar nova atividade | Nauka" />
      </Helmet>
      <Header />
      <main className="_main">
        <ActiviesColumn />
        <form className="_card">
          <div className="_fav">
            <ClipboardText className="ico" />
          </div>
          <h2>Adicionar atividade</h2>

        </form>
        <section className="_column p1">
          <Account />
          <Favorite />
        </section>
      </main>
      <Footer />
    </section>
  )
}