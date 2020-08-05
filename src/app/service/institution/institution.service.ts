import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Institution } from '../../model/institution/institution'

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {

  private institutionsUrl: string

  constructor(private http: HttpClient) {
    this.institutionsUrl = "http://localhost:8080/institution"
  }

  public save(institution: Institution) {
    return this.http.post(this.institutionsUrl, institution)
  }

  public getInstitutions() {
    return this.http.get<Institution[]>(this.institutionsUrl)
  }
}
