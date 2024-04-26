import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  constructor(private httpClient: HttpClient) { }

  getForecast(city: string): Observable<any> {
    return this.httpClient.get("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=482944e26d320a80bd5e4f23b3de7d1f");
  }
}
