import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ColorsService } from './colors.service';
import { CounterService } from './counter.service';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'grand-child',
  template: `
    <div class="card" [style.background]="changeBackground()">
      <div class="card-header">
        <h1>GrandChild component: local counter {{ counter() }}</h1>
        <div style="margin-top: 1rem;">
          <button (click)="incrementSignal()">Increment Signal</button>
        </div>
        <div>
          <span>Observable counter: {{ counterService.counter$ | async }}</span>
        </div>
        <div>
          <span>Signal counter: {{ counterService.counter() }}</span>
        </div>
        <button (click)="increment()">Increment</button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe],
})
export class GrandChildComponent {
  incrementSignal() {
    this.counterService.incrementSignal();
  }
  private colorsService = inject(ColorsService);

  counter = signal(0);

  changeBackground() {
    return this.colorsService.getRandomColor();
  }

  increment() {
    this.counter.update((v) => v + 1);
  }

  public counterService = inject(CounterService);
}
