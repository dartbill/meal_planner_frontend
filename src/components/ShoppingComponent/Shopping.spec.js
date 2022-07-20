import  React from 'react';
import "@testing-library/jest-dom";
import{screen,render} from "@testing-library/react"
import Shopping from './index';
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';


describe("Renders Footer elements", () =>{
    const list = [
        { id: 2468, headline: 'Test Story 1', snippet: 'Testing, testing'},
        { id: 4151, headline: 'Test Story 2', snippet: '1, 2, 3'}
      ]

    beforeEach(() => {
        render(<Shopping shoppingList={list} />)
    })
    
    test("Render li element",()=>{
        const li = screen.getByRole('link',{name:"Layla Southcombe"})
        expect(li).toBeInTheDocument()
        expect(li.textContent).toBe('LaylaSouthcombe')
    })

    
    })
    