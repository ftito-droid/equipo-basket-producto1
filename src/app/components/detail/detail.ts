import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.html',
  styleUrls: ['./detail.css']
})
export class DetailComponent implements OnChanges {
  @Input() selectedPlayer: any = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedPlayer'] && this.selectedPlayer) {
      document.documentElement.style.setProperty('--color1', this.selectedPlayer.color1);
      document.documentElement.style.setProperty('--color2', this.selectedPlayer.color2);
    }
  }
}