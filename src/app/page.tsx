'use client'

import Pesquisar from "@/components/Pesquisar"
import Usuario from '@/components/Usuario';
import useSWR from "swr";
import { getUserGitHub } from "./api/getUserGitHub";

export default function Home(username: string) {

  const { data: developer, error } = useSWR(username, getUserGitHub);

  if (error) return <div>Erro ao carregar</div>
  if (!developer) return <div>Carregando...</div>

  return (
    <div>
      {developer ? <Usuario username={developer}/> : <Pesquisar/>}
    </div>
  )
}