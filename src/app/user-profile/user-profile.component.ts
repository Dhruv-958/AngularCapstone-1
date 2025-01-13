import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  details = {
    username : "John Doe",
    email : "john@gmail.com",
    contact : "124943832",
    height : "176 cm",
    weight : "82 kgs",
    qualification : "High school diploma or GED",
    address : "424 Madven Convocation, New York"
  }
  imgSrc = '../../assets/Default-PFP.jpg'
}
