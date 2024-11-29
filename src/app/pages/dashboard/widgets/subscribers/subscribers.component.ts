import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-subscribers',
  standalone: true,
  imports: [MatIcon],
  template: `
    <div class="row my-8">
      <p class="stat">25,020</p>
      <mat-icon class="text-green">check</mat-icon>
    </div>
    <div class="text-dim-gray stat-subtext">
      <span class="text-green">+502</span> in last 48hrs
    </div>
  `,
  styles: ``
})
export class SubscribersComponent {

}
