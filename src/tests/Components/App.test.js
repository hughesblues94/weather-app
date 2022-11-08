import { render, screen, renderHook } from "@testing-library/react";
import axios from "axios";
import App from "../../components/App";
import forecast from '../../data/forecast.json';

jest.mock('axios');

describe("App", () => {
    test("renders App component correctly", async () => {
        const response = { data: forecast }
        axios.get.mockResolvedValue(response)
        render(<App location={forecast.location} />);
        setTimeout(() => {
            const h1Element = screen.getByText(/Manchester, GB/i);
            expect(h1Element).toBeInTheDocument();
        }, 100)
    });
});