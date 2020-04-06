import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './Chat';
import {mount} from 'enzyme/build';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Chat />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('toggle click without crashing', () => {
  const wrapper = mount(<Chat />);
  for (let i=0; i<4; i++) {
    let ListGroup = wrapper.find('#list-tab .list-group-item-action.list-group-item').at(i);
    ListGroup.simulate('click');
    expect(wrapper.state().activeTab).toEqual(i);
  }
  wrapper.unmount()
});
