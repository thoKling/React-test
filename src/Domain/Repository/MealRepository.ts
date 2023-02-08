import {Meal} from "../Model/Meal";

export interface MealRepository {
    getMealList(): Promise<Meal[]>;
}