import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-starter-header',
    templateUrl: './starter-header.component.html',
    styleUrls: ['./starter-header.component.css']
})
export class StarterHeaderComponent implements OnInit {

    @Input() rightMenu: { 'label': string, icon: string, callBack: Function }[];

    constructor() {
    }

    ngOnInit() {
    }

}
