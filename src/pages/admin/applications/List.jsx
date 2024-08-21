import ApplicationListRow from "@/components/ApplicationListRow";

export default function List() {
  return (
    <>
    <h2 className="font-semibold text-base mb-5">Applications </h2>
        

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
                <th scope="col" className="px-6 py-3 border border-gray-300 text-center">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <ApplicationListRow />
            <ApplicationListRow />
            <ApplicationListRow />
            <ApplicationListRow />
            <ApplicationListRow />
            <ApplicationListRow />
        </tbody>
    </table>
</div>

    </>
  );
}