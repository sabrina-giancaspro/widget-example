import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent {
  @Input() isCard: boolean = true;
  @Input() flipped: boolean = false;
  @Input() frontIcon: string = '';
  @Input() backIcon: string = '';
  @Input() frontText: string = 'Front'; 
  @Input() backText: string = 'Back';
  @Input() widgetSize: string = '200px'; 
  @Input() flipDuration: string = '0.6s';

  flipCard(event: Event) {
    event.stopPropagation();
    this.flipped = !this.flipped;
  }
}
