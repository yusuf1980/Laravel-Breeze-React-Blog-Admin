import { Link } from "@inertiajs/react";
// import TemplateJs from "@/template"
import { useEffect } from "react"
import Sidebar from "./Sidebar"

function Header({ user }) {
  function responsiveSidePanel(sidePanel) {
    let w = window.innerWidth;
    if (w >= 1200) {
      // if larger
      sidePanel.classList.remove('sidepanel-hidden');
      sidePanel.classList.add('sidepanel-visible');

    } else {
      // if smaller
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
      <Sidebar />
    </header>
  )
}

export default Header

