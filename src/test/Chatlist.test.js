import { render } from "@testing-library/react";
import ChatList from "../components/ChatList";

jest.mock('react-redux', () => ({
  useSelector: jest.fn(() => []),
  useDispatch: jest.fn
}));

describe('ChatList', () => {
  it('Matches snapshot', () => {
    const component = render(<ChatList />);

    expect(component).toMatchSnapshot();
  });
});
