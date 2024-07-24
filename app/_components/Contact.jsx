import { Button } from "@/components/ui/button";
import Link from "next/link";

function Contact() {
  return (
    <section className="w-full py-10 flex flex-col">
      <div className="hover:bg-zinc-800/50 transition-all duration-300 py-32 flex flex-col gap-12 items-center max-w-[1366px] mx-auto w-full ">
        <h1 className="text-4xl font-bold      ">
          Hit me up if you&apos;re interested in working together
        </h1>
        <Link href={"www.google.com"} target="_blank">
          <Button className="text-lg w-40 hover:w-48 py-6 bg-indigo-900 hover:bg-indigo-800 transition-all duration-300">
            Get in touch
          </Button>
        </Link>
      </div>

      <div className="hover:bg-zinc-800/50 py-20 transition-all duration-300 text-lg">
        <div className="flex justify-between max-w-[1366px] mx-auto">
          <Link href={"www.google.com"} target="_blank">
            <p>Instagram</p>
            <p>@zdeldel</p>
          </Link>

          <Link href={"www.google.com"} target="_blank">
            <p>LinkedIn</p>
            <p>@zdeldel</p>
          </Link>

          <Link href={"www.google.com"} target="_blank">
            <p>Github</p>
            <p>@zdeldel</p>
          </Link>

          <Link href={"www.google.com"} target="_blank">
            <p>Facebook</p>
            <p>@zdeldel</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Contact;
