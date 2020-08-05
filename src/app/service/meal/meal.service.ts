import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MealRequest } from 'src/app/model/mealRequest/mealRequest';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private mealsUrl: string

  constructor(private http: HttpClient) {
    this.mealsUrl = "http://localhost:8080/meal"
  }

  public save(mealImage: MealRequest) {
    return this.http.post<MealRequest>(this.mealsUrl, mealImage)
  }

  public getMeals() {
    return this.http.get<MealRequest[]>(this.mealsUrl)
  }
}
