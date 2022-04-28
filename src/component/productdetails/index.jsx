import { useState } from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { testSelector } from "../../store/reducers/innoloft";
export default function ProductDetails({ props }) {
  const { categories, bussinessmodel, trl, description, mainColor } =
    useSelector(testSelector);

  const tabs = [
    { name: "Description", current: true },
    { name: "Attributes", current: false },
  ];
  const [visibleTab, setVisibleTab] = useState(tabs[0].name);
  const listTabs = tabs.map((item) => (
    <button
      key={item.name}
      onClick={() => setVisibleTab(item.name)}
      className={classNames(
        item.name === visibleTab
          ? ""
          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
        "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
      )}
      style={
        item.name === visibleTab
          ? { borderColor: mainColor, color: mainColor }
          : {}
      }
      aria-current={item.current ? "page" : undefined}
    >
      {item.name}
    </button>
  ));
  const listContent = tabs.map((item) => (
    <div
      key={item.name}
      style={visibleTab === item.name ? {} : { display: "none" }}
    >
      {visibleTab === "Description" ? (
        <div
          dangerouslySetInnerHTML={{
            __html: description ? description : props.description,
          }}
        />
      ) : (
        <div>
          Categories :
          {categories ? (
            " " + categories
          ) : (
            <>
              {props.categories.map((categ) => (
                <span key={categ.name}> {categ.name}, </span>
              ))}
            </>
          )}
          <br />
          Bussiness Models :
          {bussinessmodel ? (
            " " + bussinessmodel
          ) : (
            <>
              {props.businessModels.map((bumodels) => (
                <span key={bumodels.name}> {bumodels.name}, </span>
              ))}
            </>
          )}
          <br />
          Trl : <span>{trl ? trl : props.trl.name}</span>
        </div>
      )}
    </div>
  ));
  return (
    <>
      <img
        className="object-cover shadow-md w-[350px] md:w-[350px] h-[250px] md:h-[250px] mx-auto"
        src={props.picture}
        alt="Product"
      />
      <div className="mt-5">
        <p className="text-2xl font-bold" style={{ color: mainColor }}>
          {props.name} {"( " + props.type.name + " )"}
        </p>
      </div>
      <div>
        <div className="border-b border-gray-200 mt-3">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {listTabs}
          </nav>
        </div>
        <div className="mt-3">{listContent}</div>
      </div>
    </>
  );
}
