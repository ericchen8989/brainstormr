import React, {Component} from 'react';
import Link from 'next/link';

class About extends Component {
  render() {
    return (
      <section className="about-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img
                  className="animate__bounceIn"
                  src="/images/about-img-three.png"
                  alt="Image"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <h2>Writing that is delivered more quickly and efficiently</h2>
                <p>
                  Writer's block is a thing of the past since you can quickly
                  and easily auto-generate engaging, unique, and high-converting
                  copy for blogs, emails, and advertisements in a variety of
                  tones and languages. Simply select a use case, provide some
                  information, and voilà, your copy is prepared!
                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        Advanced caching
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Unlimited applications
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        PHP 7 ready transfer
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        PHP ready serves
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        24/7 Free extra support
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Optimized stack
                      </li>
                    </ul>
                  </div>
                </div>

                <Link href="/about-1">
                  <a className="default-btn">Learn More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
