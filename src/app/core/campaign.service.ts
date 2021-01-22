import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CampaignService {
  private readonly ROOT_URL = ' https://run.mocky.io/v3/';

  constructor(private http: HttpClient) {
  }

  public getCampaign(data: string): Observable<any> {
    return this.http.get(`${this.ROOT_URL}${data}`);
  }
}
