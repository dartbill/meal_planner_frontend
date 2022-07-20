import { render, waitFor } from "@testing-library/react";
import Fact from ".";

describe('Fact Component', () => { 
    it('should render Facts when api responds', async () => {
        render(<Fact />);
        await waitFor(() => {
            screen.getByRole()
        })
    })
})
