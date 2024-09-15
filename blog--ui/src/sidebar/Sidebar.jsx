import "./sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sideimg"
          src="https://cdn.pixabay.com/photo/2023/11/03/20/27/ai-generated-8363801_960_720.png"
          alt=""
        />
        <p className="aboutme">
        Welcome to Code Space – your hub for all things tech! Whether you're here to discuss the latest programming trends, troubleshoot code, or dive deep into development topics, you've come to the right place. Let's collaborate, learn, and build amazing things together!
        </p>
      </div>
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            life
          </li>
          <li className="sidebarListItem">
           Music
          </li>
          <li className="sidebarListItem">
            Style
          </li>
          <li className="sidebarListItem">
            Sports
          </li>
          <li className="sidebarListItem">
            Tech
          </li>
          <li className="sidebarListItem">
            Cinema
          </li>
        </ul>
      </div> */}
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
    </div>
    </div>
  )
}

export default Sidebar