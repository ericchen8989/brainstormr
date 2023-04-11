import React, {useEffect, useRef, useState, Component, Fragment} from 'react';
import Select from 'react-select';
import gpt3languageoptions from './options/gpt3-language-options';
import gpt3toneoptions from './options/gpt3-tone-options';
import gpt3usecaseoptions from './options/gpt3-use-case-options';

import Link from '../../utils/ActiveLink';

// const sidebarNavItems = [
//   {
//     display: 'Neushoorn',
//     icon: <i className="bx bx-home"></i>,
//     to: '/',
//     section: 'neushoorn',
//   },
//   {
//     display: 'Jongens of de Vrouwen',
//     icon: <i className="bx bx-star"></i>,
//     to: '/',
//     section: 'jongens of de vrouwen',
//   },
//   {
//     display: 'Calendar',
//     icon: <i className="bx bx-calendar"></i>,
//     to: '/r',
//     section: 'Mannen',
//   },
//   {
//     display: 'Schilpad',
//     icon: <i className="bx bx-user"></i>,
//     to: '/r',
//     section: 'schilpad',
//   },
//   {
//     display: 'Aardbei',
//     icon: <i className="bx bx-receipt"></i>,
//     to: '/',
//     section: 'aardbei',
//   },
// ];

const DashboardSidebar = () => {
  const MyComponent = () => <Select options={options} />;
  const [setSelectedOption] = useState(null);

  const styles = {
    control: (base) => ({
      ...base,
      '&:hover': {
        borderColor: 'blue',
      },
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: 'inherit',
    }),
    singleValue: (base) => ({
      ...base,
      color: 'inherit',
    }),
  };

  return (
    <div className="sidebar">
      <div className="sidebar_split" />
      <div className="language_dash">Select language</div>
      <Select
        className="select_box_language"
        defaultValue={gpt3languageoptions[0]}
        onChange={setSelectedOption}
        options={gpt3languageoptions}
        styles={styles}
      />
      <div className="tone_dash">Select tone</div>
      <Select
        className="select_box_tone"
        defaultValue={gpt3toneoptions[1]}
        onChange={setSelectedOption}
        options={gpt3toneoptions}
        styles={styles}
      />
      <div className="use_case_dash">Choose use case</div>
      <Select
        className="select_box_use_case"
        defaultValue={gpt3usecaseoptions[0]}
        onChange={setSelectedOption}
        options={gpt3usecaseoptions}
        styles={styles}
      />
    </div>
  );
};

export default DashboardSidebar;
