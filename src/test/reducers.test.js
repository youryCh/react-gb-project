import { messagesReducer as reducer } from '../store/messages/reducer';
import { authors } from '../constants';

describe('Reducers', () => {
  it('Should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      chat1: [
        {
          text: 'Hello',
          author: authors.me,
          id: 'message1'
        },
        {
          text: 'Hello',
          author: authors.bot,
          id: 'message2'
        }
      ]
    });
  });
});
