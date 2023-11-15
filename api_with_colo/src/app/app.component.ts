import { Component } from '@angular/core';
import { ApiserviceService } from './apiservice.service';
import { Observable } from 'rxjs';
import { Daum, Root } from './models/yugi.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  obsyu!:Observable<Root>
  yulist!:Daum[]

  title = 'api_with_colo';


  constructor(private apiservice:ApiserviceService){
    this.obsyu=this.apiservice.yugilist()
    this.obsyu.subscribe(this.ris)
  }

  ris = (data:any)=>{
    this.yulist=data.data
  }

}



