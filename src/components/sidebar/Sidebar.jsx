import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="top">
          <Link to="/" style={{textDecoration :"none"}}>
            <span className="logo">Admin</span>
          </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
              <li>
                <DashboardIcon className="icon"/>
                <span>Dashboard</span>
              </li>
              <p className="title">LISTS</p>
              <Link to="/users" style={{textDecoration :"none"}}>
                <li>
                  <PersonOutlineOutlinedIcon className="icon"/>
                  <span>Users</span>
                </li>
              </Link>
              <Link to="/products" style={{textDecoration :"none"}}>
                <li>
                  <ProductionQuantityLimitsIcon className="icon"/>
                  <span>Products</span>
                </li>
              </Link>
              <li>
                <CreditCardOutlinedIcon className="icon"/>
                <span>Orders</span>
              </li>
              <li>
                <LocalShippingIcon className="icon"/>
                <span>Delivery</span>
              </li>
              <p className="title">USEFUL</p>
              <li>
                <BarChartIcon className="icon"/>
                <span>Stats</span>
              </li>
              <li>
                <NotificationsOutlinedIcon className="icon"/>
                <span>Notifications</span>
              </li>
              <p className="title">SERVICE</p>
              <li>
                <PsychologyOutlinedIcon className="icon"/>
                <span>Logs</span>
              </li>
              <li>
                <SettingsOutlinedIcon className="icon"/>
                <span>Settings</span>
              </li>
              <p className="title">USER</p>
              <li>
                <AccountCircleOutlinedIcon className="icon"/>
                <span>Profile</span>
              </li>
              <li>
                <LogoutOutlinedIcon className="icon"/>
                <span>Logout</span>
              </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOptions"></div>
            <div className="colorOptions"></div>
        </div>
      
    </div>
  )
}

export default Sidebar;