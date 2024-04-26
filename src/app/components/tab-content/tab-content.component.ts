import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ForecastComponent } from '../forecast/forecast.component';

@Component({
  selector: 'app-tab-content',
  standalone: true,
  imports: [CommonModule, ForecastComponent],
  templateUrl: './tab-content.component.html',
  styleUrl: './tab-content.component.sass'
})
export class TabContentComponent {
  @Input() ForecastData: any;
}
