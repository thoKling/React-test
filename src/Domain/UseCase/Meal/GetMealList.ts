import {Meal} from "../../Model/Meal";
import {MealRepository} from "../../Repository/MealRepository";
import {DefaultMealRepository} from "../../../Data/Repository/DefaultMealRepository";

export class GetMealList {
    private mealRepository: MealRepository;

    constructor(_mealRepository: MealRepository | undefined = undefined) {
        this.mealRepository = _mealRepository ?? new DefaultMealRepository();
    }

    invoke(): Promise<Meal[]> {
        return this.mealRepository.getMealList()
    }
}