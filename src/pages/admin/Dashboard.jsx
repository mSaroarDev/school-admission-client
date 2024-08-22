import StatisticsCard from "@/components/StatisticsCard";
import { useUserInfo } from "@/utils/useUserInfo";
import { IoGiftOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const currUser = useUserInfo();

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-2xl">Hello, {currUser?.userName}</h2>
          <p className="font-regular text-sm text-gray-600">
            Today is 10 Oct, 2024
          </p>
        </div>
        <div>
          <Link
            to="/admin/products/new"
            className="bg-[#292929] text-white px-5 py-2.5 rounded-lg"
          >
            Add New Product
          </Link>
        </div>
      </div>

      {/* statictics tiles */}
      <div className="grid grid-cols-12 gap-5 mt-10">
        <StatisticsCard
          color="#71357B"
          count={300}
          icon={<IoGiftOutline className="w-7 h-7" />}
          text="Total Products"
        />
        <StatisticsCard
          color="#95D0D4"
          count={120}
          icon={<IoGiftOutline className="w-7 h-7" />}
          text="Total Orders"
        />
        <StatisticsCard
          color="#FE7E51"
          count={120}
          icon={<IoGiftOutline className="w-7 h-7" />}
          text="Total Payments"
        />
        <StatisticsCard
          color="#2D5C92"
          count={120}
          icon={<IoGiftOutline className="w-7 h-7" />}
          text="Pending Orders"
        />
      </div>
    </>
  );
}
