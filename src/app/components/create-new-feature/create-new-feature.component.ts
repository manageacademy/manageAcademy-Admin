import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CreateNewFeatureControlService} from '../create-new-feature-control/create-new-feature-control.service';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-create-new-feature',
    templateUrl: './create-new-feature.component.html',
    styleUrls: ['./create-new-feature.component.css']
})
export class CreateNewFeatureComponent implements OnInit {

    public formControls: any[];
    public formFields: Array<any> = [
        {
            'key': 'email',
            'type': 'input',
            'templateOptions': { 'type': 'email', 'label': 'Email address', 'placeholder': 'Enter email', 'required': true }
        },
        {
            'key': 'number',
            'type': 'input',
            'templateOptions': {'type': 'number', 'label': 'Age', 'placeholder': 'Age', 'required': true}
        }
    ];
    public form = new FormGroup({});
    public userModel = {};
    public includeForm: boolean = true;

    constructor(public dialogRef: MatDialogRef<CreateNewFeatureComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any, public createNewFeatureControlService: CreateNewFeatureControlService) {
        this.formControls = [];
        /*this.formFields = [];*/
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
    }

    showCreateNewFeatureControlModel(control) {
        this.includeForm = false;
        this.createNewFeatureControlService.openDialog({
            type: control.id,
            label: '',
            placeHolder: '',
            required: ''
        }).afterClosed().subscribe(result => {
            this.formFields.push({
                key: result.type,
                type: 'input',
                templateOptions: {
                    type: result.type,
                    label: result.label,
                    placeholder: result.placeHolder,
                    required: result.required,
                }
            });
        });
        setTimeout(() => {
            this.includeForm = true;
        }, 500);
    }

    ngOnInit() {
    }


    onNoClick(): void {
        this.dialogRef.close();
    }

    submit(user) {
        console.log(user);
    }

}
