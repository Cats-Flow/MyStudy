import React from "react";
import { ArrowUUpLeft, BellSimpleRinging, CaretDown, Equals, GitBranch, User } from "@phosphor-icons/react";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

export function Header() {
  return (
    <header className="_header">
      <img className="logo" src="/config/assets/logo.svg" alt="Logo da Nauka by Cats Flow" />
      <nav className="_desk">
        <a title="" href="">Painel Inicial</a>
        <span className="_menu">
          <Menu>
            <MenuButton as="button" title="Abrir menu cursos" className="btn">
              Cursos
              <CaretDown weight="bold" />
            </MenuButton>
            <MenuList className="list">
              <MenuItem className="mi" as="a" href="" title="Graduação em Jornalismo na Anhanguera">Graduação em Jornalismo</MenuItem>
              <MenuItem className="mi" as="a" href="" title="Graduação em Jornalismo na Anhanguera">Graduação em Jornalismo</MenuItem>
            </MenuList>
          </Menu>
        </span>
        <a title="" href="">Anotações</a>
        <a title="" href="">Calendário</a>
      </nav>
      <span className="_mob">
        <button title="Voltar atrás" className="_btn head">
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
              <MenuItem className="mi" as="a" href="" title="Informações da sua conta">Conta</MenuItem>
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
              <MenuItem className="mi mob" as="a" href="" title="Paienl Incial">Painel Inicial</MenuItem>
              <MenuItem className="mi mob" as="a" href="" title="Suas anotações">Anotações</MenuItem>
              <MenuItem className="mi mob" as="a" href="" title="Calendário">Calendário</MenuItem>
              <MenuItem className="mi" as="a" href="" title="Novidades da Nauka">Novidade</MenuItem>
              <MenuItem className="mi" as="a" href="" title="Informações da sua conta">Conta</MenuItem>
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
      <span>
        <GitBranch />
        B1.0.0
      </span>
    </footer>
  )
}