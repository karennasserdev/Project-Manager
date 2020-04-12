import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-label-input',
    templateUrl: './label-input.component.html',
    styleUrls: ['./label-input.component.scss']
})
export class LabelInputComponent {

    @Input()
    value: string;

    @Input()
    isTextArea: boolean;

    @Output()
    valueChanged = new EventEmitter<string>();

    isEdit: boolean = false;

    toggleEdit() {
        if (this.isEdit) {
            this.isEdit = false;
        } else {
            this.isEdit = true;
        }
    }

    somethingChanged(e: any) {
        this.valueChanged.emit(e.target.value);
    }
}
