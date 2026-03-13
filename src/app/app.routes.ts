import { Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail';
import { MediaComponent } from './components/media/media';

export const routes: Routes = [
  { path: 'detail/:id', component: DetailComponent },
  { path: 'media/:id', component: MediaComponent },

  // Ruta por defecto: NO carga ningún jugador
  { path: '', component: DetailComponent }
];
