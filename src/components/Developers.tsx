import { getSearchUsersByPage } from "@/app/lib/data";
import Image from "next/image";
import { GetUser } from "./Buttons";

export default async function Developers({ query, currentPage }: {
    query: string;
    currentPage: number;
}) {
    const developers = await getSearchUsersByPage(query, currentPage);

    return (
        <div>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 px-10 pb-4">
          {developers && developers.items.map((developer: Developers) => (
            <div key={developer.id} className="border-2 border-white rounded-lg w-50 text-center shadow shadow-gray-500 p-3">
              <Image
                unoptimized
                src={developer.avatar_url}
                alt={developer.login}
                width={100}
                height={100}
                quality={75}
                className="rounded-full mx-auto"
              />
              <h2 className="text-center font-semibold my-2 text-white">{developer.login}</h2>
              {developer != null && <GetUser username={developer.login} />}
            </div>
          ))}
        </div>
      </div>
    )
}