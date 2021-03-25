import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicevindue',
  templateUrl: './servicevindue.component.html',
  styleUrls: ['./servicevindue.component.sass']
})
export class ServicevindueComponent implements OnInit {

  nextwednesday = new Date();
  secondnextwednesday = new Date();
  packingdate = new Date();


  constructor() { 
    this.getNewDate()
  }

  ngOnInit(): void {
  }

  getNewDate(): void{
    this.nextwednesday.setDate(this.nextwednesday.getDate() + (3 + 7   - this.nextwednesday.getDay()));
    this.packingdate.setDate(this.packingdate.getDate() +(2 + 7 - this.packingdate.getDay()));
    this.secondnextwednesday.setDate(this.secondnextwednesday.getDate() + (3 + 7 + 7  - this.secondnextwednesday.getDay()));
    //console.log(this.nextwednesday);
  }
  

}
