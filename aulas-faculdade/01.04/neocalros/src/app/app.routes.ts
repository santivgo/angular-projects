import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TesteComponent } from './components/teste/teste.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'teste', component: TesteComponent},
    {path: '**', component: ErrorComponent},

];
