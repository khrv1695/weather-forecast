import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ForecastComponent } from '../forecast/forecast.component';
import { ForecastDetailComponent } from '../forecast-detail/forecast-detail.component';

@Component({
  selector: 'app-tab-content',
  standalone: true,
  imports: [CommonModule, ForecastComponent, ForecastDetailComponent],
  templateUrl: './tab-content.component.html',
  styleUrl: './tab-content.component.sass'
})
export class TabContentComponent {
  @Input() foreCastData: any;
  @Input() dayForecastData: any;
  getForecastDayData() {
    if (!this.foreCastData)
      return []
    var data = this.dayForecastData.map((d: any) => ({ dt: d.dt_txt.slice(5, 10), min: d.main.temp_min, max: d.main.temp_max }))
    const groupBy = (arr: any[]) => arr.reduce((acc: any, ele: { dt: string | number; }) => ((acc[ele.dt] = acc[ele.dt] || []).push(ele), acc), {})

    const max = (arr: any) => Math.max(...arr.map((res: { max: any; }) => res.max))
    const min = (arr: any) => Math.min(...arr.map((res: { min: any; }) => res.min))


    var forecast = Object.entries(groupBy(data)).map(([key, val]) => ({
      date: key, min: min(val), max: max(val),
    }))
    return forecast.splice(1, 10);
  }

  getDayDescription(day: string): any {
    return this.foreCastData.list.filter((f: { dt_txt: string; }) => f.dt_txt.slice(5, 10) == day)[0].weather[0].description
  }

  getDay(day: string): any {
    return new Date(this.foreCastData.list.filter((f: { dt_txt: string; }) => f.dt_txt.slice(5, 10) == day)[0].dt_txt).toString().slice(0, 3)
  }

  getDayImage(day: string): any {
    return this.foreCastData.list.filter((f: { dt_txt: string; }) => f.dt_txt.slice(5, 10) == day)[0].weather[0].icon
  }
}
