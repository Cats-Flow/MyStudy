import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Header } from "../../content/layout";
import { Eye, IdentificationBadge, Info } from "@phosphor-icons/react";

export function Register() {
  return (
    <section className="_body _max _register">
      <Helmet>
        <title>Criar conta | Nauka</title>
        <meta name="title" content="Criar conta | Nauka"></meta>
      </Helmet>
      <Header />
      <main className="_main">
        <form className="_card w01">
          <div className="_fav">
            <IdentificationBadge className="ico" />
          </div>
          <h2 className="center">Criar conta</h2>
          <div className="_div">
            <input className="_input" type="text" name="Nome e Sobrenome" placeholder="Nome e Sobrenome" id="name" minLength={5} min={5} required />
            <input className="_input" type="text" name="Usuário" placeholder="Usuário" id="name" minLength={5} min={5} required />
            <input className="_input" type="email" name="E-mail" placeholder="E-mail" id="email" minLength={5} min={5} required />
            <div className="_cnt">
              <input className="_input" type="password" name="Senha" id="password" placeholder="Senha" minLength={5} min={5} required />
              <div className="_btn ico pass">
                <Eye className="ico" />
              </div>
            </div>
          </div>
          <div className="_div">
            <button type="submit" className="_btn active center" title="Criar conta no Nauka">Criar conta</button>
            <p className="_terms-accept">Ao criar uma conta você aceita os&nbsp;<a title="Termos e políticas da Nauka by Cat's Flow" href="/terms/">termos</a>&nbsp;da Nauka</p>
          </div>
        </form>
        <section className="_card w01">
          <div className="_fav">
            <Info className="ico" />
          </div>
          <h2>Já possui uma conta?</h2>
          <nav className="_nav">
            <a className="_btn min center" title="Entrar na minha conta" href="/auth/login">Fazer login</a>
            <a className="_btn min center" title="Políticas e Termos da Nauka" href="/terms/">Políticas e termos</a>
          </nav>
        </section>
      </main>
      <Footer />
    </section>
  )
}