import Image from "next/image";
import data from "../data.json";

function LinkCard({
  title,
  href,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      className="w-full flex items-center p-1 rounded-lg border border-gray-400 bg-white mb-4 hover:scale-105 transition-all"
    >
      <div className="flex text-center items-center w-full">
        {image && (
          <Image className="pl-2" src={image} alt="" width={45} height={45} />
        )}

        <h2 className="text-lg font-normal w-full text-center">{title}</h2>
      </div>
    </a>
  );
}

//  Home
export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center mx-auto px-8 pt-24 md:pt-32 md:w-[35rem]">
      <Image src={data.avatar} alt="" width={80} height={80} />
      <h1 className="flex items-center justify-center font-semibold text-2xl mt-2 mb-8 ml-4 text-white">
        {data.name}{" "}
        <Image className="ml-2 pt-[2px]" src={data.mark} width={20} height={20} alt="" />
      </h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
    </main>
  );
}
