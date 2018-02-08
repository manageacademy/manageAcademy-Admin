import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-create-new-feature-control',
    templateUrl: './create-new-feature-control.component.html',
    styleUrls: ['./create-new-feature-control.component.css']
})
export class CreateNewFeatureControlComponent implements OnInit {

    public formControls: any[];

    constructor(public dialogRef: MatDialogRef<CreateNewFeatureControlComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any = { type: '', label: '', placeHolder: '', required: '' }) {
        this.formControls = [];
        this.formControls.push({'label': 'Check Box', id: 'checkbox'});
        this.formControls.push({'label': 'Color', id: 'color'});
        this.formControls.push({'label': 'Email', id: 'email'});
        this.formControls.push({'label': 'file', id: 'file'});
        this.formControls.push({'label': 'Number', id: 'number'});
        this.formControls.push({'label': 'Password', id: 'password'});
        this.formControls.push({'label': 'Radio', id: 'radio'});
        this.formControls.push({'label': 'Range', id: 'range'});
        this.formControls.push({'label': 'Tel', id: 'tel'});
        this.formControls.push({'label': 'Text', id: 'text'});
        this.formControls.push({'label': 'Time', id: 'time'});
        this.formControls.push({'label': 'Url', id: 'url'});
        this.formControls.push({'label': 'Select', id: 'select'});
    }

    ngOnInit() {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSubmit(): void {
        this.dialogRef.close(this.data);
    }
}
