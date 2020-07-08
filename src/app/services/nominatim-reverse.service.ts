import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NominatimResponse} from "../classes/nominatim-response";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class NominatimReverseService {

  constructor(private http: HttpClient) {
  }

  findAdress(lat, long): Observable<any> {
    let url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}`;
    return this.http
      .get(url)
  }
}
