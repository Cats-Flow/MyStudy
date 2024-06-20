import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Header } from "../../content/layout";
import { BookBookmark } from "@phosphor-icons/react";

export function CursoRegister() {
  return (
    <section className="_body">
      <Helmet>
        <title>Registrar novo curso | Nauka</title>
        <meta name="title" content="Registrar novo curso | Nauka" />
      </Helmet>
      <Header />
      <main className="_main">
        <section className="_card">
          <div className="_fav">
            <BookBookmark className="ico" />
          </div>
          <h2>Registrar curso</h2>
          <div className="_div">
            <input className="" type="text"  />
          </div>
        </section>
      </main>
      <Footer />
    </section>
  )
}