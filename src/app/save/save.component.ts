import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  inject,
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { StorageService } from '../storage.service';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-save-dialog',
  templateUrl: 'save-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class SaveDialogComponent {
  dialogRef = inject<MatDialogRef<SaveDialogComponent>>(MatDialogRef);
  storageService = inject(StorageService);
  data = inject<DialogData>(MAT_DIALOG_DATA);

  onCancel(): void {
    this.dialogRef.close();
  }
  onSave(): void {
    this.dialogRef.close(this.data);
  }
}

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class SaveComponent {
  dialog = inject(MatDialog);
  storageService = inject(StorageService);

  @Input() path = '';
  @Input() name = '';
  @Output() nameChange = new EventEmitter<string>();

  openDialog(): void {
    let name = this.name;
    if (!name) {
      let i = 1;
      name = 'My path';
      while (this.storageService.hasPath(name)) {
        name = `My path ${i}`;
        i++;
      }
    }

    const dialogRef = this.dialog.open(SaveDialogComponent, {
      width: '350px',
      panelClass: 'dialog',
      data: { name },
    });

    dialogRef.afterClosed().subscribe((result: DialogData) => {
      if (result) {
        this.storageService.addPath(result.name, this.path);
        this.name = result.name;
        this.nameChange.emit(this.name);
      }
    });
  }
}
