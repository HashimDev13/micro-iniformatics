import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiIntegrationService {

  constructor(private http: HttpClient) { }


  getRequest(url: string, data: any = {}) {
    return this.http.get(environment.BASE_URL+url, {});
  }

  postRequest(url: string, data: any = {}) {
    return this.http.post(environment.BASE_URL + url, data, {});
  }
}
