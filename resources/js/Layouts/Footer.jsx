import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <footer className="app-footer">
            <div className="container text-center py-3">
                <small className="copyright">Designed with <span className="sr-only">love</span><FontAwesomeIcon icon={faHeart} color='#fb866a' /> by <a className="app-link" href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
            </div>
        </footer>
    )
}

export default Footer;
