import { Card } from './../components/models/card';
import { Column } from './../components/models/column';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ColumnService {

    columns: Column[] = [];
    cardsModel: Card[];
    open: any;


    constructor() { }

    getColumns(): Column[] {
        console.log(this.columns);
        return this.columns;
    }

    addColumn(column: Column) {
        this.columns.push(column);
        console.log(this.columns);
    }

    addCards(card: Card, column: Column) {
        column.cards.push(card);
        console.log(this.columns);
    }

    removeColumn(column: Column) {
        let i = this.columns.indexOf(column);
        this.columns.splice(i, 1);
    }

    removeCard(card: Card, column: Column) {
        let i = column.cards.indexOf(card);
        column.cards.splice(i, 1);
    }
}
