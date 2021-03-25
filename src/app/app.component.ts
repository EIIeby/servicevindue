import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'servicevindue';
  nextwednesday = new Date();
  
  //nextwednesday.setDate(nextwednesday.getDate() + (1 + 7 - nextwednesday.getDay()) % 7);
  //console.log(nextwednesday);
}
