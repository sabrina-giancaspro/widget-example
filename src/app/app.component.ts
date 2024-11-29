import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'widget-example';
  @Input() isCard: boolean = true;

  
  positionX: number = 0;
  positionY: number = 0;
}
