import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Header } from "../../content/layout";
import { Eye, Info, Password } from "@phosphor-icons/react";

export function Login() {
  return (
    <section className="_body _max">
      <Helmet>
        <title>Entrar na sua conta | Nauka</title>
        <meta name="title" content="Entrar na sua conta | Nauka"></meta>
      </Helmet>
      <Header />
      <main className="_main">
        <form className="_card w01">
          <div className="_fav">
            <Password className="ico" />
          </div>
          <h2 className="center">Entrar no Nauka</h2>
          <div className="_div">
            <input className="_input" type="text" name="Usuário" id="user" placeholder="Usuário" required />
            <div className="_cnt">
              <input className="_input" type="password" name="Senha" id="password" placeholder="Senha" required />
              <div className="_btn ico pass">
                <Eye className="ico" />
              </div>
            </div>
          </div>
          <button type="submit" title="Entrar no Nauka" className="_btn center active">Entrar</button>
        </form>
        <section className="_card w01">
          <div className="_fav">
            <Info className="ico" />
          </div>
          <h2>Precisa de ajuda?</h2>
          <nav className="_nav">
            <a className="_btn min center" title="Esqueci a senha" href="/auth/trocar/senha">Esqueci a senha</a>
            <a className="_btn min center" title="Criar minha conta" href="/auth/register">Criar conta</a>
          </nav>
        </section>
      </main>
      <Footer />
    </section>
  )
}