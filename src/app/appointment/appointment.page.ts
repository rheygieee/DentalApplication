import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {

  constructor() { }

  public form = {
    fn: "",
    pn: "",
    ea: "",
    ac: "",
  }

  btnClicked(){
    alert('We will call you as soon as possible! Thank you! **Click "BACK TO HOME" to book another appointment**')
  }
  ngOnInit() {
  }
  print() {
    console.log(this.form)
  }

}
