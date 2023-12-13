import {ChangeDetectionStrategy, Component, inject} from "@angular/core";

import {GrandChildComponent} from "./grand-child.component";
import {ColorsService} from "./colors.service";

@Component({
  standalone: true,
  selector: 'child-two',
  template: `
          <div class="card" [style.background]="changeBackground()">
          <div class="card-header">
              <h1>Child two component</h1>
          </div>
          <div class="card-content">
              <grand-child/>
          </div>
      </div>
      `,
  imports: [GrandChildComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildTwoComponent {
  private colorsService = inject(ColorsService);

  changeBackground(){
    return  this.colorsService.getRandomColor();
  }
}
