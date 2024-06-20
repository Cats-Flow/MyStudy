import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Header } from "../../content/layout";
import { Funnel, Notepad, Pen } from "@phosphor-icons/react";
import { Select } from "@chakra-ui/react";
import CardTitle from "../../content/titlecard";
import { Favorite } from "../../content/cards";

export function Notas() {
  return (
    <section className="_bodyn _board">
      <Helmet>
        <title>Anotações salvas | Nauka</title>
        <meta name="title" content="Anotações salvas | Nauka" />
      </Helmet>
      <Header />
      <main className="_main">
        <section className="_column p2">
          <section className="_card _filtros">
            <div className="_fav">
              <Funnel className="ico" />
            </div>
            <h2>Ferramentas</h2>
            <div className="_div">
              <label className="_select" htmlFor="instituicao">
                <Select placeholder="Instituições" className="camp" id="instituicao">
                  <option value="">Todas instituições</option>
                  <option value="Universidade Anhanguera">Universidade Anhanguera</option>
                  <option value="E.T.E Irmão Pedro">E.T.E Irmão Pedro</option>
                </Select>
              </label>
              <label className="_select" htmlFor="curso">
                <Select placeholder="Cursos" className="camp" id="curso">
                  <option value="">Todos cursos</option>
                  <option value="Graduação em Jornalismo">Graduação em Jornalismo</option>
                  <option value="Técnico em Publicidade">Técnico em Publicidade</option>
                </Select>
              </label>
              <label className="_select" htmlFor="materias">
                <Select placeholder="Matérias" className="camp" id="materias">
                  <option value="">Todas matérias</option>
                  <option value="Empreendedorismo e Inovação">Empreendedorismo e Inovação</option>
                  <option value="Redação Públicidaria">Redação Públicidaria</option>
                </Select>
              </label>
            </div>
            <a className="_btn" href="/notas/create" title="Criar nova anotação">
              <Notepad className="ico" />
              Nova anotação
            </a>
          </section>
          <Favorite />
        </section>
        <section className="_column p5">
          <CardTitle type="anotacoes" />
          <section className="_group p2">
            <a title="Nota sobre Gerenciamento multi-mídia e social" href="/notas/view?AT-1358259NK" className="_card _note a">
              <div className="_fav">
                <Pen className="ico" />
              </div>
              <h3>Gerenciamento multi-mídia e social</h3>
              <span className="_div">
                <div className="_nav">
                  <p>Graduação em Jornalismo</p>
                  <p>DD/MM/AAAA</p>
                </div>
              </span>
            </a>
            <a title="Nota sobre Gerenciamento multi-mídia e social" href="/notas/view?AT-1358259NK" className="_card _note a">
              <div className="_fav">
                <Pen className="ico" />
              </div>
              <h3>Gerenciamento multi-mídia e social</h3>
              <span className="_div">
                <div className="_nav">
                  <p>Graduação em Jornalismo</p>
                  <p>DD/MM/AAAA</p>
                </div>
              </span>
            </a>
            <a title="Nota sobre Gerenciamento multi-mídia e social" href="/notas/view?AT-1358259NK" className="_card _note a">
              <div className="_fav">
                <Pen className="ico" />
              </div>
              <h3>Gerenciamento multi-mídia e social</h3>
              <span className="_div">
                <p>Empreendedorismo e Inovação</p>
                <div className="_nav">
                  <p>Graduação em Jornalismo</p>
                  <p>DD/MM/AAAA</p>
                </div>
              </span>
            </a>
            <a title="Nota sobre Gerenciamento multi-mídia e social" href="/notas/view?AT-1358259NK" className="_card _note a">
              <div className="_fav">
                <Pen className="ico" />
              </div>
              <h3>Gerenciamento multi-mídia e social</h3>
              <span className="_div">
                <div className="_nav">
                  <p>Graduação em Jornalismo</p>
                  <p>DD/MM/AAAA</p>
                </div>
              </span>
            </a>
            <a title="Nota sobre Gerenciamento multi-mídia e social" href="/notas/view?AT-1358259NK" className="_card _note a">
              <div className="_fav">
                <Pen className="ico" />
              </div>
              <h3>Gerenciamento multi-mídia e social</h3>
              <span className="_div">
                <div className="_nav">
                  <p>Graduação em Jornalismo</p>
                  <p>DD/MM/AAAA</p>
                </div>
              </span>
            </a>
            <a title="Nota sobre Gerenciamento multi-mídia e social" href="/notas/view?AT-1358259NK" className="_card _note a">
              <div className="_fav">
                <Pen className="ico" />
              </div>
              <h3>Gerenciamento multi-mídia e social</h3>
              <span className="_div">
                <div className="_nav">
                  <p>Graduação em Jornalismo</p>
                  <p>DD/MM/AAAA</p>
                </div>
              </span>
            </a>
          </section>
        </section>
      </main>
      <Footer />
    </section>
  )
}