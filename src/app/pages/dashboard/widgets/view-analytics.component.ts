import { Component, ElementRef, viewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-view-analytics',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <div class="chart-container">
      <canvas #chart></canvas>  
      <button mat-raised-button class="mt-16" routerLink="/analytics">Go to channel analytics</button>
    </div>
  `,
  styles: `
    .chart-container{
      height: calc(90% - 50px);
      width: 100%;
      overflow: auto;
    }
  `
})
export class ViewAnalyticsComponent {
  chart = viewChild.required<ElementRef>('chart');

  ngOnInit() {
    new Chart(this.chart().nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Green', 'Yellow', 'Purple'],
        datasets: [
          {
            data: [20, 30, 50],
            backgroundColor: ['#008000', '#FFFF00', '#800080']
          }
        ]
      },
      options: {
        responsive: true,
      }
    })
  }
}
