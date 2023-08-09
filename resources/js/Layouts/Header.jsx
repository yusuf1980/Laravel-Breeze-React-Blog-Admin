import { Link, usePage } from "@inertiajs/react"
// import TemplateJs from "@/template"
import { useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faAdd } from "@fortawesome/free-solid-svg-icons"

function Header({ user }) {
  const { url } = usePage()
  function responsiveSidePanel(sidePanel) {
    let w = window.innerWidth;
    if (w >= 1200) {
      // if larger
      //console.log('larger');
      sidePanel.classList.remove('sidepanel-hidden');
      sidePanel.classList.add('sidepanel-visible');

    } else {
      // if smaller
      //console.log('smaller');
      sidePanel.classList.remove('sidepanel-visible');
      sidePanel.classList.add('sidepanel-hidden');
    }
  };
  useEffect(() => {
    const sidePanel = document.getElementById('app-sidepanel');

    window.addEventListener('load', function () {
      responsiveSidePanel(sidePanel);
    });

    window.addEventListener('resize', function () {
      responsiveSidePanel(sidePanel);
    });
  }, [responsiveSidePanel])

  function handlerToggle(e) {
    e.preventDefault
    const sidePanelToggler = document.getElementById('sidepanel-toggler');
    const sidePanel = document.getElementById('app-sidepanel');
    const sidePanelDrop = document.getElementById('sidepanel-drop');
    const sidePanelClose = document.getElementById('sidepanel-close');
    if (sidePanel.classList.contains('sidepanel-visible')) {
      sidePanel.classList.remove('sidepanel-visible');
      sidePanel.classList.add('sidepanel-hidden');

    } else {
      sidePanel.classList.remove('sidepanel-hidden');
      sidePanel.classList.add('sidepanel-visible');
    }
    sidePanelClose.addEventListener('click', () => {
      sidePanelToggler.click();
    });

    sidePanelDrop.addEventListener('click', (e) => {
      sidePanelToggler.click();
    });
  }

  return (
    <header className="app-header fixed-top">
      <div className="app-header-inner">
        <div className="container-fluid py-2">
          <div className="app-header-content">
            <div className="row justify-content-between align-items-center">
              <div className="col-auto">
                <a id="sidepanel-toggler"
                  onClick={handlerToggle}
                  className="sidepanel-toggler d-inline-block d-xl-none"
                  href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" role="img"><title>Menu</title><path stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M4 7h22M4 15h22M4 23h22"></path></svg>
                </a>
              </div>
              <div className="app-utilities col-auto">
                <div className="app-utility-item">
                  <a href="settings.html" title="Settings">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-gear icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z" />
                      <path fillRule="evenodd" d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z" />
                    </svg>
                  </a>
                </div>
                <div className="app-utility-item app-user-dropdown dropdown">
                  <a className="dropdown-toggle" id="user-dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">{user.name}</a>
                  <ul className="dropdown-menu" aria-labelledby="user-dropdown-toggle">
                    <li><Link className="dropdown-item" href={route('profile.edit')}>Profile</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link method="post" className="dropdown-item" href={route('logout')} as="button">Log Out</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="app-sidepanel" className="app-sidepanel">
        <div id="sidepanel-drop" className="sidepanel-drop"></div>
        <div className="sidepanel-inner d-flex flex-column">
          <a href="#" id="sidepanel-close" className="sidepanel-close d-xl-none">&times;</a>
          <div className="app-branding">
            <Link className="app-logo" href={route('dashboard')}><img className="logo-icon me-2" src="/images/app-logo.svg" alt="logo" /><span className="logo-text">PORTAL</span></Link>
          </div>
          <nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
            <ul className="app-menu list-unstyled accordion" id="menu-accordion">
              <li className="nav-item">
                <Link className={`nav-link ${url === '/dashboard' ? "active" : ""}`} href={route('dashboard')}>
                  <span className="nav-icon">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-house-door" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z" />
                      <path fillRule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                    </svg>
                  </span>
                  <span className="nav-link-text">Dashboard</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${url === '/posts' ? "active" : ""}`} href={route('posts.index')}>
                  <span className="nav-icon">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </span>
                  <span className="nav-link-text">Posts</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${url === '/posts/create' ? "active" : ""}`} href={route('posts.create')}>
                  <span className="nav-icon">
                    <FontAwesomeIcon icon={faAdd} />
                  </span>
                  <span className="nav-link-text">Create Post</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="app-sidepanel-footer">
            <nav className="app-nav app-nav-footer">
              <ul className="app-menu footer-menu list-unstyled">
                <li className="nav-item">
                  <a className="nav-link" href="settings.html">
                    <span className="nav-icon">
                      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-gear" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z" />
                        <path fillRule="evenodd" d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z" />
                      </svg>
                    </span>
                    <span className="nav-link-text">Settings</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

