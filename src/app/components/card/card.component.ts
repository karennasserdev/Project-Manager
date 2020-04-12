import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../models/card';
import { Column } from '../models/column';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {

    @Input()
    card: Card;

    @Input()
    column: Column;

    @Output()
    viewModalCardClicked = new EventEmitter<Card>();

    @Output()
    viewLastColumnClicked = new EventEmitter<Column>();

    viewCard() {
        // Quando o button for clicado, esta função viewCard emitirá o evento 
        // viewModalCardClicked passando o card atual.
        this.viewModalCardClicked.emit(this.card);
        this.viewLastColumnClicked.emit(this.column);
    }

}
