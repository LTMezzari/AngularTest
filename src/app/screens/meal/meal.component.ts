import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
import { Meal } from 'src/app/model/meal/meal';
import { MealService } from 'src/app/service/meal/meal.service';
import { MealRequest } from 'src/app/model/mealRequest/mealRequest';
import { Institution } from 'src/app/model/institution/institution';
import { InstitutionService } from 'src/app/service/institution/institution.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  meal: Meal = new Meal()
  mealRequest: MealRequest = new MealRequest()

  institutions: Institution[]
  selectedInstitution: Institution
  image

  constructor(private service: MealService, private institutionService: InstitutionService) { }

  ngOnInit() {
    this.institutionService.getInstitutions().subscribe(
      data => {
        this.institutions = data
        this.selectedInstitution = data[0]
      },
      error => {
        alert("Erro inesperado.")
      }
    )
  }

  onSubmit() {
    this.meal.institution = this.selectedInstitution
    this.mealRequest.meal = this.meal
    this.mealRequest.imageBase64 = this.image.toString()
      .replace("data:image/png;base64,", "")
      .replace("data:image/jpeg;base64,", "")
    this.service.save(this.mealRequest).subscribe(
      data => {
        alert("Refeição salva com sucesso")
        this.meal = new Meal()
        this.mealRequest = new MealRequest()
        this.image = ""
        console.log(data)
      },
      error => {
        alert("Erro inesperado.")
      }
    )
  }

  changeListener($event) : void {
    this.readThis($event.target)
  }
  
  readThis(inputValue: any): void {
    var file:File = inputValue.files[0]
    var myReader:FileReader = new FileReader()
  
    myReader.onloadend = (e) => {
      this.image = myReader.result
    }
    myReader.readAsDataURL(file)
  }

  changeInstitution(institutionId: String) {
    for (var institution of this.institutions) {
      if (institution.id == institutionId) {
        this.selectedInstitution = institution
      }
    }
  }
}
