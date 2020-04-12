import { Card } from './../models/card';
import { Component, Input } from '@angular/core';
import { ColumnService } from 'src/app/services/column.service';
import { Column } from '../models/column';

@Component({
    selector: 'app-modal-view-card',
    templateUrl: './modal-view-card.component.html',
    styleUrls: ['./modal-view-card.component.scss']
})
export class ModalViewCardComponent {

    constructor(private columnService: ColumnService) { }

    @Input()
    card: Card;

    @Input()
    column: Column;

    titleCardChanged(e) {
        this.card.title = e;
    }

    deleteCard(): void {
        if (confirm(`Remove "${this.card.title}" ? `)) {
            this.columnService.removeCard(this.card, this.column);
        }
    };

}
