import { render, screen } from '@testing-library/react';
import App from './App';
import "jest-dom/extend-expect";
import ReactDOM from 'react-dom'
import Login from './Component/Login';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div)
  // ReactDOM.render(<App/>, div);
  // ReactDOM.unmountComponentAtNode(div);
});

it("renders button correctly", () =>{
  const{getByTestId} = render(<Login></Login>)
  expect(getByTestId('button').toHaveTexrContent("Login"))
})