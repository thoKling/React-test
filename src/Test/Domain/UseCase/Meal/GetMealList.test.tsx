import {GetMealList} from "../../../../Domain/UseCase/Meal/GetMealList";
import {MealRepository} from "../../../../Domain/Repository/MealRepository";
import {Meal} from "../../../../Domain/Model/Meal";

class MealListRepositoryStub implements MealRepository {
    getMealList(): Promise<Meal[]> {
        return Promise.resolve([
            {id: 2, name: 'meal1', ingredients: ['ingredient1']},
            {id: 4, name: 'meal2', ingredients: ['ingredient2']},
        ]);
    }
}

test('get meal list', async () => {
    const useCase = new GetMealList(new MealListRepositoryStub());
    const meals = await useCase.invoke();
    expect(meals).toEqual([
        {id: 2, name: 'meal1', ingredients: ['ingredient1']},
        {id: 4, name: 'meal2', ingredients: ['ingredient2']},
    ]);
});
