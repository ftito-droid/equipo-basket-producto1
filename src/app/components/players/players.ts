import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PLAYERS } from '../../data/players';
import { FilterPlayersPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, FilterPlayersPipe],
  templateUrl: './players.html',
  styleUrls: ['./players.css']

})
export class PlayersComponent {
  players = PLAYERS;
  search: string = '';
}
