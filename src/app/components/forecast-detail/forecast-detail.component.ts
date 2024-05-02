import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forecast-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast-detail.component.html',
  styleUrl: './forecast-detail.component.sass'
})
export class ForecastDetailComponent {
  @Input() minTemparature: any = 0.0;
  @Input() maxTemparature: any = 0.0;
  @Input() day: string = "";
  @Input() time: string = "";
  @Input() description: string = "";
  @Input() iconName: string = "";
  imgbaseUrl = "https://openweathermap.org/img/wn/";
}
