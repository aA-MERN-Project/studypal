import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
export const mock = new MockAdapter(axios);
export const store = mockStore();