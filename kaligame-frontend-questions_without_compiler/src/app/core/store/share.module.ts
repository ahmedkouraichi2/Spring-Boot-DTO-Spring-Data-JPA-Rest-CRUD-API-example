import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardServiceHttp } from '@app/components/dashboard/store/services/dashboard.service.http';
import { DashboardComponent } from '@app/components/dashboard/component/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { OpenDialogComponent } from '@app/components/dashboard/component/open-dialog/open-dialog.component';
import { HeaderComponent } from '@app/components/header/component/header.component';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [DashboardComponent],
  imports: [FormsModule, ReactiveFormsModule, MatCardModule, MatGridListModule, MatSliderModule, MatDialogModule,MatRadioModule],
  exports: [RouterModule,MatCardModule,MatRadioModule],

  providers: [
    DashboardServiceHttp,
    DatePipe,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
  ],
  entryComponents: [OpenDialogComponent],
})
export class ShareModule {}
