import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {CreateNewFeatureComponent} from './create-new-feature.component';

@Injectable()
export class CreateNewFeatureService {

    constructor(public dialog: MatDialog) {
    }

    public openDialog(): any {
        const dialogRef = this.dialog.open(CreateNewFeatureComponent, {
            width: '100%', disableClose: true, data: null
        });

        dialogRef.afterClosed().subscribe(result => {
            /*console.log(result);*/
        });
        return dialogRef;
    }
}
