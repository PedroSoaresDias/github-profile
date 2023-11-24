import { getUserGitHub } from "@/app/lib/getUserGitHub"
import Image from "next/image";
import { GetUser } from "./Buttons";

export async function Card({ query }: { query: string }) {
    const developer = await getUserGitHub(query);

    return (
        <div>
            {/* {developers.map((developer: Dev) => ( */}
                <div key={developer.id}>
                    <Image src={developer.avatar_url} alt={developer.login} width={150} height={150} className="rounded-full" />
                    <h3>{developer.login}</h3>
                    <GetUser username={developer.login} />
                </div>
            {/* // ))} */}
        </div>
    )
}