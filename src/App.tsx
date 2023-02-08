import React from 'react';
import './App.css';
import MealListView from "./Presentation/Meal/MealList/MealListView";

function App() {
    return (
        <div className="App" data-testid="AppContainer">
            <MealListView/>
        </div>
    );
}

export default App;
