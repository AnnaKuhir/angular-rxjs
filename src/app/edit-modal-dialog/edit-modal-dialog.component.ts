import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Post } from '../shared/models/post';
import { ApiDataService } from '../shared/services/api-data.service';
@Component({
  selector: 'app-edit-modal-dialog',
  templateUrl: './edit-modal-dialog.component.html',
  styleUrls: ['./edit-modal-dialog.component.scss']
})
export class EditModalDialogComponent implements OnInit {
  public formGroup: FormGroup;
  
  private destroy$: Subject<void> = new Subject<void>();
  constructor(
    @Inject(MAT_DIALOG_DATA) public postInfo: Post,  
    private appService: ApiDataService,
    private dialigRef: MatDialogRef<EditModalDialogComponent>,
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup (
      {
        postTitle: new FormControl(this.postInfo.title, [Validators.required]),
        postDesc: new FormControl(this.postInfo.body, [Validators.required])
      }
    );
  }

  save(){
    this.postInfo.title = this.formGroup.controls.postTitle.value;
    this.postInfo.body = this.formGroup.controls.postDesc.value;
    this.appService.updatePost(this.postInfo, this.postInfo.id).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.dialigRef.close();
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
