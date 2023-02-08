import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import App from './App';


it("should render app", async () => {
    render(<App/>);
    await waitFor(() => {
        expect(screen.getByTestId("AppContainer")).toBeInTheDocument();
    });
});
