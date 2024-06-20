import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Header } from "../content/layout";
import {  GraduationCap, Pen } from "@phosphor-icons/react";

import CardTitle from "../content/titlecard";
import { ActiviesColumn } from "../content/activities";
import { Account, Favorite } from "../content/cards";

export function Dash() {
  return (
    <section className="_body _dash _board">
      <Helmet>

      </Helmet>
      <Header />        <title>Painel inicial | Nauka</title>
        <meta name="title" content="Painel inicial | Nauka" />
      <main className="_main">
        <ActiviesColumn />
        <section className="_column p3">
          <CardTitle type="cursos" />
          <section className="_group p1">
            <a className="_card cursos a" title="Graduação em Jornalismo na Universidade Anhanguera" href="/curso/?GD-0282885NK">
              <div className="_fav">
                <GraduationCap className="ico" />
              </div>
              <span className="title">
                <h6>Graduação</h6>
                <h2>Jornalismo</h2>
              </span>
              <span className="_div">
                <p className="_tag s c2">Em andamento</p>
                <h4>Universidade Anhanguera</h4>
              </span>
            </a>
          </section>
          <CardTitle type="anotacoes" />
          <section className="_group p2">
            <a title="Nota sobre Gerenciamento multi-mídia e social" href="/notas/view?AT-1358259NK" className="_card _note a">
              <div className="_fav">
                <Pen className="ico" />
              </div>
              <h3>Gerenciamento multi-mídia e social</h3>
              <span className="_div">
                <p>DD/MM/AAAA</p>
                <p>Graduação em Jornalismo</p>
              </span>
            </a>
          </section>
        </section>
        <section className="_column p1">
          <Account />
          <Favorite />
        </section>
      </main>
      <Footer />
    </section>
  );
}
