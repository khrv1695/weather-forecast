import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../components/container/container.component';
import { TabHeaderComponent } from '../components/tab-header/tab-header.component';
import { TabContentComponent } from '../components/tab-content/tab-content.component';
import { AppComponent } from '../app.component';



@NgModule({
  imports: [
    CommonModule,
    ContainerComponent, TabHeaderComponent, TabContentComponent, AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
