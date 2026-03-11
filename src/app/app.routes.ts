import { Routes } from '@angular/router';
import { PlayersComponent } from './components/players/players';
import { DetailComponent } from './components/detail/detail';
import { MediaComponent } from './components/media/media';

export const routes: Routes = [
  { path: '', component: PlayersComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'media/:id', component: MediaComponent }
];
