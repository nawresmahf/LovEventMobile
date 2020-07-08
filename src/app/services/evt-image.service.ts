import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ConfigService } from "./config.service";
import { EvtImages } from "./../classes/evt-images";

@Injectable({
  providedIn: "root",
})
export class EvtImageService {
  url = this.config.hostName;

  constructor(private http: HttpClient, private config: ConfigService) {}

  getRandom() {
    return this.http.get<EvtImages[]>(this.url + "/random");
  }
}
