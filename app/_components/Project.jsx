import Image from "next/image";
import Link from "next/link";

function Project({ title, description, img, href }) {
  return (
    <Link href={href} target="_blank">
      <div className="bg-gradient-to-b from-black/50 to-black/50 hover:bg-gradient-to-b hover:from-black/50 hover:to-indigo-950/95 transition-all duration-700 rounded-2xl p-3 pb-4 flex flex-col gap-4 shadow shadow-slate-300/15 ">
        <div className="relative w-full h-80 overflow-hidden ">
          <Image
            src={img}
            fill
            className="rounded-2xl bg-gradient-to-b from-zinc-200 to-zinc-400 object-cover "
          />
        </div>

        <div className="pl-2 h-24">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default Project;
