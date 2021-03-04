import store from './store';

export const makeTestStore = () => {
    const origDispatch = store.dispatch;
    store.dispatch = jest.fn(origDispatch);
    return store;
};