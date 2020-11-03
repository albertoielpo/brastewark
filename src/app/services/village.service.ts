import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class VillageService {

  private villageUrl = "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"

  constructor(private http: HttpClient) { }

  getData() : Observable<any> {
    return this.http.get<any>(this.villageUrl);
  }
}
