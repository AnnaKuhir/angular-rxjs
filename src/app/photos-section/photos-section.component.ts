import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { range, Subject } from 'rxjs';
import {
  catchError,
  delay,
  filter,
  flatMap,
  map,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { AdditionInfoItemComponent } from '../shared/components/addition-info-item/addition-info-item.component';
import { PhotoItem } from '../shared/models/photo-item';
import { ApiDataService } from '../shared/services/api-data.service';

@Component({
  selector: 'app-photos-section',
  templateUrl: './photos-section.component.html',
  styleUrls: ['./photos-section.component.scss'],
})
export class PhotosSectionComponent implements OnInit {
  @Output() photos: PhotoItem[];
  photosArray: PhotoItem[];
  isLoading: boolean;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private apiService: ApiDataService, private dialog: MatDialog) {
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.apiService
      .getPhotos()
      .pipe(
        delay(1000),
        takeUntil(this.destroy$),
        map((photosArray) => photosArray.filter((proj) => proj.albumId === 1)),
        catchError((error) => {
          throw 'Error in source. Details: ' + error;
        })
      )
      .subscribe((photosArray: PhotoItem[]) => {
        if (photosArray) {
          this.photosArray = photosArray;
          this.photos = [...this.photosArray];
          this.isLoading = false;
        }
      });
  }

  openModal(photo: PhotoItem) {
    this.dialog.open(AdditionInfoItemComponent, {
      data: photo,
      width: '30vw',
      height: '100vh',
      position: {
        top: '0',
        right: '0',
      },
      scrollStrategy: new NoopScrollStrategy()
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
