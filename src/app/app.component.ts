import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalDoisComponent} from "./modais/modal-dois/modal-dois.component";
import {ModalUmComponent} from "./modais/modal-um/modal-um.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-modal';

  constructor(public dialog: MatDialog) {
  }

  public modalUm() {
    this.dialog.open(ModalUmComponent);
  }

  public modalDois() {
    this.dialog.open(ModalDoisComponent);
  }
}
