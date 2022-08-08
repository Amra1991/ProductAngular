import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Product1 } from "./product1";


@Component({
    selector:'product1java-comp',
    templateUrl:'product1.component.html',
    styleUrls:['./product1.component.css']
})

export class Product1Component implements OnInit{ 

    products1:any;

    constructor(private http:HttpClient){ }

    ngOnInit(){
              let response=this.http.get("http://localhost:8095/api/v1/products");
              response.subscribe((data)=>this.products1=data);
    }
    
 
    

}