import {Injectable} from '@angular/core';
import {ConfigService} from "./config.service";
import {HttpClient} from "@angular/common/http";
import {Slider} from "../classes/slider";

@Injectable({
  providedIn: 'root',
})
export class SliderService {
  url = this.config.hostName;

  constructor(private config: ConfigService, private http: HttpClient) {
  }

  getSlider() {
    return this.http.get<Slider[]>(this.url + '/slider');
  }

  getImg(id) {
    return this.http.get<Slider>(this.url + '/slider/' + id);
  }

  addImg(i) {
    return this.http.post<Slider>(this.url + '/slider/add', i);
  }

  updateContent(id, s) {
    return this.http.put(this.url + '/slider/editcontent/' + id, s);
  }

  updateImg(id, s) {
    return this.http.put(this.url + '/slider/editimg/' + id, s);
  }

  deleteImg(id) {
    return this.http.delete(this.url + '/slider/remove/' + id);
  }
}
