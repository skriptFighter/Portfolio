import Icons from "../_components/Icons";

function Stack() {
  return (
    <section className="flex flex-col gap-4 relative py-32">
      <StackBackground />
      <h3 className="w-1/2 text-center mx-auto text-3xl font-bold">
        Technologies
      </h3>

      <div className="w-2/3 mx-auto ">
        <Icons />
      </div>
    </section>
  );
}

function StackBackground() {
  return (
    <div className=" h-full w-1/2 absolute top-0 right-32 p-4 -z-10 bg-indigo-600/15 -skew-y-3"></div>
  );
}

export default Stack;
