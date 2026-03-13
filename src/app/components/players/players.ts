import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PLAYERS } from '../../data/players';
import { FilterPlayersPipe } from '../../pipes/filterPlayers.pipe';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, FilterPlayersPipe],
  templateUrl: './players.html',
  styleUrls: ['./players.css']
})
export class PlayersComponent {
  players = PLAYERS;

  search = '';
  positionFilter = '';
  ageFilter: number | null = null;
  teamFilter = '';
}
