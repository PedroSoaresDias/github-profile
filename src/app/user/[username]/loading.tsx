import { FaReact } from 'react-icons/fa6'

export default function Loading() {
    return (
        <div className="bg-black min-h-screen flex justify-center items-center flex-col text-white font-semibold">
            <FaReact className='text-blue-500 animate-spin' size={100} />
            Carregando...
        </div>
    )
}