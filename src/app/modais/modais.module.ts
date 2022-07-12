import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from "@angular/material/dialog";
import { ModalCascaComponent } from './modal-casca/modal-casca.component';
import { ModalUmComponent } from './modal-um/modal-um.component';
import { ModalDoisComponent } from './modal-dois/modal-dois.component';



@NgModule({
  declarations: [
    ModalCascaComponent,
    ModalUmComponent,
    ModalDoisComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
  ]
})
export class ModaisModule { }
