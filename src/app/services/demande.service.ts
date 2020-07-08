import { Injectable } from "@angular/core";
import { ConfigService } from "./config.service";
import { HttpClient } from "@angular/common/http";
import { Demande } from "../classes/demande";

@Injectable({
  providedIn: "root",
})
export class DemandeService {
  url = this.config.hostName;
  constructor(private config: ConfigService, private http: HttpClient) {}

  envoiDemande(d) {
    return this.http.post<Demande>(this.url + "/demande", d);
  }

  consulterDemande() {
    return this.http.get<Demande[]>(this.url + "/demandes");
  }

  approuverDemande(id, dem) {
    return this.http.put(this.url + "/demande/" + id, dem);
  }

  desapprouverDemande(id, dem) {
    return this.http.put(this.url + "/demande/" + id, dem);
  }
}
