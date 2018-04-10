import React from 'react';
import PerfectScrollbar from '../../src/index';
import GithubLogo from '../images/logo-github.svg';

const logoCreator = (amount) => {
  const logos = [];
  for (let i = 0; i < amount; i += 1) {
    logos.push((
      <div id={`${i}_id`} key={`${i}_key`}>
        <GithubLogo />
      </div>
    ));
  }
  return logos;
};

export default () => (
  <PerfectScrollbar>
    {
      logoCreator(45)
    }
  </PerfectScrollbar>
);
