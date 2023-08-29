'use client'

import { useState, useEffect } from 'react'
import { getUserGitHub } from '@/app/api/getUserGitHub';
import Usuario from './Usuario';

export default function Pesquisar() {
    const [username, setUsername] = useState("");

    async function fecthDeveloper() {
        const user = await getUserGitHub(username);
        if (user) {
            alert("Usuário não encontrado");
            return;
        }

        setUsername(user.login)
    }

    useEffect(() => {
        if (!username) {
            alert("Por favor, insira um nome de usuário do GitHub");
        }
    }, [username]);

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
                <button type="submit" onClick={fecthDeveloper} className='bg-purple-700 hover:bg-purple-500 transition-colors duration-100 text-center p-2 rounded'>
                    Pesquisar
                </button>

                {username && <Usuario username={username} />}
            </div>
        </section>
    )
}