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

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">Admin</span>
        </div>
        <hr />
        <div className="center">
            <ul>
              <li>
                <DashboardIcon/>
                <span>Dashboard</span>
              </li>
              <li>
                <PersonOutlineOutlinedIcon/>
                <span>Users</span>
              </li>
              <li>
                <ProductionQuantityLimitsIcon/>
                <span>Products</span>
              </li>
              <li>
                <CreditCardOutlinedIcon/>
                <span>Orders</span>
              </li>
              <li>
                <LocalShippingIcon/>
                <span>Delivery</span>
              </li>
              <li>
                <BarChartIcon/>
                <span>Stats</span>
              </li>
              <li>
                <NotificationsOutlinedIcon/>
                <span>Notifications</span>
              </li>
              <li>
                <PsychologyOutlinedIcon/>
                <span>Logs</span>
              </li>
              <li>
                <SettingsOutlinedIcon/>
                <span>Settings</span>
              </li>
              <li>
                <AccountCircleOutlinedIcon/>
                <span>Profile</span>
              </li>
              <li>
                <LogoutOutlinedIcon/>
                <span>Logout</span>
              </li>
            </ul>
        </div>
        <div className="bototm"></div>
      
    </div>
  )
}

export default Sidebar;