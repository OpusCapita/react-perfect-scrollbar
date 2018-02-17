/* eslint-disable no-unused-expressions, function-paren-newline */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import PerfectScrollbar from '../../src/index';

describe('PerfectScrollbar component', () => {
  it('is rendered', () => {
    const wrapper = mount(
      <PerfectScrollbar>
        <div>Content</div>
      </PerfectScrollbar>,
    );
    expect(wrapper).to.exist;
  });
});
