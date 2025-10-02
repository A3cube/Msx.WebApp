import { Routes } from '@angular/router';
import { EmailProcessList } from './email-process-list/email-process-list';


export default [
    { path: 'emailprocesslist', data: { breadcrumb: 'Email Process' }, component: EmailProcessList },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
