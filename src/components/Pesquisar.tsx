'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import { getUserGitHub } from '@/app/api/getUserGitHub';

export default function Pesquisar({ username }: { username: string }) {
    const [developer, setDeveloper] = useState("");
    const router = useRouter();

    const {data} = useSWR(`https://api.github.com/users/${username}`,async () => {
        const user = await getUserGitHub(developer);
        return user.data;
    })

    const handleSearch = () => {
        if (data) {
            router.push(`/user/${developer}`)
        } else {
            alert("Usuário não encontrado, digite novamente")
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
                Pesquisar
            </button>

        </>
    )
}