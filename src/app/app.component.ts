import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Muhammad Zein';
  panjang: Number = 10;
  lebar: Number = 10;
  isTeaBreakTime: Boolean = true;

  handleBlur(event: any) {
    this.title = event.target.value;
    console.log(event.target.value);
  }
}
