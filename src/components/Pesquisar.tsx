'use client'

import { useState } from 'react'
// import useSWR from 'swr';
// import Usuario from './Usuario';
import { useRouter } from 'next/navigation';

export default function Pesquisar() {
    const [username, setUsername] = useState("");
    const router = useRouter();
    // const { data: developer, error } = useSWR(username ? `https://api.github.com/users/${username}` : null);

    // if(error) return <div>Erro ao carregar</div>

    return (
        <section className="flex min-h-screen items-center justify-center bg-gray-950">
            <div className="bg-gray-50 p-6 rounded-md flex flex-col">
                <h2 className="text-gray-900 text-lg font-bold">Nome de usuário do GitHub:</h2>
                <input
                    type="text"
                    value={username}
                    className="border-2 rounded text-gray-950 border-purple-600 transition-all duration-100 hover:shadow focus:bg-transparent hover:shadow-purple-700 my-5"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit" onClick={() => router.push(`/user/${username}`)} className='bg-purple-700 hover:bg-purple-500 transition-colors duration-100 text-center p-2 rounded'>
                    Pesquisar
                </button>

                {/* {developer ? <Usuario username={developer} /> : null} */}
            </div>
        </section>
    )
}