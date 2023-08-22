import { Component } from '@angular/core';

@Component({
  selector: 'app-cabeza',
  templateUrl: './cabeza.component.html',
  styleUrls: ['./cabeza.component.css']
})
export class CabezaComponent {
  mobileMenuWidth: string = '0';

  openNav() {
    this.mobileMenuWidth = '100%';
    console.log("metodo open");
  }

  closeNav() {
    this.mobileMenuWidth = '0';
    console.log("metodo close");
  }
}
