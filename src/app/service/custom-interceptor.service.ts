import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomInterceptorService implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let pagination, rating;
    if (req.url.includes("https://api.themoviedb.org/3/movie/top_rated&page=")) {
      let url = req.url.split("")
      let num = url[url.length - 1]
      pagination = req.clone({
        url: "https://api.themoviedb.org/3/movie/top_rated",
        params: req.params.set('api_key', 'dbeb8a7c94c70b10030a2bea613ec0df').set('page', num)
      })
    }
    if (req.url.includes("rating")) {
      rating = req.clone({
        params: req.params.set('api_key', 'dbeb8a7c94c70b10030a2bea613ec0df').set('session_id', '816a2446c9412128ae6b4cf21a251eab7f027531')
      })
    }
    let clone = req.clone({
      params: req.params.set('api_key', 'dbeb8a7c94c70b10030a2bea613ec0df')
    });
    if (pagination) {
      return next.handle(pagination)
    } else if (rating) {
      return next.handle(rating)
    } else {
      return next.handle(clone)
    }
  }
}
