import {Component, OnInit, OnDestroy} from '@angular/core';
import {CreateNewFeatureService} from '../components/create-new-feature/create-new-feature.service';

@Component({
    selector: 'app-starter',
    templateUrl: './starter.component.html',
    styleUrls: ['./starter.component.css']
})
export class StarterComponent implements OnInit, OnDestroy {

    bodyClasses = 'skin-blue sidebar-mini';
    body: HTMLBodyElement = document.getElementsByTagName('body')[0];
    rightMenu: { 'label': string, icon: string, callBack: Function }[];

    constructor(private createNewFeatureService: CreateNewFeatureService) {
        this.getHeaderRightMenu();
    }

    getHeaderRightMenu(): void {
        const menuOne = {'label': 'Add New Feature', icon: 'fa fa-plus', callBack: this.showAddNewModel.bind(this)};
        this.rightMenu = [menuOne];
    }

    showAddNewModel(menu): void {
        this.createNewFeatureService.openDialog();
    }

    ngOnInit() {
        // add the the body classes
        this.body.classList.add('skin-blue');
        this.body.classList.add('sidebar-mini');
    }

    ngOnDestroy() {
        // remove the the body classes
        this.body.classList.remove('skin-blue');
        this.body.classList.remove('sidebar-mini');
    }

}
