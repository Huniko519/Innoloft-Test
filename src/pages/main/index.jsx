import Header from "../../component/header";
import Navbar from "../../component/navbar";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getProduct } from "../../services/getdata";

export default function Main() {
  const { data } = useQuery("repoData", () => getProduct(6781));
  return (
    <>
      <Header />
      <div className="container flex flex-wrap overflow-hidden mx-auto">
        <div className="w-full sm:w-1/5 ">
          <Navbar />
        </div>
        <div className="w-full sm:w-4/5 p-5">
          <div className="bg-white">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <Link className="group relative" to="/product">
                <div className="w-full min-h-80 bg-gray-100 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-[200px] lg:aspect-none">
                  <img
                    src={data?.picture}
                    alt={data?.name}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">{data?.name}</h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {data?.investmentEffort}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
