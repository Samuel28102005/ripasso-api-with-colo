import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Daum, Root } from '../models/yugi.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patty',
  templateUrl: './patty.component.html',
  styleUrls: ['./patty.component.css']
})
export class PattyComponent {
  prodotto !:string | null  ;
  obsProd!:Observable<Root>;
  ris : Daum[]=[];
  constructor(public vedi:ApiserviceService , private route: ActivatedRoute ){ 
    this.route.paramMap.subscribe(this.getRouterParam);
  }
 
  getRouterParam = (params: ParamMap) =>
  {
    this.prodotto = params.get('path');
    this.obsProd = this.vedi.yugilist2(this.prodotto);
    this.obsProd.subscribe((data : Root)=>{this.ris=data.data;})
  }
  vai(url:string){
    const parts =url.split('/');
    console.log(parts)
    return parts.at(-2)
  }
}
