import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../interface/weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  urlAPI = environment.urlApi;
  APIKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getCities(): Observable<Weather[]> {
    let url = `${this.urlAPI}?apikey=${this.APIKey}&language=en-us`;
    return this.http.get<Weather[]>(url);
  }


  filtro(value: string, arrWeather: Weather[]):Weather[]{
    return arrWeather.filter((element) => {
      if(element.LocalizedName.toLocaleLowerCase()
        .indexOf(value.toLocaleLowerCase()) >= 0){
          element.LocalObservationDateTime = element.LocalObservationDateTime.substr(0,9)
          element.TimeZone.Name = this.formatRegion(element.TimeZone.Name);
          element.icon = this.getIcon(element.WeatherText);
          return true;
        }
        return false;
    });
  }

  formatRegion(str: string){
    return str.split("/")[0];
  }

  getIcon(value: string): string {
    let weatherArr = [
      {
        type: 'Hazy sunshine',
        icon: './../../assets/img/sunrise.svg',
      },
      {
        type: 'Light fog',
        icon: './../../assets/img/snowy.svg',
      },
      {
        type: 'Light rain shower',
        icon: './../../assets/img/rainy.svg',
      },
      {
        type: 'Light rain',
        icon: './../../assets/img/rainy.svg',
      },
      {
        type: 'Clear',
        icon: './../../assets/img/sun.svg',
      },
      {
        type: 'Sunny',
        icon: './../../assets/img/sun.svg',
      },
      {
        type: 'Cloudy',
        icon: './../../assets/img/cloud.svg',
      },
      {
        type: 'Overcast',
        icon: './../../assets/img/cloud.svg',
      },
      {
        type: 'Rain',
        icon: './../../assets/img/rain.svg',
      },
      {
        type: 'Shower',
        icon: './../../assets/img/rain.svg',
      },
      {
        type: 'A shower',
        icon: './../../assets/img/rain.svg',
      },
      {
        type: 'Thunderstorm',
        icon: './../../assets/img/thunderstorm.svg',
      },
      {
        type: 'Clouds and sun',
        icon: './../../assets/img/cloudy.svg',
      },
      {
        type: 'Some clouds',
        icon: './../../assets/img/cloudy.svg',
      },
      {
        type: 'Partly cloudy',
        icon: './../../assets/img/cloudy.svg',
      },
      {
        type: 'Partly sunny',
        icon: './../../assets/img/cloudy.svg',
      },
      {
        type: 'Mostly cloudy',
        icon: './../../assets/img/cloudy.svg',
      },
      {
        type: 'Mostly sunny',
        icon: './../../assets/img/cloudy.svg',
      },
      {
        type: 'Mostly clear',
        icon: './../../assets/img/cloudy.svg',
      },
    ];

    for (let weather of weatherArr) {
      if (weather.type.toLowerCase() == value.toLocaleLowerCase()) {
        return weather.icon;
      }
    }
  }
}
