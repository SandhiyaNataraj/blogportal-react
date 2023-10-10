import React from 'react'
function Topbar(){
    return(
        <div className="top">
        <div className="topLeft">
        <i class="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
       
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>

        <div className="topRight">
            <img className="topimg"
            src="https://images.prestigeonline.com/wp-content/uploads/sites/4/2021/12/28134738/sam-moqadam-yxZSAjyToP4-unsplash-scaled-1-1275x900.jpg" 
            alt="" 
            />
          <i className="topsearch fa-solid fa-magnifying-glass"></i>
        </div>
         </div>
    )
};
export default Topbar;
