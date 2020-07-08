import {Injectable} from '@angular/core';
import {ConfigService} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = this.config.hostName;

  constructor(private config: ConfigService) {
  }
}