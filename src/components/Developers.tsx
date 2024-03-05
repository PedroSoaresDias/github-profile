import Image from "next/image"

export function Developers({ id, image, name, children }:
  {
    id: number,
    image: string,
    name: string,
    children: React.ReactNode
  }) {
  return (
    <div key={id} className="border-2 border-white rounded-lg w-50 text-center shadow shadow-gray-500 p-3">
      <Image
        unoptimized
        src={image}
        alt={`foto do usuário ${name}`}
        width={100}
        height={100}
        quality={75}
        className="rounded-full mx-auto"
      />
      <h2 className="text-center font-semibold my-2 text-white">{name}</h2>
      {children}
    </div>
  )
}