import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            @if (!item.separator) {
                <li app-menuitem [item]="item" [index]="i" [root]="true"></li>
            } @else {
              <li class="menu-separator"></li>
            }
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [{ label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/'] }]
            },
            {
                label: 'Management',
                items: [
                    { label: 'Email Process', icon: 'pi pi-fw pi-id-card', routerLink: ['/emailprocess/emailprocesslist'] }
                ]
            }
        ];
    }
}
