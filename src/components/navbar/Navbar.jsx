import "./navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search.." />
          <SearchOutlinedIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon"/>
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <NotificationsNoneIcon className="icon"/>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className="icon"/>
          </div>
          <div className="item">
            <FormatListBulletedIcon className="icon"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar