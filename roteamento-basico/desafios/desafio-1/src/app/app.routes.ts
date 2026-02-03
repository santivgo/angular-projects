import { Routes } from '@angular/router';
import { Sobre } from './components/sobre/sobre';
import { Contato } from './components/contato/contato';
import { Info } from './components/info/info';
import { Logout } from './components/logout/logout';
import { App } from './app';

export const routes: Routes = [
    { path: 'sobre', loadComponent: () => import('./components/sobre/sobre').then((m) => m.Sobre) },
    { path: 'contatos', loadComponent: () => import('./components/contato/contato').then((m) => m.Contato) },
    { path: 'info', loadComponent: () => import('./components/info/info').then((m) => m.Info) },
    { path: 'sair', loadComponent: () => import('./components/logout/logout').then((m) => m.Logout) }
];
