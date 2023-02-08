import {useState} from "react";
import {Meal} from "../../../Domain/Model/Meal";
import {GetMealList} from "../../../Domain/UseCase/Meal/GetMealList";

export default function MealListViewModel() {
    const [mealList, setMealList] = useState<Meal[]>([]);

    const UseCase = new GetMealList();

    async function getMealList() {
        setMealList(await UseCase.invoke());
    }

    return {
        getMealList,
        mealList,
    };
}