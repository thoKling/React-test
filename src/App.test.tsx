import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import App from './App';
import {BrowserRouter} from "react-router-dom";


it("should render app", async () => {
    render(
        <App/>,
        {wrapper: BrowserRouter}
    );

    await waitFor(() => {
        expect(screen.getByTestId("AppContainer")).toBeInTheDocument();
    });
});
