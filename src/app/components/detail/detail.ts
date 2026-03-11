import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { PLAYERS } from '../../data/players';
import { MediaComponent } from '../media/media';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, MediaComponent, RouterLink, RouterModule],
  templateUrl: './detail.html',
  styleUrls: ['./detail.css']
})
export class DetailComponent {
  player: any;

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.player = PLAYERS.find(p => p.id === id);

    document.documentElement.style.setProperty('--color1', this.player.color1);
    document.documentElement.style.setProperty('--color2', this.player.color2);
  }
}
