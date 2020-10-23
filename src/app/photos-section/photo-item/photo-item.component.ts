import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PhotoItem } from 'src/app/shared/models/photo-item';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss'],
})
export class PhotoItemComponent implements OnInit {
  @Input() photo: PhotoItem;
  @Output() openModal: EventEmitter<PhotoItem> = new EventEmitter<PhotoItem>();
  photoUrl: string;
  
  constructor() {}

  ngOnInit(): void {
    this.photoUrl = this.photo.thumbnailUrl;
  }

  openDialog() {
    this.openModal.emit(this.photo);
  }
}
