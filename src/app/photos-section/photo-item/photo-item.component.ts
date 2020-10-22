import { Component, Input, OnInit } from '@angular/core';
import { PhotoItem } from 'src/app/shared/models/photo-item';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss'],
})
export class PhotoItemComponent implements OnInit {
  @Input() photo: PhotoItem;
  photoUrl: string;
  constructor() {}

  ngOnInit(): void {
    this.photoUrl = this.photo.thumbnailUrl;
  }
}
