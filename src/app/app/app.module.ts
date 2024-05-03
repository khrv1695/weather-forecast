import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../components/container/container.component';
import { TabHeaderComponent } from '../components/tab-header/tab-header.component';
import { TabContentComponent } from '../components/tab-content/tab-content.component';
import { AppComponent } from '../app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    AppComponent,
    MatFormFieldModule,
    CommonModule,
    ContainerComponent, 
    TabHeaderComponent,
    TabContentComponent,   
    MatInputModule,
    MatIconModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
