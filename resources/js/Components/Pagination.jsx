import React from 'react';
import { Link } from '@inertiajs/react';

export default function Pagination({ links }) {

  function getClassName(active) {
    if (active) {
      return "page-item active";
    } else {
      return "page-item";
    }
  }

  return (
    links.length > 3 && (
      <div className="mb-4">
        <div className=" mt-8">
          <nav aria-label="Page navigation">
            <ul className="pagination">
              {links.map((link, key) => (
                link.url === null ?
                  (<li
                    className={getClassName(link.active)}
                    key={key}
                  >
                    <Link
                      className="page-link"
                      href="#"
                      dangerouslySetInnerHTML={{ __html: link.label }}
                    ></Link>
                  </li>) :

                  (<li className={getClassName(link.active)}
                    key={key}
                  >
                    <Link
                      className="page-link"
                      href={link.url}
                      dangerouslySetInnerHTML={{ __html: link.label }}
                    ></Link></li>)
              ))}
            </ul>
          </nav>
        </div>
      </div>
    )
  );
}
