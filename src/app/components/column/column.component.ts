import { Card } from './../models/card';
import { Column } from './../models/column';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ColumnService } from 'src/app/services/column.service';

@Component({
    selector: 'app-column',
    templateUrl: './column.component.html',
    styleUrls: ['./column.component.scss']
})
export class ColumnComponent {

    constructor(private columnService: ColumnService) { }

    @Input()
    column: Column;

    @Output()
    addCardClicked = new EventEmitter<Column>();

    @Output()
    viewCardClicked = new EventEmitter<Card>();

    @Output()
    LastColumnClicked = new EventEmitter<Column>();

    //Função que recebe o argumento do evento e o atribui ao título da coluna
    titleChanged(title: string) {
        this.column.title = title;
    }

    addCard() {
        //Ao ser clicado, addCard emitirá o evento addCardClicked passando a coluna atual 
        //this.column é a coluna recebida no input
        this.addCardClicked.emit(this.column);
    }

    viewCard(card: Card) { //Quando o evento viewModalCardClicked for emitido pelo componente 
        //<app-card>, a função viewCard emitirá o evento viewCardClicked passando o card recebido 
        //pelo <app-card> para quem o escuta
        this.viewCardClicked.emit(card);
    }

    deleteColumn(): void {
        if (confirm(`Remove "${this.column.title}" ? `)) {
            this.columnService.removeColumn(this.column);
        }
    };

    lastColumn(column: Column) {
        this.LastColumnClicked.emit(column);
    }

}
