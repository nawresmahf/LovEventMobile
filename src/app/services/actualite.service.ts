import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from './config.service';
import {Actualite} from "../classes/actualite";

@Injectable({
  providedIn: 'root',
})
export class ActualiteService {

  url = this.config.hostName;

  constructor(private http: HttpClient, private config: ConfigService) {
  }

  getAll() {
    return this.http
      .get<Actualite[]>(this.url + "/actualites",
      );

  }

  getActu(id) {
    return this.http
      .get<Actualite>(this.url + "/actualite/" + id,
      );
  }


  addActu(id, p) {
    return this.http.post<{ Actualite }>(
      this.url + "/" + id + "/pub",
      p,
    );
  }

  updateActu(p) {
    return this.http.put(this.url + "/actualite", p);
  }

  deleteActu(id) {
    return this.http.delete(this.url + "/actualite/" + id);
  }
}
