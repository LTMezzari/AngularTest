import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../../model/person/person'

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private personsUrl: string

  constructor(private http: HttpClient) {
    this.personsUrl = "http://localhost:8080/person"
  }

  public save(person: Person) {
    return this.http.post<Person>(this.personsUrl, person)
  }
}
