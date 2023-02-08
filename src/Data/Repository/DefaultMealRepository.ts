import {MealRepository} from "../../Domain/Repository/MealRepository";
import {Meal} from "../../Domain/Model/Meal";

export class DefaultMealRepository implements MealRepository {
    getMealList(): Promise<Meal[]> {
        return Promise.resolve([
            {id: 1, name: "Meal 1", ingredients: ["Ingredient 1", "Ingredient 2"]},
            {id: 2, name: "Meal 2", ingredients: ["Ingredient 3", "Ingredient 4"]},
            {id: 3, name: "Meal 3", ingredients: ["Ingredient 5", "Ingredient 6"]},
        ]);
    }

}