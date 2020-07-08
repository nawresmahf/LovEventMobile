import { Injectable } from "@angular/core";
import { Evenement } from "../classes/evenement";
import { ConfigService } from "./config.service";
import { HttpClient } from "@angular/common/http";
import { Intervenant } from "../classes/intervenant";
import { Favori } from "../classes/favori";

@Injectable({
  providedIn: "root",
})
export class EvenementService {
  url = this.config.hostName;

  constructor(private http: HttpClient, private config: ConfigService) {}

  getAll() {
    return this.http.get<Evenement[]>(this.url + "/evenements");
  }

  getById(id) {
    return this.http.get<Evenement>(this.url + "/evenement/" + id);
  }

  getByUtl(utl) {
    return this.http.get<Evenement[]>(this.url + "/evtUser/" + utl);
  }

  getByPost(pubs) {
    return this.http.get<Evenement>(this.url + "/evenement/p/" + pubs);
  }

  getArchive(idP) {
    return this.http.get<Evenement[]>(this.url + "/archive/" + idP);
  }

  getDem(idP) {
    return this.http.get<Evenement[]>(this.url + "/dems/" + idP);
  }

  getNbDem(idP) {
    return this.http.get(this.url + "/nbDem/" + idP);
  }

  getNbEvt() {
    return this.http.get(this.url + "/nbEvt");
  }

  getNbDep(idP) {
    return this.http.get(this.url + "/nbDep/" + idP);
  }

  getNbAct(idP) {
    return this.http.get(this.url + "/nbAct/" + idP);
  }

  similar(e, c, s) {
    return this.http.get<Evenement[]>(
      this.url + "/similar/" + e + "/" + c + "/" + s
    );
  }

  proximite(e, v) {
    return this.http.get<Evenement[]>(this.url + "/proximite/" + e + "/" + v);
  }

  create(e) {
    return this.http.post<Evenement>(this.url + "/evenement", e);
  }

  uploadImage(id, img) {
    return this.http.put(this.url + "/" + id + "/image/upload", img);
  }

  desapprouver(id, e) {
    return this.http.put(this.url + "/desapprouve/" + id, e);
  }

  annuler(id, e) {
    return this.http.put(this.url + "/annuler/" + id, e);
  }

  updateEvt(e) {
    return this.http.put(this.url + "/evenement", e);
  }

  delete(id) {
    return this.http.delete(this.url + "/evenement/" + id);
  }

  ajoutInter(id, i) {
    return this.http.post<Intervenant>(this.url + "/intervenant/" + id, i);
  }

  suppInter(id) {
    return this.http.delete<Intervenant>(this.url + "/intervenant/" + id);
  }

  updateInter(id, i) {
    return this.http.put(this.url + "/intervenant/" + id, i);
  }

  favori(f) {
    return this.http.post<Favori>(this.url + "/favori", f);
  }

  getUserFav(id) {
    return this.http.get<Favori[]>(this.url + "/favori/clt/" + id);
  }

  removeFav(id) {
    return this.http.delete<Favori>(this.url + "/favori/" + id);
  }

  follow(f) {
    return this.http.post(this.url + '/follow', f);
  }

  unfollow(id) {
    return this.http.delete(this.url+'/unfollow/'+id)
  }
}
