import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  isLoading: boolean = false
  constructor(private api: ApiService) {
    this.api.isLoading.subscribe(
      (e) => {
        this.isLoading = e


      })
  }
  ngOnInit(): void {

  }

}
