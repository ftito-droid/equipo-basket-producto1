import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './media.html',
  styleUrl: './media.css'
})
export class MediaComponent {
  @Input() videoUrl!: string;
}
