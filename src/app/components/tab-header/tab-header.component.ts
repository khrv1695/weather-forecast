import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tab-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-header.component.html',
  styleUrl: './tab-header.component.sass'
})
export class TabHeaderComponent {

  @Input() DisplayName: string = "";
  @Input() selected: boolean = false;
  @Output() OnHeaderSelected = new EventEmitter();

  OnHeaderSelect() {
    this.OnHeaderSelected.emit(this.DisplayName);
  }

}
