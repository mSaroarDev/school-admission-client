import Loader from "@/components/loader/Loader";
import StatisticsCard from "@/components/StatisticsCard";
import { getApplications } from "@/libs/application";
import formatDateWithTimezoneOffset from "@/utils/todayData";
import { useUserInfo } from "@/utils/useUserInfo";
import { useEffect, useState } from "react";
import { IoGiftOutline } from "react-icons/io5";

export default function Dashboard() {
  const currUser = useUserInfo();

  const [loading, setLoading] = useState(false);
  // get applications
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      setLoading(true);
      const res = await getApplications();
      if (res.ok) {
        const data = await res.json();
        setData(data?.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // counts
  const newApply = data && data?.filter((item)=> item?.currStatus === "Submitted")
  const acceptedApply = data && data?.filter((item)=> item?.currStatus === "Approved")
  const rejectedApply = data && data?.filter((item)=> item?.currStatus === "Rejected")


  return loading ? <Loader /> : (
    <div className="p-7">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-2xl">Hello, {currUser?.userName}</h2>
          <p className="font-regular text-sm text-gray-600">
            {formatDateWithTimezoneOffset(6)}
          </p>
        </div>
        <div>
          {/* <Link
            to="/admin/products/new"
            className="bg-[#292929] text-white px-5 py-2.5 rounded-lg"
          >
            Add New Product
          </Link> */}
        </div>
      </div>

      {/* statictics tiles */}
      <div className="grid grid-cols-12 gap-5 mt-10">
        <StatisticsCard
          color="#71357B"
          count={data && data?.length}
          icon={<IoGiftOutline className="w-7 h-7" />}
          text="Total Applicants"
        />
        <StatisticsCard
          color="#95D0D4"
          count={parseInt(newApply?.length)}
          icon={<IoGiftOutline className="w-7 h-7" />}
          text="New Applicants"
        />
        <StatisticsCard
          color="#FE7E51"
          count={parseInt(acceptedApply?.length || 0)}
          icon={<IoGiftOutline className="w-7 h-7" />}
          text="Accepted"
        />
        <StatisticsCard
          color="#2D5C92"
          count={parseInt(rejectedApply?.length || 0)}
          icon={<IoGiftOutline className="w-7 h-7" />}
          text="Rejected"
        />
      </div>
    </div>
  );
}
