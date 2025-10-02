import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, ConfirmDialog],
    providers: [ConfirmationService],
    template: `
        <p-confirmdialog [style]="{ width: '50vw' }"/>
        <router-outlet></router-outlet>`
})
export class AppComponent {
    constructor(private router : Router) {
        const currentUrl = window.location.pathname;
        if (currentUrl !== '/') {
            this.router.navigate(['/']);
        }
    }
}
