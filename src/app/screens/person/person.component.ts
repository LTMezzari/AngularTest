import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person/person';
import { PersonService } from 'src/app/service/person/person.service';
import { Institution } from 'src/app/model/institution/institution';
import { InstitutionService } from 'src/app/service/institution/institution.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  person: Person = new Person()

  selectedInstitution: Institution
  institutions: Institution[]

  constructor(private service: PersonService, private institutionService: InstitutionService) { }

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
    this.person.institution = this.selectedInstitution
    this.service.save(this.person).subscribe(
      data => {
        alert("Usuário salvo com sucesso")
        this.person = new Person()
        console.log(data)
      },
      error => {
        alert("Erro inesperado.")
      }
    )
  }

  changeInstitution(institutionId: String) {
    for (var institution of this.institutions) {
      if (institution.id == institutionId) {
        this.selectedInstitution = institution
      }
    }
  }
}
