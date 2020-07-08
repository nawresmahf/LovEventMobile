import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from './config.service';
import {Activite} from '../classes/activite';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {
  url = this.config.hostName;

  constructor(private http: HttpClient, private config: ConfigService) { }

  _create(id, a) {
    console.log(id)
    return this.http.post<Activite>(this.url + '/activite/'+id, a);
  }

  update(a) {
    return this.http.put<Activite>(this.url + '/activite', a);
  }

  delete(id) {
    return this.http.delete(this.url + '/activite/' + id);
  }
}
