import { useState, useEffect } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import TemplateJs from '@/template';

export default function Authenticated({ user, header, children }) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

  return (
    <div className="app">
      <Header user={user} />
      <div className="app-wrapper">
        <div className="app-content pt-3 p-md-3 p-lg-4">
          <div className="container-xl">
            {children}
          </div>
        </div>
        <footer className="app-footer">
          <div className="container text-center py-3">
            <small className="copyright">Designed with <span className="sr-only">love</span><FontAwesomeIcon icon={faHeart} color='#fb866a' /> by <a className="app-link" href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
          </div>
        </footer>
      </div>
    </div>
  );
}
