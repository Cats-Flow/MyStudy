import { BookBookmark, CalendarDots, NewspaperClipping, Notepad, PushPin, Student, User } from "@phosphor-icons/react";
import React from "react";

export function Account() {
  return (
    <section className="_card _profile">
      <div className="photo">
        <User className="ico" />
      </div>
      <div className="_div">
        <h2 className="center">Henry Rodrigues</h2>
        <p className="center">@hhennryy</p>
      </div>
    </section>
  )
}

export function Favorite() {
  return (
    <section className="_card _favoritos">
      <div className="_fav">
        <PushPin className="ico" />
      </div>
      <h2>Acesso rápido</h2>
      <nav className="_div">
        <a className="_btn" href="/calendario" title="Calendário">
          <CalendarDots className="ico" />
          Calendário
        </a>
        <a className="_btn" href="/registrar/curso" title="Registrar novo curso">
          <Student className="ico" />
          Registrar curso
        </a>
        <a className="_btn" href="/registrar/materia" title="Registrar nova matéria">
          <BookBookmark className="ico" />
          Registrar matéria
        </a>
        <a className="_btn" href="/calendar?activies-today" title="Atividades de hoje">
          <NewspaperClipping className="ico" />
          Atividades de hoje
        </a>
        <a className="_btn" href="/notas/" title="Anotações salvas">
          <Notepad className="ico" />
          Minhas anotações
        </a>
      </nav>
      <button className="_btn active center" title="Gerenciar acesso rápido">Gerenciar</button>
    </section>
  )
}