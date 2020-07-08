import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ConfigService } from "./config.service";
import { SousCategorie } from "../classes/sous-categorie";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SCategorieService {
  url = this.config.hostName;
  constructor(private http: HttpClient, private config: ConfigService) {}

  getAll(): Observable<SousCategorie[]> {
    return this.http.get<SousCategorie[]>(this.url + "/sCategories");
  }

  getScatById(id): Observable<SousCategorie> {
    return this.http.get<SousCategorie>(this.url + "/sCategorie/" + id);
  }

  create(id, s): Observable<SousCategorie> {
    return this.http.put<any>(this.url + "/sCategorie/" + id, s);
  }

  update(id, s): Observable<any> {
    return this.http.put(this.url + "/scat/" + id, s);
  }

  delete(id): Observable<SousCategorie> {
    return this.http.delete<SousCategorie>(this.url + "/delScat/" + id);
  }
}
