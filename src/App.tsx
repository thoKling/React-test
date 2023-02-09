import React from 'react';
import './App.css';
import MealListView from "./Presentation/Meal/MealList/MealListView";
import {useRoutes} from "react-router-dom";

function App() {
    return <div data-testid="AppContainer">
        {useRoutes([
            {
                path: "/",
                element: <MealListView/>
            }
        ])}
    </div>;
}

export default App;
