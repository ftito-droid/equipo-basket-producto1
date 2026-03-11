import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media.html',
  styleUrl: './media.css'
})
export class MediaComponent {

  @Input() videoUrl!: string;

  @ViewChild('player', { static: false }) player!: ElementRef<HTMLVideoElement>;

  play() {
    this.player.nativeElement.play();
  }

  pause() {
    this.player.nativeElement.pause();
  }

  stop() {
    const vid = this.player.nativeElement;
    vid.pause();
    vid.currentTime = 0;
  }

  mute() {
    const vid = this.player.nativeElement;
    vid.muted = !vid.muted;
  }

  restart() {
    const vid = this.player.nativeElement;
    vid.currentTime = 0;
    vid.play();
  }
}
