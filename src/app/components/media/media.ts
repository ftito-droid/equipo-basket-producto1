import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media.html',
  styleUrls: ['./media.css']
})
export class MediaComponent implements OnChanges {

  @Input() videoUrl: string = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['videoUrl']) {
      // Forzar recarga del video
      const videoElement = document.getElementById('player') as HTMLVideoElement;
      if (videoElement) {
        videoElement.load();
      }
    }
  }
}
