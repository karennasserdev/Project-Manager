import { Component, OnInit } from '@angular/core';
import { Column } from '../models/column';
import { ColumnService } from 'src/app/services/column.service';
import { Card } from '../models/card';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

    //Variável criada para alocar o array de colunas
    ArrayOfColumns: Column[] = [];

    //Variável criada para identificar a ultima coluna clicada
    lastClickedColumn: Column;

    //Variável criada para identificar o ultimo card clicado
    lastClickedCard: Card;

    constructor(private columnService: ColumnService) { }

    //Ao iniciar o componente, é chamado o serviço para buscar as colunas e armazenar no array criado
    ngOnInit() {
        this.ArrayOfColumns = this.columnService.getColumns();
    }

    //função que recebe uma coluna e é chamada pelo evento addCardClicked que é emitido pelo componente 
    //<app-column> e atribui a coluna recebida como sendo a ultima coluna clicada.
    setLastColumnClicked(column: Column) {
        this.lastClickedColumn = column;
    }

    //função que recebe um card e é chamada pelo evento viewCardClicked que é emitido pelo componente 
    //<app-column> e atribui o card recebido como sendo o ultimo card clicado.
    setLastCardClicked(card: Card) {
        this.lastClickedCard = card;
    }
}
