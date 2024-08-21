import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <section className="h-screen w-full">
        <main className="h-full w-full flex items-center justify-between">
          <div className="w-full">
            <p className="text-3xl font-light">Best Learning</p>
            <h1 className="font-bold text-4xl my-2">Education Platform</h1>
            <h1 className="font-bold text-5xl text-brand">Get Admission</h1>
            <p className="font-light text-sm my-3 text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ea
              magni quidem provident tenetur amet! Nobis, nemo sequi similique
              maxime velit ea harum
            </p>
            <Link
              to="/admission/home"
              className="mt-4 bg-brand rounded-full text-white px-7 py-2.5 inline-block border border-brand hover:bg-transparent hover:text-brand transition-all duration-150"
            >
              Get Admission
            </Link>
          </div>
          <div className="p-5 flex items-center justify-end">
            <img src="/hero.webp" alt="hero" className="w-4/5 h-auto" />
          </div>
        </main>
      </section>
    </>
  );
}
