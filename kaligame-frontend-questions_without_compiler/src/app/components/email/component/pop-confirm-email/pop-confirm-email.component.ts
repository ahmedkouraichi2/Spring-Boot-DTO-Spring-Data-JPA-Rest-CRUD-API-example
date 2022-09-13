import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-confirm-email',
  templateUrl: './pop-confirm-email.component.html',
  styleUrls: ['./pop-confirm-email.component.scss']
})
export class PopConfirmEmailComponent implements OnInit {
  nom : string ;
  constructor(
    public dialogRef: MatDialogRef<PopConfirmEmailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  ngOnInit(): void {
    console.log("dataAhmed",this.data);
    this.nom = this.data;
  }


}
