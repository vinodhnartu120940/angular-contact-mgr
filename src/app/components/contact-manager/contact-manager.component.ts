import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {

  getContacts: any = "";
  firstName: any;


  constructor(public service: ContactService) {



  }
  getCont() {
    this.service.getContact().subscribe(result => {
      this.getContacts = result;
      console.log(result)
    })
  }




  ngOnInit(): void {
    this.getCont();

  }
  deleteAccount(id: any) {
    this.service.deleteContact(id).subscribe(result => {
      // console.log("deleted successfully");
      // this.getCont();
      this.ngOnInit();

    })

  }
  searchContact() {
    this.getContacts = this.getContacts.filter((res: any) => {

      return res.firstName.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());

    });
    console.log(this.firstName)
  }




}
