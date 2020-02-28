import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
   <div class="card">
     <div class="content">
       <div class="title">{{title}}</div>
       <ng-content></ng-content>
     </div>
  </div>
  `,
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string;
}
