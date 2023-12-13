import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal} from "@angular/core";
import {ColorsService} from "./colors.service";
import {ChangeDetection} from "@angular/cli/lib/config/workspace-schema";

@Component({
  standalone: true,
  selector: 'grand-child',
  template: `
      <div class="card" [style.background]="changeBackground()">
          <div class="card-header">
              <h1>GrandChild component: {{counter()}}</h1>
              <button (click)="increment()">Increment</button>
          </div>
      </div>
      `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandChildComponent {
  private colorsService = inject(ColorsService);

  counter = signal(0);

  changeBackground(){
    return  this.colorsService.getRandomColor();
  }

  increment(){
    this.counter.update(v => v + 1);
  }
}
