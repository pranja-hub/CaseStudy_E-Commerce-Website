import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../Login';
import { render } from '@testing-library/react';
import { Button } from 'bootstrap';

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<button></button>, div)
})

it("renders button correctly",()=>{
    
})