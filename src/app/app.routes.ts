import { Routes } from '@angular/router';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';

import { UserComponent } from './user/user.component';


export const appRoutes: Routes = [
  { path: '', component: BemVindoComponent },
  { path: 'user', component: UserComponent },
];
