import React from 'react'

 function Sidebar() {
  return (
    <div className='sidebar'>
       <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT OUR FOOD</span>
        <img className="sideImg"
        src="https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg"
        />
        <p>Our foods are very delicious and hyginic to eat</p>
       </div>
       <div className="sidebarItem">
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
            <li className="sidebarListItem">VEG</li>
            <li className="sidebarListItem">NON-VEG</li>
            <li className="sidebarListItem">FAST-FOOD</li>
            <li className="sidebarListItem">DESSERTS</li>
            <li className="sidebarListItem">SOUTH INDIAN</li>
            <li className="sidebarListItem">NORTH INDIAN</li>
            <li className="sidebarListItem">CHINESE</li>
            <li className="sidebarListItem">KOREAN</li>
            <li className="sidebarListItem">ITALIAN</li>
       </ul>
       </div>
       <div className="sidebarItem">
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
            <li className="sidebarsocial">INSTAGRAM</li>
            <li className="sidebarsocial">TASTY & CHEESY WEBSITE</li>
            <li className="sidebarsocial">TWITTER</li>
            
            </ul>
            </div>
    </div>
  )
};
export default Sidebar;
