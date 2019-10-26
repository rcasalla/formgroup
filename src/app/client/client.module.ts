import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { ClientComponent } from './client-create/client.component';
import { ClientService } from './client.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ClientComponent],
  exports:[ClientComponent],
  providers: [ClientService]
})
export class ClientModule { }
