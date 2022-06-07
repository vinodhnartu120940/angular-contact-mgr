import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { fromEventPattern } from 'rxjs';

import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  id: any;
  data: any;
  updatedData: any;
  constructor(private router: ActivatedRoute,
    private server: ContactService) { }
  contactForm = new FormGroup({
    name: new FormControl(),
    photo: new FormControl(),
    email: new FormControl(),
    mobile: new FormControl(),
    company: new FormControl(),
    title: new FormControl(),
    groupId: new FormControl(),
  })

  ngOnInit(): void {
    this.id = this.router.snapshot.params["id"]
    this.getContact();

  }

  getContact() {
    this.server.getOneContact(this.id).subscribe(result => {
      this.data = result;
      this.contactForm = new FormGroup({
        name: new FormControl(this.data.name),
        photo: new FormControl(this.data.photo),
        email: new FormControl(this.data.email),
        mobile: new FormControl(this.data.mobile),
        company: new FormControl(this.data.company),
        title: new FormControl(this.data.title),
        groupId: new FormControl(),
      })

    })

  }
  editedData() {
    this.updatedData = this.contactForm.value;
    this.server.updateContact(this.id, this.updatedData).subscribe(result => {
      console.log("updated successfully")
    })
  }


  // updateContacts(data:any){
  //   this.server.updateContact(this.id,data).subscribe(result=>{
  //     console.log(result)
  //   })

  // }





}
