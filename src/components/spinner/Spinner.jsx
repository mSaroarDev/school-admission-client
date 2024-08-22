import "./spinner.css";

export default function Spinner() {
  return (
    <>
      <div className="h-screen w-ful flex flex-col items-center justify-center bg-transparent">
        <span className="loader"></span>
        <p className="mt-5 text-xl font-semibold">Checking Authentication</p>
      </div>
    </>
  );
}
