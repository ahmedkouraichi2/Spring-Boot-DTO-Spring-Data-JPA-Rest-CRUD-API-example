import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '@app/app.component';
import { EmailComponent } from '@app/components/email/component/email.component';
import { EmailServiceHttp } from '@app/components/email/store/services/email.service.http';
import { HeaderModule } from '@app/components/header/header.module';
import { ShareModule } from '@app/core/store/share.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MatRadioModule} from '@angular/material/radio';
import { PopConfirmEmailComponent } from './component/pop-confirm-email/pop-confirm-email.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [EmailComponent, PopConfirmEmailComponent],
  imports: [
    FormsModule,
    ShareModule,
    HeaderModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSelectModule,
    CommonModule,
    BrowserModule,
    MatRadioModule,
    MatIconModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [EmailServiceHttp],
  bootstrap: [EmailComponent],
  exports: [EmailComponent],
})
export class EmailModule {}
