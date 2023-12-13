import {Injectable, signal} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private internalCounter = signal(0);
  public counter = this.internalCounter.asReadonly();

  public increment(){
    this.internalCounter.update(v => v + 1);
  }
}
