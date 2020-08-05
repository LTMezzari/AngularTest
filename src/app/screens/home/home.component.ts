import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { InstitutionService } from 'src/app/service/institution/institution.service';
import { MealService } from 'src/app/service/meal/meal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hasInstitutions: boolean = false
  hasMeals: boolean = false

  constructor(private router: Router, private service: InstitutionService, private mealService: MealService) { }

  ngOnInit() {
    // this.hasInstitutions = true
    this.service.getInstitutions().subscribe(
      data => {
        this.hasInstitutions = data.length > 0
      },
      error => {
        alert("Erro inesperado.")
      }
    )

    // this.hasMeals = true
    this.mealService.getMeals().subscribe(
      data => {
        this.hasMeals = data.length > 0
      },
      error => {
        alert("Erro inesperado.")
      }
    )
  }

  navigate(page: String) {
    this.router.navigate([page])
  }

}
