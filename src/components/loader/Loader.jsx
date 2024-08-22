import "./spinner.css";

export default function Loader() {
  return (
    <>
      <div className="bg-[#292929]/10 h-screen w-ful flex flex-col items-center justify-center">
        <span className="loader"></span>
      </div>
    </>
  );
}
