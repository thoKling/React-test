import {Key, useEffect} from "react";
import useViewModel from "./MealListViewModel";
import {List, ListItem, ListItemText,} from "@mui/material";
import {Meal} from "../../../Domain/Model/Meal";

export default function MealListView() {
    const {getMealList, mealList} = useViewModel();

    useEffect(() => {
        getMealList().then();
    }, [getMealList]);

    return (
        <List>
            {mealList.map((meal: Meal, i: Key) => {
                return (
                    <ListItem key={i}>
                        <ListItemText primary={meal.name} secondary={meal.ingredients}/>
                    </ListItem>
                );
            })}
        </List>
    );
}