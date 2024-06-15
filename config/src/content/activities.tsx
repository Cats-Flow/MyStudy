import { CalendarDots, ClipboardText } from "@phosphor-icons/react";
import React, { useState } from "react";
import StatusTag from "./tags";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { DateTime } from 'luxon';

export function ActiviesColumn() {
  const [date, setDate] = useState(DateTime.now().setZone("local"));

  const onChange = (newDate) => {
    setDate(DateTime.fromJSDate(newDate).setZone("local"));
  };

  const formattedDate = date.setLocale('pt-BR').toFormat("dd 'de' MMMM 'de' yyyy");

  return (
    <section className="_column p2">
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
  )
}