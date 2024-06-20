import React from "react";
import { Footer, Header } from "../../content/layout";
import { Helmet } from "react-helmet";
import { Nut, Notepad, FloppyDisk } from "@phosphor-icons/react";
import { Favorite } from "../../content/cards";
import { Select } from "@chakra-ui/react";
import CustomEditor from "../../content/texeditor";

export function NotasCreate() {
  return (
    <section className="_body _board _notacreate">
      <Helmet>
        <title>Criar nova anotação | Nauka</title>
        <meta name="title" content="Criar nova anotação | Nauka" />
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
              <label className="_select" htmlFor="instituicao">
                <Select placeholder="Instituições" className="camp" id="instituicao">
                  <option value="Universidade Anhanguera">Universidade Anhanguera</option>
                  <option value="E.T.E Irmão Pedro">E.T.E Irmão Pedro</option>
                </Select>
              </label>
              <label className="_select" htmlFor="curso">
                <Select placeholder="Cursos" className="camp" id="curso">
                  <option value="Graduação em Jornalismo">Graduação em Jornalismo</option>
                  <option value="Técnico em Publicidade">Técnico em Publicidade</option>
                </Select>
              </label>
              <label className="_select" htmlFor="materias">
                <Select placeholder="Matérias" className="camp" id="materias">
                  <option value="Empreendedorismo e Inovação">Empreendedorismo e Inovação</option>
                  <option value="Redação Publicitária">Redação Publicitária</option>
                </Select>
              </label>
              <p className="_cmd">24/15/2024</p>
            </div>
            <button title="Salvar anotação" className="_btn active center save">
              <FloppyDisk className="ico" />
              Salvar
            </button>
          </section>
          <Favorite />
        </section>
        <section className="_card _mk">
          <div className="_fav">
            <Notepad className="ico" />
          </div>
          <input className="_input" type="text" placeholder="Título da anotação" maxLength={100} max={100} />
          <CustomEditor />
        </section>
      </main>
      <Footer />
    </section>
  );
}
