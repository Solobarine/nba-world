import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../features/configureStore';

describe('App', () => {
  test('Check if App renders correctly', () => {
    const app = renderer.create(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>).toJSON(); // eslint-disable-line
    expect(app).toMatchSnapshot();
  });
});
