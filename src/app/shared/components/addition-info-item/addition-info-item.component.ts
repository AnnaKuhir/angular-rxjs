import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PhotoItem } from '../../models/photo-item';

@Component({
  selector: 'app-addition-info-item',
  templateUrl: './addition-info-item.component.html',
  styleUrls: ['./addition-info-item.component.scss'],
})
export class AdditionInfoItemComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public photo: PhotoItem,
  ) {}

  ngOnInit(): void {}
}
