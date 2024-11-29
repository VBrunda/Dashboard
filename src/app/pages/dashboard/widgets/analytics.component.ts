import { Component, ElementRef, viewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <div class="chart-container">
  <canvas #chart></canvas>
</div>

<button mat-raised-button class="mt-16" routerLink="/analytics">Go to channel analytics</button>
  `,
  styles: `
    .chart-container{
      height: calc(90% - 50px);
      width: 100%;
      overflow: auto;
    }
  `
})
export class AnalyticsComponent {
  chart = viewChild.required<ElementRef>('chart');

  ngOnInit() {
    new Chart(this.chart().nativeElement, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            data: [65, 59, 80, 81, 56, 55, 40],
            label: 'Monthly Sales',
            backgroundColor: '#42A5F5',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            // fill: 'start'
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        elements: {
          line: {
            tension: 0.4,
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Months'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Sales'
            },
            beginAtZero: true
          }
        }
      }
    })
  }

}

