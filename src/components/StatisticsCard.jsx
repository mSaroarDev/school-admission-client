
export default function StatisticsCard({text, color, icon, count}) {
  return (
    <>
      <div className="col-span-6 md:col-span-4 lg:col-span-3 text-white p-5 rounded-xl" style={{background: color}}>
        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center" style={{color: color}}>
          {icon}
        </div>
        <h2 className="font-bold text-2xl mt-5">{count}</h2>
        <p className="font-regular text-base text-white break-all">
          {text}
        </p>
      </div>
    </>
  );
}
