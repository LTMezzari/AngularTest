import { Component, OnInit } from '@angular/core';

import { InstitutionService } from '../../service/institution/institution.service';
import { Institution } from '../../model/institution/institution';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.css']
})
export class InstitutionComponent implements OnInit {

  institution: Institution = new Institution()

  constructor(private service: InstitutionService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.service.save(this.institution).subscribe(
      data => {
        alert("Instituição salva com sucesso")
        this.institution = new Institution()
        console.log(data)
      },
      error => {
        alert("Erro inesperado.")
      }
    )
  }
}
