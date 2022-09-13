import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@app/components/header/component/header.component';
import { LoginService } from '@app/core/authentication/store/services/login.service';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [LoginService],
  bootstrap: [HeaderComponent],
})
export class HeaderModule {}
