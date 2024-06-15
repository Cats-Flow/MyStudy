import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Header } from "../../../content/layout";
import { Password, Eye } from "@phosphor-icons/react";

export function CMP() {
  return (
    <section className="_body _max">
      <Helmet>
        <title>Trocar minha senha | Nauka</title>
        <meta name="title" content="Trocar minha senha | Nauka"></meta>
      </Helmet>
      <Header />
      <main className="_main">
        <form className="_card w01">
          <div className="_fav">
            <Password className="ico" />
          </div>
          <h2 className="center">Trocar senha</h2>
          <div className="_div">
            <input className="_input" type="text" name="Usuário" id="user" placeholder="Usuário" required />
            <div className="_cnt">
              <input className="_input" type="password" name="Nova senha" id="password" placeholder="Nova senha" required />
              <div className="_btn ico pass">
                <Eye className="ico" />
              </div>
            </div>
          </div>
          <button type="submit" title="Entrar no Nauka" className="_btn center active">Trocar senha</button>
        </form>
      </main>
      <Footer />
    </section>
  )
}