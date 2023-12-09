import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Spinner } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";

const FavouritesBiodata = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const { data, refetch, isPending } = useQuery({
    queryKey: ["favourites"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/favourites/${user.email}`);
      return res.data;
    },
  });

  if (isPending) {
    return (
      <div className="max-w-screen-2xl mx-auto w-full min-h-[50vh] lg:min-h-screen flex justify-center items-center ">
        {/* <span className="loading loading-spinner w-12 h-12 "></span> */}
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    );
  }
  const handleDelete = (favourite) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#836b6c",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/favourites/${favourite._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-center ">
        <h3 className="text-4xl font-semibold text-[#836b6c] text-center  my-16 border-y-2 p-4">
          My Favourites Biodata
        </h3>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full md:text-sm text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="md:md:px-6 md:py-3">
                Name
              </th>
              <th scope="col" className="md:px-6 md:py-3">
                BioID
              </th>
              <th scope="col" className="md:px-6 md:py-3">
                Address
              </th>
              <th scope="col" className="md:px-6 md:py-3">
                Occuption
              </th>
              <th scope="col" className="md:px-6 md:py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((favourite) => (
              <tr
                key={favourite._id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="md:px-6 py-4 md:font-medium font-normal text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {favourite.name}
                </th>
                <td className="md:px-6 py-4">{favourite.id}</td>
                <td className="md:px-6 py-4">
                  {favourite.permanentDivisionName}
                </td>
                <td className="md:px-6 py-4">{favourite.occupation}</td>

                <td className="md:px-6 py-4">
                  <button
                    onClick={() => handleDelete(favourite)}
                    type="button"
                    className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FavouritesBiodata;
