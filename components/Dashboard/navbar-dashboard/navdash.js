import React from 'react';

import {CgSun} from 'react-icons/cg';
import {HiMoon} from 'react-icons/hi';

import {ThemeContext, themes} from '../contexts/ThemeContext';

import {useDarkMode} from '../components/useDarkSide';

import Link from '../../../utils/ActiveLink';
import DashboardSidebar from '../sidebar';

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <div>
      <div className="dashboard_nav">
        <Link href="#">
          <div className="nav-banner-img">
            <img src="/images/brainstormr-logo-only.png" alt="logo" />
            <a>Brainstormr</a>
          </div>
        </Link>

        <Link href="#">
          <div className="nav-letter-one">
            <a>History</a>
          </div>
        </Link>

        <Link href="#">
          <div className="nav-letter-two">
            <a>Account</a>
          </div>
        </Link>
        {/* <div>
          <input type="checkbox" className="checkbox" id="chk" />
          <label className="label" >
            <CgSun></CgSun>
            <HiMoon></HiMoon>
            
            <div className="ball" ></div>
          </label>

        </div> */}
      </div>
    </div>
  );
}

export default App;

// import React, {Component} from 'react';
// import Link from '../../../utils/ActiveLink';

// class DashNavbar extends Component {
//   _isMounted = false;
//   state = {
//     display: false,
//     collapsed: true,
//   };
//   toggleNavbar = () => {
//     this.setState({
//       collapsed: !this.state.collapsed,
//     });
//   };
//   componentDidMount() {
//     let elementId = document.getElementById('navbar');
//     document.addEventListener('scroll', () => {
//       if (window.scrollY > 170) {
//         elementId.classList.add('is-sticky');
//       } else {
//         elementId.classList.remove('is-sticky');
//       }
//     });
//   }
//   componentWillUnmount() {
//     this._isMounted = false;
//   }

//   render() {
//     const {collapsed} = this.state;
//     const classOne = collapsed
//       ? 'collapse navbar-collapse'
//       : 'collapse navbar-collapse show';
//     const classTwo = collapsed
//       ? 'dash-navbar-toggler navbar-toggler-right collapsed'
//       : 'dash-navbar-toggler navbar-toggler-right';
//     return (
//       <>
//         <div className="dash-nav-container">
//           <div id="dash-navbar" className="dash-navbar-area fixed-top">
//             <nav className="navbar navbar-expand-md navbar-light">
//               <div className="container">
//                 <Link href="/">
//                   <a-dash className="dash-navbar-brand">
//                     <img
//                       src="/images/brainstormr.png"
//                       alt="logo"
//                       className="dash-logo-padding"
//                     />

//                     {/* <Link href="#">
//                     <b-dash className="dash-logo-name-padding">
//                       Brainstormr
//                     </b-dash>
//                   </Link>

//                   <img
//                     src="/images/brainstormr-name-only.png"
//                     alt="logo-name"
//                     className="dash-logo-name-padding"
//                   /> */}
//                   </a-dash>
//                 </Link>

//                 {/* <button
//                 onClick={this.toggleNavbar}
//                 className={classTwo}
//                 type="button"
//                 data-toggle="collapse"
//                 data-target="#navbarSupportedContent"
//                 aria-controls="navbarSupportedContent"
//                 aria-expanded="false"
//                 aria-label="Toggle navigation">
//                 <span className="dash-icon-bar dash-top-bar"></span>
//                 <span className="dash-icon-bar dash-middle-bar"></span>
//                 <span className="dash-icon-bar dash-bottom-bar"></span>
//               </button> */}

//                 <div className={classOne} id="navbarSupportedContent">
//                   <ul className="navbar-nav m-auto">
//                     <li className="dash-nav-item">
//                       <Link href="#">
//                         <a-dash className="nav-link">
//                           History <i className="bx bx-chevron-down"></i>
//                         </a-dash>
//                       </Link>
//                     </li>

//                     <li className="dash-nav-item">
//                       <Link href="#">
//                         <a-dash className="nav-link">
//                           Account <i className="bx bx-chevron-down"></i>
//                         </a-dash>
//                       </Link>
//                     </li>
//                   </ul>

//                   <div className="others-options">
//                     <Link href="/">
//                       <a className="dash-default-btn">
//                         <i className="bx bx-log-in-circle"></i>
//                       </a>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default DashNavbar;
