import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WeatherForecastService } from '../weather-forecast.service';
import { TabHeaderComponent } from '../tab-header/tab-header.component';
import { TabContentComponent } from '../tab-content/tab-content.component';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [TabHeaderComponent, TabContentComponent, CommonModule, HttpClientModule, MatFormFieldModule, MatIconModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.sass',
  providers: [HttpClient]
})
export class ContainerComponent implements OnInit, OnChanges {
  selectedCity: string = "";
  foreCastData: any;
  dayForecastData: any;
  constructor(private weatherForecastService: WeatherForecastService) {

  }
  cities = ["dallas", "atlanta", "virginia"]
  ngOnChanges(changes: SimpleChanges): void {
  }
  ngOnInit(): void {
    this.OnHeaderSelected(this.cities[0])
  }

  OnHeaderSelected(city: string) {
    this.selectedCity = city;
    this.weatherForecastService.getForecast(city).subscribe((res) => {
      this.foreCastData = res;
      this.dayForecastData = res.list;
    })
  }
  setCity(event: any) {
    this.cities.push(event.target.value)
    this.OnHeaderSelected(event.target.value);
  }
}
