import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  constructor() { }

  menu: any[] = [
    {
      "name": "Teeth Whitening",
      "image": 'https://www.deardoctor.com/images/website-content/teeth-whitening/before-after-teeth-whitening.jpg',
      
    },
    {
      "name": "Dental Implant",
      "image": 'https://images.medicinenet.com/images/article/main_image/dental-implants.jpg'
    },
    {
      "name": "Orthodontic Treatment",
      "image": 'https://www.tekportal.net/wp-content/uploads/2018/11/dental-orthopedics.jpg'
    },
    {
      "name": "Dentures",
      "image": 'https://www.laserandholisticdental.com/wp-content/uploads/2016/01/dentures.jpg'
    },
    {
      "name": "Dental Surgery",
      "image": 'https://everythinglearner.com/wp-content/uploads/2018/01/dental-surgery-1.jpg'
    },
    {
      "name": "Dental Cleanings",
      "image": 'https://semiahmoodental.b-cdn.net/wp-content/uploads/2020/06/Untitled-design-18.png'
    },
  ];
  
  ngOnInit() {
  }

}
