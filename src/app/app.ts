import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayersComponent } from './components/players/players';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayersComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
