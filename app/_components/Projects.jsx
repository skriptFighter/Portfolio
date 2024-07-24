import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Project from "./Project";

function Projects() {
  return (
    <section className="relative  py-52">
      <ProjectsBackground />

      <Carousel className="relative">
        <CarouselContent>
          <CarouselItem className="basis-1/2">
            <Project
              description={
                "Mealio is a web-app that will make you eat healthy. Tailored to your personal tastes and nutritional needs."
              }
              title={"Mealio"}
              href={"https://pretender.vercel.app/"}
              imgList={["/mealioo.png", "/profile.png", "/stickyy.png"]}
            />
          </CarouselItem>

          <CarouselItem className="basis-1/2">
            <Project
              description={
                "WorldWise is a world map that tracks your footsteps into every city you can think of. Never forget your wonderful experiences, and show your friends how you have wandered the world."
              }
              title={"Worldwise"}
              href={"https://pretender.vercel.app/"}
              imgList={["/worldwisee.png", "/profile.png", "/stickyy.png"]}
            />
          </CarouselItem>

          <CarouselItem className="basis-1/2">
            <Project
              description={
                "The-Wild-Oasis is a dashboard for managing cabins and user bookings, providing an efficient way to oversee reservations, track availability, and streamline the booking process."
              }
              title={"WildOasis"}
              href={"https://pretender.vercel.app/"}
              imgList={["/wildoasis.png", "/profile.png", "/stickyy.png"]}
            />
          </CarouselItem>

          <CarouselItem className="basis-1/2 ">
            <Project
              description={
                "Sticky is a web-app  for creating, organizing, and managing notes and to-do lists. Features include note creation, editing, deletion, reminders, and categorization for enhanced productivity."
              }
              title={"Sticky"}
              href={"https://pretender.vercel.app/"}
              imgList={["/stickyy.png", "/profile.png", "/stickyy.png"]}
            />
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious className="absolute -left-10 bg-primary" />
        <CarouselNext className="absolute -right-10 bg-primary" />
      </Carousel>
    </section>
  );
}

function ProjectsBackground() {
  return (
    <div className=" h-full w-full absolute top-0 right-96 p-4 -z-10">
      <div className="flex flex-col gap-2 -rotate-45">
        <div className="justify-center flex ">
          <div className="w-64 bg-indigo-800/20 rounded-lg h-28" />
        </div>

        <div className="justify-center flex gap-4">
          <div className="w-64 bg-indigo-700/20 rounded-lg h-28" />
          <div className="w-64 bg-indigo-600/10 rounded-lg h-28" />
        </div>

        <div className="justify-center flex gap-4">
          <div className="w-64 bg-indigo-500/10 rounded-lg h-28" />
          <div className="w-64 bg-indigo-500/15 rounded-lg h-28" />
          <div className="w-64 bg-indigo-500/30 rounded-lg h-28" />
        </div>

        <div className="justify-center flex ">
          <div className="w-64 bg-indigo-300/10 rounded-lg h-28" />
          <div className="w-64 bg-indigo-300/5 rounded-lg h-28" />
        </div>

        <div className="justify-center flex gap-4">
          <div className="w-64 bg-indigo-500/15 rounded-lg h-28" />
          <div className="w-64 bg-indigo-500/30 rounded-lg h-28" />
          <div className="w-64 bg-indigo-500/10 rounded-lg h-28" />
        </div>

        <div className="justify-center flex gap-4">
          <div className="w-64 bg-indigo-600/20 rounded-lg h-28" />
          <div className="w-64 bg-indigo-700/10 rounded-lg h-28" />
        </div>

        <div className="justify-center flex gap-4">
          <div className="w-64 bg-indigo-800/20 rounded-lg h-28" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
