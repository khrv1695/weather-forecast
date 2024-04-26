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
  @Input() ForecastData: any;
}
