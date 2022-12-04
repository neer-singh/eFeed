import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  isLoading = new BehaviorSubject<boolean>(false)
  constructor(private http: HttpClient, public fireStore: AngularFirestore) { }
  validatePhone(number: string) {
    return this.http.get(`https://phonevalidation.abstractapi.com/v1/?api_key=3f0680d1d52b411e805642106b3a13d6&phone=+91${number}`)
  }
  validatePinCode(pincode: string) {
    return this.http.get(`https://api.postalpincode.in/pincode/${pincode}`)
  }
  handleLoading(e: boolean) {
    this.isLoading.next(e)
  }
  postForm(data: any) {
    return this.fireStore.collection('Employee').add(data)
  }
}
