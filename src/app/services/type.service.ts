import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ConfigService } from "./config.service";
import { Type } from "../classes/type";

@Injectable({
  providedIn: "root",
})
export class TypeService {
  url = this.config.hostName;

  constructor(private http: HttpClient, private config: ConfigService) {}

  nvxType(type) {
    return this.http.post(this.url + "/type", type);
  }

  getAll() {
    return this.http.get<Type[]>(this.url + "/types");
  }

  getById(id) {
    return this.http.get<Type>(this.url + "/type/" + id);
  }

  modifier(id, t) {
    return this.http.put(this.url + "/modType/" + id, t);
  }

  suppType(id) {
    return this.http.delete(this.url + "/type/" + id);
  }
}
