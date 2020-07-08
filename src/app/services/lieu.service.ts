import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ConfigService } from "./config.service";
import { Lieu } from "../classes/lieu";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LieuService {
  url = this.config.hostName;
  constructor(private http: HttpClient, private config: ConfigService) {}

  getAll(): Observable<Lieu[]> {
    return this.http.get<Lieu[]>(this.url + "/lieux");
  }

  getVilleById(id): Observable<Lieu> {
    return this.http.get<Lieu>(this.url + "/lieu/" + id);
  }

  create(l): Observable<Lieu> {
    return this.http.post<Lieu>(this.url + "/lieu", l);
  }

  update(id, l): Observable<any> {
    return this.http.put(this.url + "/lieu/" + id, l);
  }

  delete(id): Observable<Lieu> {
    return this.http.delete(this.url + "/lieu/" + id);
  }
}
