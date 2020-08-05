import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
import { MealService } from 'src/app/service/meal/meal.service';
import { MealRequest } from 'src/app/model/mealRequest/mealRequest';

@Component({
  selector: 'app-meal',
  templateUrl: './mealList.component.html',
  styleUrls: ['./mealList.component.css']
})
export class MealListComponent implements OnInit {

  meals: MealRequest[]

  constructor(private service: MealService) { }

  ngOnInit() {
    this.service.getMeals().subscribe(
      data => {
        this.meals = data
      },
      error => {
        alert("Erro inesperado.")
      }
    )
  }
}
