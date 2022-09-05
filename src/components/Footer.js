import React from "react";

function Footer() {
  return (
    <footer className="page-footer footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            {/* <h5 className="white-text">Footer Content</h5> */}
            <p className="grey-text text-lighten-4">Powered By TheMealDB</p>
          </div>
          <div className="col l4 offset-l2 s12" id="div_top_hypers">
            <h5 className="white-text">Socials</h5>
            <ul id="ul_top_hypers">
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://github.com/dmoquia"
                >
                  <i className="fa-brands fa-square-github fa-2x" />
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://www.instagram.com/dmoquia23/"
                >
                  <i className="fa-brands fa-square-instagram fa-2x" />
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  <i className="fa-brands fa-square-facebook fa-2x" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2022 Copyright Text
          {/* <a className="grey-text text-lighten-4 right" href="#!">
            More Links
          </a> */}
        </div>
      </div>
    </footer>
    // <div className="footer">
    //   <p>Footer</p>
    // </div>
  );
}

export default Footer;
