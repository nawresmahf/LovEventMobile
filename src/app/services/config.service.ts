import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  readonly hostName = 'http://localhost:5000';
  constructor() { }
}
