import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(private service: ContactService) { }

  saveContactValues(data: any) {
    this.service.addContact(data).subscribe(result => {
      console.log(result)
    })



  }

  ngOnInit(): void {
  }

}
