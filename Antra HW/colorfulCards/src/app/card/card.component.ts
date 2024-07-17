import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() card: any;
  @Input() isExpanded: boolean = false;
  @Output() cardClick = new EventEmitter<any>();

  onCardClick(): void {
    this.cardClick.emit(this.card);
  }
}
