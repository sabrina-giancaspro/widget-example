import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-btn-widget',
  templateUrl: './button-widget.component.html',
  styleUrls: ['./button-widget.component.scss']
})
export class ButtonWidgetComponent {
  @Input() isCard: boolean = true;
  @Input() flipped: boolean = false;
  @Input() frontIcon: string = '';
  @Input() backIcon: string = '';
  @Input() frontText: string = 'Front';
  @Input() backText: string = 'Back';
  @Input() widgetSize: string = '200px';
  @Input() flipDuration: string = '0.6s';


  positionX: number = 0;
  positionY: number = 0;

  isDragging: boolean = false;
  initialMouseX: number = 0;
  initialMouseY: number = 0;

  flipCard(event: Event) {
    event.stopPropagation();
    this.flipped = !this.flipped;
  }

  startDrag(event: MouseEvent) {
    this.isDragging = true;
    this.initialMouseX = event.clientX;
    this.initialMouseY = event.clientY;

    event.preventDefault();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const deltaX = event.clientX - this.initialMouseX;
      const deltaY = event.clientY - this.initialMouseY;

      this.positionX += deltaX;
      this.positionY += deltaY;

      this.initialMouseX = event.clientX;
      this.initialMouseY = event.clientY;
    }
  }

  @HostListener('document:mouseup')
  stopDrag() {
    this.isDragging = false;
  }
}
