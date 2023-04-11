import React, {Component} from 'react';
import Link from 'next/link';

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();
    return (
      <>
        <footer className="footer-top-area pt-100 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single-widget">
                  <a href="/" className="logo">
                    <img src="/images/brainstormr.png" alt="Image" />
                  </a>

                  <p>
                    Brainstormr is an AI-powered writing assistant that
                    evaluates and develops professional material based on
                    one-line summaries.
                  </p>

                  <ul className="social-icon">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-widget">
                  <h3>Resources</h3>
                  <ul>
                    <li>
                      <Link href="/service-details">
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          Big Data
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          UI/UX Design
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          Desktop Application
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          Mobile Application
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          Product Engineering
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          Machine Learning
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-widget">
                  <h3>Company</h3>

                  <ul>
                    <li>
                      <Link href="/about-1">
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          About Us
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          Services
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/pricing">
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          Pricing
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/team">
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          Team
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          Support
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/testimonials">
                        <a>
                          <i className="right-icon bx bx-chevrons-right"></i>
                          Testimonials
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single-widget">
                  <h3>Information</h3>

                  <ul className="information">
                    <li className="address">
                      <i className="flaticon-call"></i>
                      <span>Phone</span>
                      +882-569-756
                    </li>

                    <li className="address">
                      <i className="flaticon-envelope"></i>
                      <span>Email</span>
                      hello@brainstormr.com
                    </li>

                    <li className="address">
                      <i className="flaticon-maps-and-flags"></i>
                      <span>Address</span>
                      123, Western Road, Melbourne Australia
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-shape">
            <img src="/images/shape/footer-shape-one.png" alt="Image" />
            <img src="/images/shape/footer-shape-two.png" alt="Image" />
          </div>
        </footer>

        {/* Footer Bottom Area   */}
        <footer className="footer-bottom-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="copy-right">
                  <p>
                    Copyright &copy; {currentYear} Brainstormr. All Rights
                    Reserved
                  </p>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="privacy">
                  <ul>
                    <li>
                      <Link href="/terms-conditions">
                        <a>Terms & Conditions</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">
                        <a>Privacy Policy</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
