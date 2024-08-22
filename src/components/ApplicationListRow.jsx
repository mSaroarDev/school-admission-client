import { deleteApplication } from "@/libs/application";
import { showError } from "@/utils/showToast";
import Swal from "sweetalert2";

export default function ApplicationListRow({ data, getData }) {
  // delete an id
  const deleteAnApp = async () => {
    Swal.fire({
      title: "Delete..!",
      text: "Are you sure to delete?",
      icon: "question",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await deleteApplication(data?._id);
          if (res.ok) {
            Swal.fire({
              title: "Success",
              text: "The Application Deleted Successfully.",
              icon: "success",
            });
            getData();
          } else {
            showError("Failed");
          }
        } catch (error) {
          console.log(error);
          showError("Internal Server Error");
        }
      }
    });
  };

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-20 h-20 p-4 border border-gray-300 ">
          <img
            src={data?.media?.image}
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </td>
        <th
          scope="row"
          className="px-6 py-4 border border-gray-300 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {data?.first_name} {data?.last_name}
        </th>
        <td className="px-6 py-4 border border-gray-300">
          {data?.personal_info?.father_name}
        </td>
        <td className="px-6 py-4 border border-gray-300">
          {data?.personal_info?.dob}
        </td>
        <td className="px-6 py-4 border border-gray-300">
          {data?.admission_info?.classe}
        </td>
        <td className="px-6 py-4 border border-gray-300">
          {data?.admission_info?.section}
        </td>
        <td className="px-6 py-4 border border-gray-300">
          {data?.contact_info?.mobile}
        </td>
        <td className="px-6 py-4 border border-gray-300">{data?.currStatus}</td>
        <td className="flex items-center px-6 py-4 justify-center">
          <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            View
          </a>
          <button
            onClick={deleteAnApp}
            className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
          >
            Remove
          </button>
        </td>
      </tr>
    </>
  );
}
