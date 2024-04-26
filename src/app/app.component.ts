import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherForecastService } from './components/weather-forecast.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  providers: [WeatherForecastService]
})
export class AppComponent {
  title = 'weather-forecast';
}
