import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Langage } from '@app/components/langage/store/model/langage';
import { LangageServiceHttp } from '@app/components/langage/store/service/langage.service';

@Component({
  selector: 'app-pop-up-add',
  templateUrl: './pop-up-add.component.html',
  styleUrls: ['./pop-up-add.component.scss'],
})
export class PopUpAddComponent implements OnInit {
  form:any={
    name:null,
    description:null,
    
  }
  isSuccessful=false;
  isAddIsFailed=false;
  errorMessage = "";
  valide :boolean = true ;
  name: string;
  description :string;
  constructor(private langageServiceHttp: LangageServiceHttp, public dialogRef: MatDialogRef<PopUpAddComponent>) {}

  ngOnInit(): void {}
  save(){
    console.log(this.name);
    let langage = new Langage(null, this.name);
    langage.name=this.form.name;
    console.log(langage);
    this.langageServiceHttp.addDomaine(langage).subscribe(
      data=>{
        
        this.isSuccessful=true;
        this.isAddIsFailed=false;
        this.onNoClick();
      },
      err =>{
        this.errorMessage=err.error.message;
        this.isAddIsFailed=true;
      }
      
    );
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  
}
