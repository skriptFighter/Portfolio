import Container from "./_components/Container";
import About from "./_components/About";
import Projects from "./_components/Projects";
import Stack from "./_components/Stack";
import Contact from "./_components/Contact";

function page() {
  return (
    <main className="flex flex-col gap-16 my-40 tracking-widest ">
      <Container>
        <About />
        <Projects />
        <Stack />
      </Container>

      <Contact />
    </main>
  );
}

export default page;
