import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ConfigService } from "./config.service";
import { Categorie } from "../classes/categorie";
import { Observable } from "rxjs";
/*
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'Application/json'})
};*/

@Injectable({
  providedIn: "root",
})
export class CategorieService {
  url = this.config.hostName;

  constructor(private http: HttpClient, private config: ConfigService) {}

  getAll(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.url + "/categories");
  }

  getCat(id): Observable<Categorie> {
    return this.http.get<Categorie>(this.url + "/categorie/" + id);
  }

  create(c): Observable<Categorie> {
    return this.http.post(this.url + "/categorie", c);
  }

  update(id, c): Observable<any> {
    return this.http.put(this.url + "/categorie/" + id, c);
  }

  delete(id): Observable<Categorie> {
    return this.http.delete<Categorie>(this.url + "/delCat/" + id);
  }
}
