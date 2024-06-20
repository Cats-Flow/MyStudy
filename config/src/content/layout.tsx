import React from "react";
import { ArrowUUpLeft, BellSimpleRinging, CaretDown, Equals, GitBranch, User } from "@phosphor-icons/react";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { useGoBack } from "../utils/return";

export function Header() {
  const goBack = useGoBack();

  return (
    <header className="_header">
      <img className="logo" src="/config/assets/logo.svg" alt="Logo da Nauka by Cats Flow" />
      <nav className="_desk">
        <a title="Painel Inicial" href="/">Painel Inicial</a>
        <span className="_menu">
          <Menu>
            <MenuButton as="button" title="Abrir menu cursos" className="btn">
              Cursos
              <CaretDown weight="bold" />
            </MenuButton>
            <MenuList className="list">
              <MenuItem className="mi" as="a" href="/curso/" title="Graduação em Jornalismo na Anhanguera">Graduação em Jornalismo</MenuItem>
              <MenuItem className="mi" as="a" href="/curso/" title="Graduação em Jornalismo na Anhanguera">Graduação em Jornalismo</MenuItem>
            </MenuList>
          </Menu>
        </span>
        <a title="Suas anotações" href="/notas/">Anotações</a>
        <a title="Seu calendário" href="/calendario/">Calendário</a>
      </nav>
      <span className="_mob">
        <button title="Voltar atrás" className="_btn head" onClick={goBack}>
          <ArrowUUpLeft weight="bold" />
        </button>
        <a className="_btn head desk" title="Novidades da Nauka" href="/novidades">
          <BellSimpleRinging weight="bold" />
        </a>
        <span className="_menu desk">
          <Menu>
            <MenuButton as="button" title="Abrir menu da conta" className="_btn head desk">
              <User weight="bold" />
            </MenuButton>
            <MenuList className="list">
              <MenuItem className="mi" as="a" href="/auth/conta" title="Informações da sua conta">Conta</MenuItem>
              <MenuItem className="mi" as="button" title="Sair da sessão">Sair</MenuItem>
            </MenuList>
          </Menu>
        </span>
        <span className="_menu mob">
          <Menu>
            <MenuButton as="button" title="Abrir menu lateral" className="_btn head mob">
              <Equals weight="bold" />
            </MenuButton>
            <MenuList className="list">
              <MenuItem className="mi mob" as="a" href="/" title="Paienl Incial">Painel Inicial</MenuItem>
              <MenuItem className="mi mob" as="a" href="/notas/view" title="Suas anotações">Anotações</MenuItem>
              <MenuItem className="mi mob" as="a" href="/calendario/" title="Calendário">Calendário</MenuItem>
              <MenuItem className="mi" as="a" href="/novidades" title="Novidades da Nauka">Novidade</MenuItem>
              <MenuItem className="mi" as="a" href="/auth/conta" title="Informações da sua conta">Conta</MenuItem>
              <MenuItem className="mi" as="button" title="Sair da sessão">Sair</MenuItem>
            </MenuList>
          </Menu>
        </span>
      </span>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="_footer">
      <p>© 2024 Cat`s Flow</p>
      <span className="_breach">
        <GitBranch />
        B1.0.1
      </span>
    </footer>
  )
}