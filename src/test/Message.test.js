import { render, screen } from '@testing-library/react';
import Message from '../components/Message';

describe('Message', () => {
  const testMessage = {
    author: 'John',
    text: 'Hello'
  };

  it('Matches snapshot online', () => {
    const component = render(<Message message={ testMessage } />);

    expect(component).toMatchSnapshot();
  });

  it('Message should contain text Hello', () => {
    render(<Message message={ testMessage } />);

    const wrapper = screen.getByText(/hello/i);

    expect(wrapper).toBeInTheDocument();
  });
});
