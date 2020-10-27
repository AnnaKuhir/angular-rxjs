import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, interval } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable()
export class CheckForUpdateService {
  constructor(appRef: ApplicationRef, updates: SwUpdate) {
    const appIsStable$ = appRef.isStable.pipe(
      first((isStable) => isStable === true)
    );
    const everyHour$ = interval(1 * 60 * 60 * 1000);
    const everySixHoursOnceAppIsStable$ = concat(appIsStable$, everyHour$);
    everySixHoursOnceAppIsStable$.subscribe(() => updates.checkForUpdate());
  }
}
