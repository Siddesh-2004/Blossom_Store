import "./FeaturesList.css";
import { NavLink } from "react-router-dom";
function Features() {
  return (
    <>
      <div className="featuresContainer">
        {/* <div>
          <p className="features">Flower Freshness</p>
        </div> */}
        <NavLink
          to="/FlowerFreshness"
          className={({ isActive }) => `${isActive ? "Active" : "Inactive"}`}
        >
          <div>Flower Freshness</div>
        </NavLink>

        <NavLink
          to="/Occasions"
          className={({ isActive }) => `${isActive ? "Active" : "Inactive"}`}
        >
          <div>Occasions</div>
        </NavLink>

        <div>
          <NavLink
            to="/myOrders"
            className={({ isActive }) => `${isActive ? "Active" : "Inactive"}`}
          >
            <p>My Orders</p>
          </NavLink>
          
        </div>
      </div>
    </>
  );
}
export default Features;
