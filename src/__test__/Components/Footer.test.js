import React from 'react';
import { shallow } from 'enzyme';
import Footer from './../../components/Footer';
import { create } from 'react-test-renderer';

describe('<Footer/>', () => {
  const footer = shallow(<Footer />);

  test('Reneder componente footer', () => {
    expect(footer.length).toEqual(1);
  });

  test('Redender del titulo', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe('Footer Snapshot', () => {
  test('Comprebar la UI del componente', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});

