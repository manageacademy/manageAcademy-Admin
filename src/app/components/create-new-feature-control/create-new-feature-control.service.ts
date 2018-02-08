import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {CreateNewFeatureControlComponent} from './create-new-feature-control.component';

@Injectable()
export class CreateNewFeatureControlService {

    constructor(public dialog: MatDialog) {
    }

    public openDialog(data): any {
        const dialogRef = this.dialog.open(CreateNewFeatureControlComponent, {
            width: '40%',
            disableClose: true,
            data: data
        });

        /*dialogRef.afterClosed().subscribe(result => {
            console.log(result);
        });*/
        return dialogRef;
    }

}
