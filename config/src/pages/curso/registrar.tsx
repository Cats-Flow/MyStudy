import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Header } from "../../content/layout";
import {
  AppWindow,
  BookBookmark,
  Buildings,
  CalendarDots,
  Chalkboard,
  GraduationCap,
} from "@phosphor-icons/react";
import { Select } from "antd";
import { Account, Favorite } from "../../content/cards";

export function CursoRegister() {
  return (
    <section className="_body _board _cr">
      <Helmet>
        <title>Registrar novo curso | Nauka</title>
        <meta name="title" content="Registrar novo curso | Nauka" />
      </Helmet>
      <Header />
      <main className="_main">
        <section className="_column p1">
          <Account />
          <Favorite />
        </section>
        <section className="_column p5">
          <section className="_card">
            <div className="_fav">
              <BookBookmark className="ico" />
            </div>
            <h2>Registrar curso</h2>
            <div className="_div">
              <label className="_input v2" htmlFor="instituicao">
                <Buildings className="ico" />
                <input
                  className="inp"
                  placeholder="Nome da instituição*"
                  title="Nome da instituição"
                  id="instituicao"
                  type="text"
                  maxLength={125}
                  max={125}
                  required
                />
              </label>
              <label className="_input v2" htmlFor="curso">
                <Chalkboard className="ico" />
                <input
                  className="inp"
                  placeholder="Nome do curso"
                  title="Nome do curso"
                  id="curso"
                  type="text"
                  maxLength={125}
                  max={125}
                  required
                />
              </label>
              <div className="_nav">
                <label className="_select v2" htmlFor="duracao">
                  <CalendarDots className="ico" />
                  <Select
                    id="duracao"
                    className="sel"
                    placeholder="Duração"
                    options={[
                      {
                        label: <span className="ant-title">Semestres</span>,
                        title: "Semestres",
                        options: [
                          {
                            value: "1° Semestre",
                            label: <span>1° Semestre</span>,
                          },
                          {
                            value: "2° Semestre",
                            label: <span>2° Semestre</span>,
                          },
                          {
                            value: "3° Semestre",
                            label: <span>3° Semestre</span>,
                          },
                          {
                            value: "4° Semestre",
                            label: <span>4° Semestre</span>,
                          },
                          {
                            value: "5° Semestre",
                            label: <span>5° Semestre</span>,
                          },
                          {
                            value: "6° Semestre",
                            label: <span>6° Semestre</span>,
                          },
                          {
                            value: "7° Semestre",
                            label: <span>7° Semestre</span>,
                          },
                          {
                            value: "8° Semestre",
                            label: <span>8° Semestre</span>,
                          },
                          {
                            value: "9° Semestre",
                            label: <span>9° Semestre</span>,
                          },
                          {
                            value: "10° Semestre",
                            label: <span>10° Semestre</span>,
                          },
                          {
                            value: "11° Semestre",
                            label: <span>11° Semestre</span>,
                          },
                          {
                            value: "12° Semestre",
                            label: <span>12° Semestre</span>,
                          },
                        ],
                      },
                      {
                        label: <span className="ant-title">Módulos</span>,
                        title: "Módulos",
                        options: [
                          {
                            value: "1° Módulo",
                            label: <span>1° Módulo</span>,
                          },
                          {
                            value: "2° Módulo",
                            label: <span>2° Módulo</span>,
                          },
                          {
                            value: "3° Módulo",
                            label: <span>3° Módulo</span>,
                          },
                          {
                            value: "4° Módulo",
                            label: <span>4° Módulo</span>,
                          },
                          {
                            value: "5° Módulo",
                            label: <span>5° Módulo</span>,
                          },
                          {
                            value: "6° Módulo",
                            label: <span>6° Módulo</span>,
                          },
                          {
                            value: "7° Módulo",
                            label: <span>7° Módulo</span>,
                          },
                          {
                            value: "8° Módulo",
                            label: <span>8° Módulo</span>,
                          },
                          {
                            value: "9° Módulo",
                            label: <span>9° Módulo</span>,
                          },
                          {
                            value: "10° Módulo",
                            label: <span>10° Módulo</span>,
                          },
                          {
                            value: "11° Módulo",
                            label: <span>11° Módulo</span>,
                          },
                          {
                            value: "12° Módulo",
                            label: <span>12° Módulo</span>,
                          },
                        ],
                      },
                    ]}
                  ></Select>
                </label>
                <label className="_select v2" htmlFor="formacao">
                  <GraduationCap className="ico" />
                  <Select
                    id="formacao"
                    className="sel"
                    placeholder="Formação"
                    options={[
                      {
                        label: <span className="ant-title">Cursos</span>,
                        title: "Cursos",
                        options: [
                          {
                            value: "Curso",
                            label: <span>Curso</span>,
                          },
                          {
                            value: "Curso Técnico",
                            label: <span>Curso Técnico</span>,
                          },
                          {
                            value: "Curso Extracurricular",
                            label: <span>Curso Extracurricular</span>,
                          },
                        ],
                      },
                      {
                        label: <span className="ant-title">Ensino Superior</span>,
                        title: "Ensino Superior",
                        options: [
                          {
                            value: "Tecnólogo",
                            label: <span>Tecnólogo</span>,
                          },
                          {
                            value: "Licenciatura",
                            label: <span>Licenciatura</span>,
                          },
                          {
                            value: "Bachalerado",
                            label: <span>Bachalerado</span>,
                          },
                        ],
                      },
                      {
                        label: <span className="ant-title">Pós-Graduação</span>,
                        title: "Pós-Graduação",
                        options: [
                          {
                            value: "Certificate",
                            label: <span>Certificate</span>,
                          },
                          {
                            value: "Especialização",
                            label: <span>Especialização</span>,
                          },
                          {
                            value: "MBA",
                            label: <span>MBA</span>,
                          },
                          {
                            value: "MBA Executivo",
                            label: <span>MBA Executivo</span>,
                          },
                          {
                            value: "Master",
                            label: <span>Master</span>,
                          },
                          {
                            value: "Mestrado Acadêmico",
                            label: <span>Mestrado Acadêmico</span>,
                          },
                          {
                            value: "Mestrado Profissional",
                            label: <span>Mestrado Profissional</span>,
                          },
                          {
                            value: "Doutorado",
                            label: <span>Doutorado</span>,
                          },
                          {
                            value: "Pós-Doutorado",
                            label: <span>Pós-Doutorado</span>,
                          },
                        ],
                      },
                    ]}
                  ></Select>
                </label>
              </div>
              <label className="_input v2" htmlFor="portal-academico">
                <AppWindow className="ico" />
                <input
                  className="inp"
                  placeholder="Link do portal acadêmico"
                  title="Link do portal acadêmico"
                  id="portal-academico"
                  type="url"
                  maxLength={250}
                  max={250}
                  required
                />
              </label>
              <label className="_input v2" htmlFor="calendario-academico">
                <CalendarDots className="ico" />
                <input
                  className="inp"
                  placeholder="Link do calendário acadêmico"
                  title="Link do calendário acadêmico"
                  id="calendario-academico"
                  type="url"
                  maxLength={250}
                  max={250}
                  required
                />
              </label>
            </div>
            <button className="_btn active center md">Registrar</button>
          </section>
        </section>
      </main>
      <Footer />
    </section>
  );
}
