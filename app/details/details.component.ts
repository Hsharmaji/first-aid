import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  username:string='';
  email:string='';
  mobile:string='';
  age:number | undefined;
  address:string='';
  gender:string='';
  dob:string='';

  constructor(private router: Router) {}
  tohealth(){
    if (this.username && this.email&&this.mobile&&this.age&&this.address&&this.gender&& this.dob) {
    setTimeout( () => {      
      this.router.navigate(['/healthprofile']);
 }, 100 );
}else{
  alert("Please fill all the fields.")
}
  }
}
