import Image from "next/image";
import Link from "next/link";

export default function CountryCard({ 
    name, 
    ptName, 
    flag, 
    flagAlt 
}: { 
    name: string, 
    ptName: string, 
    flag: string, 
    flagAlt: string
 }) {
    return (
        <Link href={`/pais/${name}`}>
            <article key={name} className="h-64 rounded-xl min-w-full p-2 bg-white border-2 hover:border-indigo-200 hover:shadow-xl transition-all">
                <div className="relative w-full h-40 p-2 overflow-hidden rounded-md">
                    <Image
                        src={flag}
                        fill
                        className="object-cover"
                        alt={flagAlt}
                    />
                </div>
                <h1 className="font-bold text-xl text-center mt-1">{ptName}</h1>
            </article>
        </Link>
    )
}