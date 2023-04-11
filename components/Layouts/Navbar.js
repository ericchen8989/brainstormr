import React, {Component} from 'react';
import Link from '../../utils/ActiveLink';

class Navbar extends Component {
  _isMounted = false;
  state = {
    display: false,
    collapsed: true,
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    let elementId = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky');
      } else {
        elementId.classList.remove('is-sticky');
      }
    });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {collapsed} = this.state;
    const classOne = collapsed
      ? 'collapse navbar-collapse'
      : 'collapse navbar-collapse show';
    const classTwo = collapsed
      ? 'navbar-toggler navbar-toggler-right collapsed'
      : 'navbar-toggler navbar-toggler-right';
    return (
      <>
        <div id="navbar" className="navbar-area fixed-top">
          <nav className="navbar navbar-expand-md navbar-light">
            <div className="container">
              <Link href="/">
                <a className="navbar-brand">
                  <img src="/images/brainstormr.png" alt="logo" />
                </a>
              </Link>

              <button
                onClick={this.toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <Link href="/features">
                      <a className="nav-link">
                        Features <i className="bx bx-chevron-down"></i>
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/pricing">
                      <a className="nav-link">
                        Pricing <i className="bx bx-chevron-down"></i>
                      </a>
                    </Link>

                    {/* <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/pricing" activeClassName="active">
                          <a className="nav-link">Pricing</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/about-1" activeClassName="active">
                          <a className="nav-link">About Style One</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/dashboard" activeClassName="active">
                          <a className="nav-link">Dashboard</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/about-2" activeClassName="active">
                          <a className="nav-link">About Style Two</a>
                        </Link>
                      </li>
                    </ul> */}
                  </li>

                  <li className="nav-item">
                    <Link href="#">
                      <a
                        className="nav-link"
                        onClick={(e) => e.preventDefault()}>
                        Resources <i className="bx bx-chevron-down"></i>
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="#" activeClassName="active">
                          <a className="nav-link">Guides and Tutorials</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/services-2" activeClassName="active">
                          <a className="nav-link">Services We Offer</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/service-details" activeClassName="active">
                          <a className="nav-link">Service Details</a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* <li className="nav-item">
                    <Link href="#">
                      <a
                        className="nav-link"
                        onClick={(e) => e.preventDefault()}>
                        Pages <i className="bx bx-chevron-down"></i>
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item"></li>

                      <li className="nav-item">
                        <Link href="/faq" activeClassName="active">
                          <a className="nav-link">Faq</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/terms-conditions" activeClassName="active">
                          <a className="nav-link">Terms & Conditions</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/privacy-policy" activeClassName="active">
                          <a className="nav-link">Privacy Policy</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/coming-soon" activeClassName="active">
                          <a className="nav-link">Coming Soon</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/login" activeClassName="active">
                          <a className="nav-link">Log In</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/sign-up" activeClassName="active">
                          <a className="nav-link">Sign Up</a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/404" activeClassName="active">
                          <a className="nav-link">404 error</a>
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  <li className="nav-item">
                    <Link href="/about-1">
                      <a className="nav-link">
                        About us <i className="bx bx-chevron-down"></i>
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact">
                      <a className="nav-link">
                        Contact <i className="bx bx-chevron-down"></i>
                      </a>
                    </Link>
                  </li>
                </ul>

                <div className="others-options">
                  <Link href="/login">
                    <a className="default-btn">
                      Log In <i className="bx bx-log-in-circle"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default Navbar;
