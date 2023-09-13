'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { getUserGitHub } from '@/app/api/getUserGitHub';

export default function Pesquisar() {
    const [developer, setDeveloper] = useState("");
    const [loading, setLoading] = useState(false)
    const router = useRouter();


    const handleSearch = async () => {
        if (!developer) {
            alert("Por favor, insira um nome de usuário")
            return;
        }

        setLoading(true);

        try {
            const user = await getUserGitHub(developer)
            if (user) {
                router.push(`/user/${user.login}`)
            }
        } catch (error) {
            alert("Ocorreu um erro ao buscar o usuário")
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <input
                type="text"
                value={developer}
                className="border-2 rounded text-gray-950 border-purple-600 transition-all duration-100 hover:shadow focus:bg-transparent hover:shadow-purple-700 my-5"
                onChange={(e) => setDeveloper(e.target.value)}
            />
            <button type="submit" onClick={handleSearch} className='bg-purple-700 hover:bg-purple-500 transition-colors duration-100 text-center p-2 rounded'>
                {loading ? "Pesquisando..." : "Pesquisar"}
            </button>
        </>
    )
}