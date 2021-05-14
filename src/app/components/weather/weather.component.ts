import { Weather } from './../../interface/weather';
import { WeatherService } from './../../service/weather.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {

  cities: Weather[];
  newCities: Weather[];
  isError: boolean = false;
  inputValue: string = "";

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.weatherService.getCities().subscribe((value) => (this.cities = value));
  }

  search(value: string) {
    if (value !== '' || value.trim() !== '') {
      document.getElementById("seachInput").nodeValue = "";
      this.newCities = this.weatherService.filtro(value, this.cities);
      this.isError = false;
      this.inputValue = "";

      this.newCities.length == 0 ? this.isError = true: this.isError = false;

    }else{
      this.isError = true;
    }
  }
}
