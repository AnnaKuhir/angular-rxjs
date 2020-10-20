import { Component, OnInit, Output } from '@angular/core';
import { range, Subject } from 'rxjs';
import { catchError, filter, flatMap, map, takeUntil, tap } from 'rxjs/operators';
import { PhotoItem } from '../shared/models/photo-item';
import { ApiDataService } from '../shared/services/api-data.service';

@Component({
  selector: 'app-photos-section',
  templateUrl: './photos-section.component.html',
  styleUrls: ['./photos-section.component.scss']
})
export class PhotosSectionComponent implements OnInit {
  @Output() photos: PhotoItem[];
  photosArray: PhotoItem[];

  private destroy$: Subject<void> = new Subject<void>();
  
  constructor(private apiService: ApiDataService) { }

  ngOnInit(): void {
    this.apiService.getPhotoItem()
    .pipe(
      takeUntil(this.destroy$),
      map(photosArray => photosArray.filter(proj => proj.albumId === 1)),
      tap((photosArray: PhotoItem[]) => {
        if(photosArray) {
          this.photosArray = photosArray;
          this.photos = [...this.photosArray]
        }
      }),
      catchError(error => {
        throw 'Error in source. Details: ' + error;
      })
    )
    .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
