import React, {Component} from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/Home/MainBanner';
import PartnerSliderTwo from '../components/Common/PartnerSliderTwo';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import MakeYourBusiness from '../components/Home/MakeYourBusiness';
import WhatWeOffer from '../components/Home/WhatWeOffer';
import Team from '../components/Common/Team';
import CaseStudies from '../components/Home/CaseStudies';
import Testimonials from '../components/Common/Testimonials';
import Faq from '../components/Home/Faq';
import Newsletter from '../components/Common/Newsletter';
import News from '../components/Home/News';
import Footer from '../components/Layouts/Footer';

class Index4 extends Component {
  render() {
    return (
      <>
        <div className="body-bg-color">
          <Navbar />

          <MainBanner />

          <PartnerSliderTwo />

          <About />

          {/* <Services /> */}

          <WhatWeOffer />

          <WhyChooseUs />

          {/* <MakeYourBusiness /> */}

          {/* <CaseStudies /> */}

          {/* <Team /> */}

          <Testimonials />

          <Faq />

          {/* <Newsletter />

          <News /> */}

          <Footer />
        </div>
      </>
    );
  }
}

export default Index4;
