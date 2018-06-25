import { Component, OnChanges,OnInit, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    constructor() { }

    ngOnChanges(): void {
        console.log('OnChanges hook called');
    };

    ngOnInit(): void {
        console.log('ngOnInit hook called');
    };

    ngDoCheck(): void {
        console.log('ngDoCheck hook called');
    };

    ngAfterContentChecked(): void {
        console.log('ngAfterContentChecked hook called');
    };

    ngAfterContentInit(): void {
        console.log('ngAfterContentInit hook called');
    };

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit hook called');
    };

    ngAfterViewChecked(): void {
        console.log('ngAfterViewChecked hook called');
    };

    ngOnDestroy(): void {
        console.log('ngOnDestroy hook called');
    };
 }
