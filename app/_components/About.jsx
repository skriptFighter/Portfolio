import Image from "next/image";

function About() {
  return (
    <div className="relative h-[450px]">
      <div className="mx-auto bg-indigo-500/15 z-50 w-5/6 rounded-2xl p-1 border border-white/5 relative shadow-lg shadow-black/50">
        <div className=" h-[350px] rounded-2xl p-16">
          <div className="w-1/2  flex flex-col gap-4 leading-6">
            <h1 className="text-4xl font-bold ">Adel Boudjema</h1>
            <p>
              A front-end developer from{" "}
              <span className="font-bold text-lg">Algeria</span> with a passion
              for{" "}
              <span className="font-bold text-lg">
                transforming ideas into real projects
              </span>
              . With a strong foundation in modern web technologies like React,
              Tailwind CSS, and TypeScript, I craft engaging and dynamic user
              interfaces. Whether it&apos;s developing a new project from
              scratch or enhancing existing ones.
            </p>
          </div>
        </div>

        <div className="absolute right-20 top-20 h-[400px] w-80 bg-indigo-500/30 rounded-2xl shadow-lg shadow-black/50">
          <Image
            alt="profile picture"
            fill
            src={"/profilee.jpg"}
            className="object-cover rounded-2xl p-1 pointer-events-none"
          />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-indigo-900/50 -z-10 skew-y-6 rounded-xl shadow-md shadow-slate-100/10 "></div>
    </div>
  );
}

export default About;
