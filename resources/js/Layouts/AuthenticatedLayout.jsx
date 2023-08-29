import Header from './Header';
import Footer from './Footer';

export default function Authenticated({ user, header, children }) {
  return (
    <div className="app">
      <Header user={user} />
      <div className="app-wrapper">
        <div className="app-content pt-3 p-md-3 p-lg-4">
          <div className="container-xl">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
