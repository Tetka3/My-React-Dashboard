import "./widget.scss";
import { NavLink } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";


const Widget = () => {  

  return (
    <div className="widget">
      <div className="left">
        <span className="title">USERS</span>
        <span className="counter">80</span>
        <NavLink to="/users" className="link">See all users</NavLink>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          20 %
        </div>
        <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}/>
      </div>
    </div>
  );
};

export default Widget;