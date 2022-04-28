import Header from "../../component/header";
import Navbar from "../../component/navbar";
import ProductDetails from "../../component/productdetails";
import UserInfo from "../../component/userinfo";

import { getProduct } from "../../services/getdata";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { testSelector } from "../../store/reducers/innoloft";
export default function Product() {
  const { data } = useQuery("repoData", () => getProduct(6781));
  const { hasUserSection } = useSelector(testSelector);
  return (
    <>
      <Header />
      <div className="container flex flex-wrap mx-auto">
        <div className="xl:w-1/5 w-full">
          <Navbar />
        </div>
        <div
          className={
            hasUserSection ? "xl:w-3/5 w-full p-5" : "xl:w-4/5 w-full p-5"
          }
        >
          {data && <ProductDetails props={data} />}
        </div>
        {hasUserSection && (
          <div className="xl:w-1/5 w-full p-5">
            {data && <UserInfo props={data} />}
          </div>
        )}
      </div>
    </>
  );
}
