'use client';

import React, { useState } from 'react';
import { getUserGitHub } from '@/app/api/getUserGitHub';

export default function Pesquisar() {
    const [username, setUsername] = useState("");

    const handleSubmit = async () => {
        const usernameData = await getUserGitHub(username);
        if(usernameData){
            window.location.href = `/${username}`;
        }
      };

    return (
        <section className="flex min-h-screen items-center justify-center bg-gray-950">
            <div className="bg-gray-50 p-6 flex flex-col">
                <h2 className="text-gray-900 text-lg font-bold">Nome de usuário do GitHub:</h2>
                <input
                    type="text"
                    className="border-2 rounded text-gray-950 border-purple-600 transition-all duration-100 hover:shadow focus:bg-transparent hover:shadow-purple-700 my-5"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit" className="bg-purple-700 hover:bg-purple-500 transition-colors duration-100 text-center p-2 rounded" onClick={handleSubmit}>
                    Pesquisar
                </button>
            </div>
        </section>
    )
}