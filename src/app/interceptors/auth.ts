import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequest, HttpResponse, HttpErrorResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router} from '@angular/router';
import { environment } from './../../environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class Auth implements HttpInterceptor{
    constructor( private cookieService: CookieService,  private router: Router){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authReq = req.clone({
            setHeaders:{
                Authorization: 'Client-ID '+ environment.access_key,
                Accept: 'application/json;odata=verbose',
                'Accept-Version': 'v1'
            }
        });
        return next.handle(authReq).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    return event;
                }
            })
        )
    }

}
