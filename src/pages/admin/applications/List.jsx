import ApplicationListRow from "@/components/ApplicationListRow";
import Loader from "@/components/loader/Loader";
import { getApplications } from "@/libs/application";
import { useEffect, useState } from "react";

export default function List() {
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
  

  return loading ? <Loader /> : (
    <>
      <h2 className="font-semibold text-base mb-5">Applications</h2>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4 border border-gray-300">
                Photo
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-300">
                Applicant Name
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-300">
                Father Name
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-300">
                Date of Birth
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-300">
                Class
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-300">
                Section
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-300">
                Contact
              </th>
              <th scope="col" className="px-6 py-3 border border-gray-300">
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 border border-gray-300 text-center"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data && data?.map((item, i)=> <ApplicationListRow key={i} data={item} getData={getData} />)}
          </tbody>
        </table>
      </div>
    </>
  );
}
