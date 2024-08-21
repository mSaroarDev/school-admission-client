export default function ApplicationListRow() {
  return (
    <>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-10 h-10 p-4 border border-gray-300 ">
                    <img src="/avatar.png" alt="avatar" className="w-full h-full object-cover" />
                </td>
                <th scope="row" className="px-6 py-4 border border-gray-300 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 
                </th>
                <td className="px-6 py-4 border border-gray-300">
                    Silver
                </td>
                <td className="px-6 py-4 border border-gray-300">
                    Laptop
                </td>
                <td className="px-6 py-4 border border-gray-300">
                    Yes
                </td>
                <td className="px-6 py-4 border border-gray-300">
                    Yes
                </td>
                <td className="px-6 py-4 border border-gray-300">
                    $2999
                </td>
                <td className="px-6 py-4 border border-gray-300">
                    3.0 lb.
                </td>
                <td className="flex items-center px-6 py-4 justify-center">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
                </td>
            </tr>
    </>
  );
}