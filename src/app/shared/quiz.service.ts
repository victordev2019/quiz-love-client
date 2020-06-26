import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuizService{

  

  clientId: string = `${environment.clientID}`;
  clientSecret: string = `${environment.clientSecret}`;
  private baseUrl = 'https://mkt.malutanizaki.com.br/form/submit?formId=2';

  constructor(private http: HttpClient) { 
    
    
  }



  formulario(data: any): Observable<any> {
   const headers = {
     'Authorization': 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`),
     'Content-Type': 'multipart/form-data'
   }
   return this.http.post(this.baseUrl,data,{headers},)
  
}

  }
