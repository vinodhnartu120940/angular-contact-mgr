import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  id: any;
  data:any;

  constructor(private router: ActivatedRoute,
    private service: ContactService
  ) {


  }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.getDataId()


  }

  getDataId() {

    this.service.getOneContact(this.id).subscribe(result => {
    this.data=result
    })
  }


}
