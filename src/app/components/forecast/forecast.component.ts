import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.sass'
})
export class ForecastComponent {

  @Input() temparature: any = 0.0;
  @Input() time: string = "";
  @Input() humidity: string = "";
  @Input() iconName: string = "";
  imgbaseUrl = "https://openweathermap.org/img/wn/";

}
