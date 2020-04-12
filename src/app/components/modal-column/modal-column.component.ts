import { Component } from '@angular/core';
import { Column } from '../models/column';
import { ColumnService } from 'src/app/services/column.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-modal-column',
    templateUrl: './modal-column.component.html',
    styleUrls: ['./modal-column.component.scss']
})
export class ModalColumnComponent {

    submitted: boolean = false;

    columnForm: FormGroup = new FormGroup({
        columnName: new FormControl(null, [Validators.required]),
    });

    constructor(private columnService: ColumnService) { }

    submit() {
        this.submitted = true;

        //Se o form for válido...
        if (this.columnForm.valid) {
            //será criada uma nova coluna
            let columnInputs = new Column();
            //o titulo da coluna será o valor do FormControl
            columnInputs.title = this.columnName.value;
            //chama-se a função addColumn (que está no serviço column) e se passa a nova coluna criada
            this.columnService.addColumn(columnInputs);
            //reset do form
            this.columnForm.reset();
        }
    }

    // simplificar o get do FormControl
    get columnName() { return this.columnForm.get('columnName') };

    //validações
    isNameInvalid(): boolean { return this.columnName.invalid && (this.columnName.dirty || this.columnName.touched); }
    isModalInvalid() { return this.columnName.invalid }
}
