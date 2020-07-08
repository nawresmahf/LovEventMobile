import { Injectable } from "@angular/core";
import * as moment from "moment";

@Injectable({
  providedIn: "root",
})
export class TimeService {
  constructor() {}

  timeFromNow(time) {
    moment.locale("fr");
    return moment(time).fromNow();
  }
}
