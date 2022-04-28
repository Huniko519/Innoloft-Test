import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { testSelector } from "../../store/reducers/innoloft";

export default function Header() {
  const { logo, mainColor } = useSelector(testSelector);
  return (
    <nav
      className="flex items-center justify-between flex-wrap"
      style={{ backgroundColor: mainColor }}
    >
      <div className="container flex mx-auto py-3">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/">
            <img src={logo} width="150px" height="50px" alt="Logo" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
