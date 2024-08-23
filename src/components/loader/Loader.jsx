import "./spinner.css";

export default function Loader() {
  return (
    <>
      <div className="backdrop-blur-sm h-screen w-full flex flex-col items-center justify-center">
        <span className="loader"></span>
      </div>
    </>
  );
}
