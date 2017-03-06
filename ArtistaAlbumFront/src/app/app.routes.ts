import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {ArtistaComponent} from "./artista/artista.component";
import {AlbumComponent} from "./album/album.component";


export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'artista', component: ArtistaComponent},
  {path: 'artista/:idArtista/album', component: AlbumComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
