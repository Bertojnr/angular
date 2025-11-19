import { Routes } from '@angular/router';
import { Mastercomponent } from './mastercomponent/mastercomponent';
import { Rolescomponent } from './rolescomponent/rolescomponent';
import { Designationcomponent } from './designationcomponent/designationcomponent';
import { Livingcomponent } from './livingcomponent/livingcomponent';
import { Addrolescomponent } from './addrolescomponent/addrolescomponent';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'master',
        pathMatch: 'full'
    },
    {
        path: 'master',
        component: Mastercomponent
    },
    {
        path: 'roles',
        component: Rolescomponent
    },
    {
        path: 'designation',
        component: Designationcomponent
    },
    {
        path: 'living',
        component: Livingcomponent
    },
     {
        path: 'addroles',
        component: Addrolescomponent
    }
];
