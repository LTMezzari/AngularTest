import { HomeComponent } from './screens/home/home.component';
import { InstitutionComponent } from './screens/institution/institution.component';
import { PersonComponent } from './screens/person/person.component';
import { MealComponent } from './screens/meal/meal.component';
import { MealListComponent } from './screens/mealList/mealList.component';

export const AppRoutes: any = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "institution",
        component: InstitutionComponent
    },
    {
        path: "person",
        component: PersonComponent
    },
    {
        path: "meal",
        component: MealComponent
    },
    {
        path: "meal-list",
        component: MealListComponent
    }
]

export const AppComponents: any = [
    HomeComponent,
    InstitutionComponent,
    PersonComponent,
    MealComponent,
    MealListComponent
]