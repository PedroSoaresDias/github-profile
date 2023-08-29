import Pesquisar from "@/components/Pesquisar"
import Usuario from '@/components/Usuario';
import { getUserGitHub } from "./api/getUserGitHub";

export default async function Home(username:string) {

  const developer = await getUserGitHub(username)

  return (
    <div>
      {developer && <Usuario username={developer} />}
      {!developer && <Pesquisar />}
    </div>
 )
}