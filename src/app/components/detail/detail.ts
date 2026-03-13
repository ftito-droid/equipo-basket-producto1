import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PLAYERS } from '../../data/players';
import { MediaComponent } from '../media/media';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, MediaComponent],
  templateUrl: './detail.html',
  styleUrls: ['./detail.css']
})
export class DetailComponent {
  player: any = null;

  constructor(private route: ActivatedRoute) {

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.player = PLAYERS.find(p => p.id === id);

      if (this.player) {
        document.documentElement.style.setProperty('--color1', this.player.color1);
        document.documentElement.style.setProperty('--color2', this.player.color2);
      }
    });
  }
}
