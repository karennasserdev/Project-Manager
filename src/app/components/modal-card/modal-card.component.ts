import { Component, Input } from '@angular/core';
import { Card } from '../models/card';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ColumnService } from 'src/app/services/column.service';
import { Column } from '../models/column';

@Component({
    selector: 'app-modal-card',
    templateUrl: './modal-card.component.html',
    styleUrls: ['./modal-card.component.scss']
})
export class ModalCardComponent {

    submitted: boolean = false;

    @Input()
    column: Column;

    cardForm: FormGroup = new FormGroup({
        cardName: new FormControl(null, [Validators.required]),
        cardDescription: new FormControl(null),
        cardComments: new FormControl(null),
    });

    constructor(private columnService: ColumnService) { }

    submit() {

        this.submitted = true;

        //Se o form for válido...
        if (this.cardForm.valid) {
            //chama-se a função createCard e se passa a nova coluna criada
            this.createCard(this.cardName.value, this.cardDescription.value, this.cardComments.value);
            //reset do form
            this.cardForm.reset();
        }
    }

    createCard(titleValue: string, descriptionValue: string, commentsValue: string) {
        let card = new Card();
        //o título, descrição e comentários do card serão os valores do FormControl
        card.title = titleValue;
        card.description = descriptionValue;
        card.comments = commentsValue;
        console.log(card);
        //chama-se a função addCards (que está no serviço column) e se passa o card que deve acompanhar 
        //a coluna criada
        this.columnService.addCards(card, this.column);
    }

    // simplificar os gets do FormControl
    get cardName() { return this.cardForm.get('cardName') };
    get cardDescription() { return this.cardForm.get('cardDescription') };
    get cardComments() { return this.cardForm.get('cardComments') };

    isNameInvalid(): boolean { return this.cardName.invalid && (this.cardName.dirty || this.cardName.touched) };
    isModalInvalid() { return this.cardName.invalid };

}
