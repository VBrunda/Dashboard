import { computed, Injectable, signal } from '@angular/core';
import { Widget } from '../models/dashboard.model';
import { SubscribersComponent } from '../pages/dashboard/widgets/subscribers/subscribers.component';
import { ViewsComponent } from '../pages/dashboard/widgets/views/views.component';
import { RevenueComponent } from '../pages/dashboard/widgets/revenue.component';
import { WatchTimeComponent } from '../pages/dashboard/widgets/watch-time.component';
import { AnalyticsComponent } from '../pages/dashboard/widgets/analytics.component';
import { ViewAnalyticsComponent } from '../pages/dashboard/widgets/view-analytics.component';

@Injectable()
export class DashboardService {
  widgets = signal<Widget[]>([
    {
      id: 1,
      label: 'Subscribers',
      content: SubscribersComponent
    },
    {
      id: 2,
      label: 'Views',
      content: ViewsComponent
    },
    {
      id: 3,
      label: 'Watch-time',
      content: WatchTimeComponent
    },
    {
      id: 4,
      label: 'Revenue',
      content: RevenueComponent
    },
    {
      id: 5,
      label: 'Revenue-Analytics',
      content: AnalyticsComponent
    },
    {
      id: 6,
      label: 'View-Analytics',
      content: ViewAnalyticsComponent
    }
  ]);

  addedWidgets = signal<Widget[]>([{
    id: 1,
    label: 'Subscribers',
    content: SubscribersComponent,
    rows: 2,
    columns: 1,
    bgColor: '#737373',
    color: '#673ab7' 
  },
  {
    id: 2,
    label: 'Views',
    content: ViewsComponent
  },
  {
    id: 5,
    label: 'Revenue-Analytics',
    content: AnalyticsComponent,
    rows: 2,
    columns: 2
  },
  {
    id: 6,
    label: 'View-Analytics',
    content: ViewAnalyticsComponent,
    rows: 2,
    columns: 2
  }
]);
  widgetsToAdd = computed(() => {
    const addedIds = this.addedWidgets().map(w => w.id);
    return this.widgets().filter(w => !addedIds.includes(w.id));
  });

  constructor() { }

  addWidget(w: Widget){
    this.addedWidgets.set([...this.addedWidgets(), {...w}]);
  }

  updateWidgetSize(id: number, widget: Partial<Widget>){
    debugger;
    const index = this.addedWidgets().findIndex(w => w.id === id);
    if(index != -1){
      const newWidget = [...this.addedWidgets()];
      newWidget[index] = {...newWidget[index], ...widget};
      this.addedWidgets.set(newWidget);
    }
  }

  moveWidgetRight(id: number) {
    const index = this.addedWidgets().findIndex(w => w.id === id);
    if(index === this.addedWidgets().length - 1) return;
    const newWidgets = [...this.addedWidgets()];
    [newWidgets[index], newWidgets[index+1]] = [{...newWidgets[index+1]}, {...newWidgets[index]}];

    this.addedWidgets.set(newWidgets);
  }

  moveWidgetLeft(id: number) {
    const index = this.addedWidgets().findIndex(w => w.id === id);
    if(index === 0) return;
    const newWidgets = [...this.addedWidgets()];
    [ newWidgets[index-1], newWidgets[index]] = [{...newWidgets[index]}, {...newWidgets[index-1]}];

    this.addedWidgets.set(newWidgets);
  }

  deleteWidget(id: number){
    this.addedWidgets.set(this.addedWidgets().filter(w => w.id != id));
  }
}
