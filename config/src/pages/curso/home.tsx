import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Footer, Header } from "../../content/layout";
import { AppWindow, BookBookmark, CalendarDots, ChartDonut, ClipboardText, Funnel, Notepad, Nut, Pen, PushPin } from "@phosphor-icons/react";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { DateTime } from 'luxon';

import { Select } from '@chakra-ui/react'
import StatusTag from "../../content/tags";
import CardTitle from "../../content/titlecard";

export function Curso() {
  const [date, setDate] = useState(DateTime.now().setZone("local"));

  const onChange = (newDate) => {
    setDate(DateTime.fromJSDate(newDate).setZone("local"));
  };

  const formattedDate = date.setLocale('pt-BR').toFormat("dd 'de' MMMM 'de' yyyy");

  return (
    <section className="_body _curso _board">
      <Helmet>
        <title>Graduação em Jornalismo - Painel de estudos | Nauka</title>
        <meta name="title" content="Graduação em Jornalismo - Painel de estudos | Nauka" />
      </Helmet>
      <Header />
      <main className="_main">
        <section className="_column p2">
          <section className="_card _filtros">
            <div className="_fav">
              <Funnel className="ico" />
            </div>
            <h2>Filtros</h2>
            <div className="_div">
              <label className="_select" htmlFor="semestre">
                <Select className="camp">
                  <option value="">Semestres</option>
                  <option value="primeiro-semestre">1º Semestre</option>
                  <option value="segundo-semestre">2º Semestre</option>
                  <option value="terceiro-semestre">3º Semestre</option>
                  <option value="quarto-semestre">4º Semestre</option>
                  <option value="quinto-semestre">5º Semestre</option>
                  <option value="sexto-semestre">6º Semestre</option>
                  <option value="setimo-semestre">7º Semestre</option>
                  <option value="oitavo-semestre">8º Semestre</option>
                </Select>
              </label>
              <label className="_select" htmlFor="status">
                <Select className="camp">
                  <option value="">Status</option>
                  <option value="concuido">Concluido</option>
                  <option value="em-andamento">Em andamento</option>
                  <option value="reprovado">Reprovado</option>
                  <option value="não-iniciado">Não iniciado</option>
                </Select>
              </label>
            </div>
          </section>
          <section className="_card hall">
            <div className="_fav">
              <Nut className="ico" />
            </div>
            <h2>Ferramentas</h2>
            <nav className="_div">
              <a className="_btn" title="Calendário da disciplina" href="/calendario?GD-0282885NK">
                <CalendarDots className="ico" />
                Calendário
              </a>
              <a className="_btn" title="Anotações da disciplina" href="/notas/?GD-0282885NK">
                <Notepad className="ico" />
                Anotações
              </a>
              <a className="_btn" href="/registrar/materia?GD-0282885NK" title="Registrar nova matéria">
                <BookBookmark className="ico" />
                Nova matéria
              </a>
              <a className="_btn" title="Portal Acadêmico da Graduaçaõ em Jornalismo na Universidade Anhanguera" href="#" target="_blank" rel="noopener noreferrer">
                <AppWindow className="ico" />
                Portal Acadêmico
              </a>
              <a className="_btn" title="Calendário Acadêmico da Graduaçaõ em Jornalismo na Universidade Anhanguera" href="#" target="_blank" rel="noopener noreferrer">
                <CalendarDots className="ico" />
                Calendário Acadêmico
              </a>
            </nav>
            <button className="_btn active center" title="Gerenciar ferramentas">Gerenciar</button>
          </section>
          <section className="_card _calendar">
            <div className="_fav">
              <CalendarDots className="ico" />
            </div>
            <h2>Calendário</h2>
            <Calendar className="_calendar" onChange={onChange} value={date.toJSDate()} locale="pt-BR" />
          </section>
          <section className="_card _activities">
            <div className="_fav">
              <ClipboardText className="ico" />
            </div>
            <h2>{formattedDate}</h2>
            <div className="_div">
              <a title="Atividade 1" href="/curso/atividades/view?AA-1866587NK" className="_logi">
                <div className="title">
                  <h3>Atividade 1</h3>
                  <span className="_cnt">
                    <h6>Faculdade</h6>
                    <h6>|</h6>
                    <h6>Curso</h6>
                  </span>
                </div>
                <p>DD/MM/AAAA - DD/MM/AAAA</p>
                <StatusTag status="Concluido" size="sm" />
              </a>
              <a title="Atividade 1" href="/curso/atividades/view?AA-1866587NK" className="_logi">
                <div className="title">
                  <h3>Atividade 1</h3>
                  <span className="_cnt">
                    <h6>Faculdade</h6>
                    <h6>|</h6>
                    <h6>Curso</h6>
                  </span>
                </div>
                <p>DD/MM/AAAA - DD/MM/AAAA</p>
                <StatusTag status="Em andamento" size="sm" />
              </a>
              <a title="Atividade 1" href="/curso/atividades/view?AA-1866587NK" className="_logi">
                <div className="title">
                  <h3>Atividade 1</h3>
                  <span className="_cnt">
                    <h6>Faculdade</h6>
                    <h6>|</h6>
                    <h6>Curso</h6>
                  </span>
                </div>
                <p>DD/MM/AAAA - DD/MM/AAAA</p>
                <StatusTag status="Perdida" size="sm" />
              </a>
              <a title="Atividade 1" href="/curso/atividades/view?AA-1866587NK" className="_logi">
                <div className="title">
                  <h3>Atividade 1</h3>
                  <span className="_cnt">
                    <h6>Faculdade</h6>
                    <h6>|</h6>
                    <h6>Curso</h6>
                  </span>
                </div>
                <p>DD/MM/AAAA - DD/MM/AAAA</p>
                <StatusTag status="Não iniciada" size="sm" />
              </a>
              <a title="Atividade 1" href="/curso/atividades/view?AA-1866587NK" className="_logi">
                <div className="title">
                  <h3>Atividade 1</h3>
                  <span className="_cnt">
                    <h6>Faculdade</h6>
                    <h6>|</h6>
                    <h6>Curso</h6>
                  </span>
                </div>
                <p>DD/MM/AAAA - DD/MM/AAAA</p>
                <StatusTag status="Reprovado" size="sm" />
              </a>
            </div>
          </section>
        </section>
        <section className="_column p5">
          <CardTitle type="materias" />
          <section className="_group p1">
            <a className="_card a materia" title="" href="/curso/materia?MT-7861548NK">
              <div className="_fav">
                <BookBookmark className="ico" />
              </div>
              <span className="title">
                <h6>1º Semestre</h6>
                <h3>Empreendedorismo e Inovação</h3>
              </span>
              <StatusTag status="Concluido" size="md" />
            </a>
            <a className="_card a materia" title="" href="/curso/materia?MT-7861548NK">
              <div className="_fav">
                <BookBookmark className="ico" />
              </div>
              <span className="title">
                <h6>1º Semestre</h6>
                <h3>Empreendedorismo e Inovação</h3>
              </span>
              <StatusTag status="Em andamento" size="md" />
            </a>
            <a className="_card a materia" title="" href="/curso/materia?MT-7861548NK">
              <div className="_fav">
                <BookBookmark className="ico" />
              </div>
              <span className="title">
                <h6>1º Semestre</h6>
                <h3>Empreendedorismo e Inovação</h3>
              </span>
              <StatusTag status="Perdida" size="md" />
            </a>
            <a className="_card a materia" title="" href="/curso/materia?MT-7861548NK">
              <div className="_fav">
                <BookBookmark className="ico" />
              </div>
              <span className="title">
                <h6>1º Semestre</h6>
                <h3>Empreendedorismo e Inovação</h3>
              </span>
              <StatusTag status="Não iniciada" size="md" />
            </a>
            <a className="_card a materia" title="" href="/curso/materia?MT-7861548NK">
              <div className="_fav">
                <BookBookmark className="ico" />
              </div>
              <span className="title">
                <h6>1º Semestre</h6>
                <h3>Empreendedorismo e Inovação</h3>
              </span>
              <StatusTag status="Reprovado" size="md" />
            </a>
          </section>
          <CardTitle type="anotacoes" />
          <section className="_group p2">
            <a title="Nota sobre Gerenciamento multi-mídia e social" href="/notas/?AT-1358259NK" className="_card _note a">
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
      </main>
      <Footer />
    </section>
  )
}