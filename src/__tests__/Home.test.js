import {toBeInTheDocument} from "@testing-library/jest-dom/dist/matchers";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import '@testing-library/jest-dom';

describe('Check if home component is rendered', () => {
  it('Check the title of Component', () => {
    const {getByText} = render(<BrowserRouter><Home /></BrowserRouter>);
    const title = getByText('NBA');
    expect(title).toBeInTheDocument('NBA');
  });
});
