import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditModalDialogComponent } from '../edit-modal-dialog/edit-modal-dialog.component';
import { Post } from '../shared/models/post';

@Component({
  selector: 'app-edit-btn',
  templateUrl: './edit-btn.component.html',
  styleUrls: ['./edit-btn.component.scss'],
})
export class EditBtnComponent implements OnInit {
  @Input() postInfo: Post;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onEditBtnClick(): void {
    this.dialog.open(EditModalDialogComponent, {
      height: '400px',
      width: '600px',
      data: this.postInfo,
    });
  }
}
