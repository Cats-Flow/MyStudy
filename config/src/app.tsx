import React from "react";
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home";

import { Login } from "./pages/auth/login";
import { CMP } from "./pages/auth/change/password";
import { Register } from "./pages/auth/register";
import { Logs } from "./pages/novidades";
import { Dash } from "./pages/dash";
import { Curso } from "./pages/curso/home";
import { Notas } from "./pages/notas/home";
import { NotasView } from "./pages/notas/view";
import { NotasCreate } from "./pages/notas/create";
import { CursoRegister } from "./pages/curso/registrar";

export function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Nauka - Sua plataforma de organização educacional!</title>
        <meta name="title" content="Nauka - Sua plataforma de organização educacional!" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novidades" element={<Logs />} />

        <Route path="/dash/" element={<Dash />} />

        <Route path="/curso/" element={<Curso />} />
        <Route path="/curso/register" element={<CursoRegister />} />

        <Route path="/notas/" element={<Notas />} />
        <Route path="/notas/view" element={<NotasView />} />
        <Route path="/notas/create" element={<NotasCreate />} />

        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/trocar/senha" element={<CMP />} />
      </Routes>
    </BrowserRouter>
  )
}