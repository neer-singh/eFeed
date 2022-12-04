import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class ApiService {
  isLoading = new BehaviorSubject<boolean>(false)
  constructor(private http: HttpClient, public fireStore: AngularFirestore) { }
  validatePhone(number: string) {
    return this.http.get(`${environment.PHONE_API}v1/?api_key=${environment.PHONE_API_KEY}&phone=+91${number}`)
  }
  validatePinCode(pincode: string) {
    return this.http.get(`${environment.PINCODE_API}${pincode}`)
  }
  handleLoading(e: boolean) {
    this.isLoading.next(e)
  }
  postForm(data: any) {
    return this.fireStore.collection('Employee').add(data)
  }
  getWeatherData() {
    return this.http.get(`${environment.WEATHER_API}q=mumbai&appid=${environment.WEATHER_API_KEY}`)
  }
}
