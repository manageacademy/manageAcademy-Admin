import {Component, OnInit} from '@angular/core';
import * as _ from 'underscore';
import * as moment from 'moment';
import {CreateNewFeatureService} from '../../components/create-new-feature/create-new-feature.service';

@Component({
    selector: 'app-starter-control-sidebar',
    templateUrl: './starter-control-sidebar.component.html',
    styleUrls: ['./starter-control-sidebar.component.css']
})
export class StarterControlSidebarComponent implements OnInit {

    public newFeature = {name: '', description: ''};

    constructor() {
    }

    onSubmit(): void {
    }

    ngOnInit() {
    }

}
