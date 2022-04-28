import { HomeIcon, ViewGridIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { testSelector } from "../../store/reducers/innoloft";

export default function Navbar() {
  const { mainColor } = useSelector(testSelector);
  const pathname = window.location.pathname;
  const navigation = [
    {
      name: "Product",
      icon: ViewGridIcon,
      href: "/product",
      current: false,
    },
    { name: "Dashboard", icon: HomeIcon, href: "/dashboard", current: false },
  ];
  // eslint-disable-next-line array-callback-return
  navigation.map((item) => {
    if (item.href === pathname) {
      return (item.current = true);
    }
  });
  return (
    <div className="flex flex-col flex-grow bg-white overflow-y-auto p-5">
      <div className="flex-grow flex flex-col">
        <nav className="flex-1 bg-white" aria-label="Sidebar">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={classNames(
                item.current
                  ? ""
                  : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                "group flex items-center px-3 py-2 text-sm font-medium border-l-4"
              )}
              style={
                item.current ? { borderColor: mainColor, color: mainColor } : {}
              }
            >
              <item.icon
                className={classNames(
                  item.current
                    ? "text-mainColor"
                    : "text-gray-400 group-hover:text-gray-500",
                  "mr-3 flex-shrink-0 h-6 w-6"
                )}
                style={item.current ? { color: mainColor } : {}}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
