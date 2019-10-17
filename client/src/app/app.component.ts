import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { NavService } from './menu-list-item/nav.service';
import { NavItem } from './menu-list-item/model/nav-item';
import { NAV_ITEMS } from './menu-list-item/const/nav-items';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    @ViewChild('sidenav', {static: false}) sidenav: ElementRef;
    isLoggedIn: boolean = true;
    title = 'client';
    sidenavOpened: boolean = true;
    navItems: NavItem[] = NAV_ITEMS;

    constructor(
        private navService: NavService
    ) {}

    ngAfterViewInit() {
        this.navService.sidenav = this.sidenav;
    }
}