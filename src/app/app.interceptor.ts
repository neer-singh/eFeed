import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { ApiService } from "./services/api.service";


@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private api: ApiService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(event => {
      // this.api.isLoading.next(true)
      if (event.type == HttpEventType.Response) {
        if (event.status == 200) {
          // this.api.handleLoading(false)
        }
      }
    }))
  }
}
