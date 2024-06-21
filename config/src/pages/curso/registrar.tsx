import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Header } from "../../content/layout";
import { AppWindow, BookBookmark, Buildings, CalendarDots, Chalkboard } from "@phosphor-icons/react";
import { Select } from "antd";

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
            <label className="_input v2" htmlFor="instituicao">
              <Buildings className="ico" />
              <input className="inp" placeholder="Nome da instituição*" title="Nome da instituição" id="instituicao" type="text" maxLength={125} max={125} required />
            </label>
            <label className="_input v2" htmlFor="curso">
              <Chalkboard className="ico" />
              <input className="inp" placeholder="Nome do curso" title="Nome do curso" id="curso" type="text" maxLength={125} max={125} required />
            </label>
            <div className="_nav">
              <Select options={[
      {
        label: <span>Semestres</span>,
        title: 'Semestres',
        options: [
          { value: 'primeiro-semestre', label: <span>1° Semestre</span> },
          { value: 'segundo-semestre', label: <span>2° Semestre</span> },
          { value: 'terceiro-semestre', label: <span>3° Semestre</span> },
          { value: 'quarto-semestre', label: <span>4° Semestre</span> },
          { value: 'quinto-semestre', label: <span>5° Semestre</span> },
          { value: 'sexto-semestre', label: <span>6° Semestre</span> },
          { value: 'setimo-semestre', label: <span>7° Semestre</span> },
          { value: 'oitavo-semestre', label: <span>8° Semestre</span> },
          { value: 'nono-semestre', label: <span>9° Semestre</span> },
          { value: 'decimo-semestre', label: <span>10° Semestre</span> },
          { value: 'decimo-primeiro-semestre', label: <span>11° Semestre</span> },
          { value: 'decimo-segundo-semestre', label: <span>12° Semestre</span> },
        ],
      },
      {
        label: <span>Módulos</span>,
        title: 'Módulos',
        options: [
          { value: 'primeiro-modulo', label: <span>1° Módulo</span> },
          { value: 'segundo-modulo', label: <span>2° Módulo</span> },
          { value: 'terceiro-modulo', label: <span>3° Módulo</span> },
          { value: 'quarto-modulo', label: <span>4° Módulo</span> },
        ],
      },
    ]}></Select>
              {/* Select de Semestres */}
            </div>
            <label className="_input v2" htmlFor="portal-academico">
              <AppWindow className="ico" />
              <input className="inp" placeholder="Link do portal acadêmico" title="Link do portal acadêmico" id="portal-academico" type="url" maxLength={250} max={250} required />
            </label>
            <label className="_input v2" htmlFor="calendario-academico">
              <CalendarDots className="ico" />
              <input className="inp" placeholder="Link do calendário acadêmico" title="Link do calendário acadêmico" id="calendario-academico" type="url" maxLength={250} max={250} required />
            </label>
          </div>
        </section>
      </main>
      <Footer />
    </section>
  )
}