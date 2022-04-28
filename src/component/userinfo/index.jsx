import GoogleMap from "../map";
import { useSelector } from "react-redux";
import { testSelector } from "../../store/reducers/innoloft";
export default function Userinfo({ props }) {
  const { mainColor } = useSelector(testSelector);
  return (
    <>
      <div className="text-center">
        <img
          className="object-cover rounded-full shadow-md w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] mx-auto"
          src={props.user.profilePicture}
          alt="User Info"
        />
        <div className="mt-4">
          <p>
            {props.user.firstName} {props.user.lastName} <br />(
            {props.user.position} )
          </p>
          <p>Mail : {props.user.email}</p>
        </div>
        <div className="border-2 mt-5" style={{ borderColor: mainColor }}>
          <GoogleMap props={props.company} />
        </div>
      </div>
    </>
  );
}
