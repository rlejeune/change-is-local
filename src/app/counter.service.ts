import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private internalCounterSignal = signal(0);
  private internalCounterSubject = new BehaviorSubject<number>(0);

  public counter = this.internalCounterSignal.asReadonly();
  public counter$ = this.internalCounterSubject.asObservable();

  public incrementSignal() {
    this.internalCounterSignal.update((v) => v + 1);
  }

  public incrementObs() {
    this.internalCounterSubject.next(this.internalCounterSubject.value + 1);
  }
}
