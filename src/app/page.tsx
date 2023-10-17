import Navbar from "~/components/NavBar";
export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="flex-center w-full flex-col">
        <div className=" mt-10 flex flex-row items-center justify-center">
          <p className="inline-block bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-6xl text-transparent">
            Welcome
          </p>
        </div>
        {/* <h1 className="head_text text-center">
          Welcome
          <br className="max-md:hidden" />
          <span className="blue_gradient text-center">To The ToDo list</span>
        </h1> */}

        {/* <Feed /> */}
      </section>
    </main>
  );
}
