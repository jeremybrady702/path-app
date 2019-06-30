import React from 'react';
import renderer from 'react-test-renderer';

import { Baumans } from '../StyledText';

it(`renders correctly`, () => {
  const tree = renderer.create(<Baumans>Snapshot test!</Baumans>).toJSON();

  expect(tree).toMatchSnapshot();
});
