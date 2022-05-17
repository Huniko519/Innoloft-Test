import { useState } from "react";
import { DefaultEditor } from "react-simple-wysiwyg";

import Header from "../../component/header";
import Navbar from "../../component/navbar";
import { getTrls } from "../../services/getdata";
import { updateProduct } from "../../services/setdata";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";

import {
  setCategroies,
  setBussinessmodel,
  setDescription,
  setTrl,
  testSelector,
} from "../../store/reducers/innoloft";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { categories, bussinessmodel, trl, description, mainColor } =
    useSelector(testSelector);

  const { data } = useQuery("trls", () => getTrls());
  const [sdescription, setDescrn] = useState(
    description
      ? description
      : "Innoloft creates the leading B2B tech ecosystem through interconnected research & business networks and marketplaces. With our digital platform technology, we are changing the way business contacts are initiated between economic and innovation actors. Our unique software-as-a-service (SaaS) solution LoftOS digitizes services provided by governments and public economic agencies, clusters and hubs, as well as event organizers and trade shows. Not only can our LoftOS customers implement their digitization strategy in a matter of months - each platform can also be connected through our system and its data standard. Through this connection, Innoloft and its partners are creating the largest B2B tech ecosystem in the world. Companies, startups, research institutes and other business players use the ecosystem for lead generation, innovation scouting, procurement or partner acquisition."
  );
  const [scategorie, setCategrs] = useState(
    categories ? categories : "IT platforms, B2B marketplaces,"
  );
  const [sbussimodel, setBussimol] = useState(
    bussinessmodel
      ? bussinessmodel
      : "Pay-Per-Use, Subscription, White-Label, Peer-to-Peer (P2P),"
  );
  const [strl, setTrltxt] = useState(trl);

  function onChange(e) {
    setDescrn(e.target.value);
  }

  const dispatch = useDispatch();
  let navigate = useNavigate();
  function productUpdate() {
    dispatch(setCategroies(scategorie));
    dispatch(setBussinessmodel(sbussimodel));
    dispatch(setTrl(strl));
    dispatch(setDescription(sdescription));
    updateProduct(6781);
    navigate("/product");
  }
  return (
    <>
      <Header />
      <div className="container flex flex-wrap overflow-hidden mx-auto">
        <div className="xl:w-1/5 w-full">
          <Navbar />
        </div>
        <div className="xl:w-4/5 w-full p-5">
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Edit Product
                </h3>
              </div>

              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="txtcategories"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Categories
                  </label>
                  <input
                    type="text"
                    name="Categories"
                    id="Categories"
                    value={scategorie}
                    onChange={(e) => setCategrs(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Business-models"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Business-models
                  </label>
                  <input
                    type="text"
                    name="Business-models"
                    id="Business-models"
                    value={sbussimodel}
                    onChange={(e) => setBussimol(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-12 sm:col-span-6">
                  <label
                    htmlFor="Trl"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Trl
                  </label>
                  <select
                    id="Trl"
                    name="Trl"
                    value={strl}
                    onChange={(e) => setTrltxt(e.target.value)}
                    className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    {data?.map((item) => (
                      <option key={item.name} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-span-12 sm:col-span-6>
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>{" "}
                  <DefaultEditor value={sdescription} onChange={onChange} />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                onClick={() => productUpdate()}
                className="border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                style={{ backgroundColor: mainColor }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
