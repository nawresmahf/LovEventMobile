import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {NominatimResponse} from '../classes/nominatim-response';

@Injectable({
  providedIn: 'root'
})
export class NominatimService {

  constructor(private http: HttpClient) { }

  addressLookup(req?: any): Observable<NominatimResponse[]> {
    let url = `https://nominatim.openstreetmap.org/search?format=json&q=${req}&viewbox=5.60303,37.88352,16.50146,33.42227&bounded=1`;
    return this.http
      .get(url).pipe(
        map((data: any[]) => data.map((item: any) => new NominatimResponse(
          item.lat,
          item.lon,
          item.display_name
          ))
        )
      )
  }
}
