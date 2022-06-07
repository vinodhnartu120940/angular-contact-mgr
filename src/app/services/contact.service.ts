import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url: string = "http://localhost:9000"

  constructor(public http: HttpClient) { }

  getContact() {
    //create a service for fetching contacts 

    // let dataUrl: string = `${this.url}/contacts`
    return this.http.get(`${this.url}/contacts`)

  }
  // viewContact() {
  //   return this.http.get(`${this.url}/contacts/${this.
  //     id}`)
  // }

  getOneContact(id: any) {
    return this.http.get(`${this.url}/contacts/` + id)

  }
  // editContact(id: any) {
  //  return this.http.post(`${this.url}/contacts/` + id,)

  // }
  addContact(data: any) {
    return this.http.post(`${this.url}/contacts`, data)
  }
  updateContact(id: any, data: any) {
    return this.http.put(`${this.url}/contacts/` + id, data)
  }

  deleteContact(id: any) {
    return this.http.delete(`${this.url}/contacts/` + id)

  }


}
