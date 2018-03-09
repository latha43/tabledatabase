import {Injectable} from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class EmployeeService{
        
  private _url:string="http://localhost:8080/JdbcDemo/";
  constructor(private _http:Http){}
 
    getEmployee(id:string)
  {
        let date=new Date();
        let url=this._url+"getAll/"+id+"/"+date.getTime();
    return this._http.get(url)
      .map((response:Response) => response.json())
    
  } 
  
   listEmployee()
  {
     let date=new Date();
    return this._http.get(this._url+"list/"+date.getTime())
      .map((response:Response) => response.json())
    
  } 
   
    deleteEmployee(id:string)
  {
     return this._http.get(this._url+"del/"+id)
      .map((response:Response) => response.json())
    
  } 
    
    addCustomer(id:string,name:string,salary:string,dept:string){
      let date=new Date();
        let bodyObj={
                "id":id,
                "name":name,
                "salary":salary,
                "dept":dept
    }
        return this._http.put(this._url+"insert/"+date.getTime(),JSON.stringify(bodyObj))
      .map((response:Response) => response.json())
    }  
    
    
    
    updateCustomer(id:string,name:string,salary:string,dept:string){
        let date=new Date();
       let bodyObj={
                "id":id,
                "name":name,
                "salary":salary,
                "dept":dept
    }  
           return this._http.put(this._url+"update/"+date.getTime(),JSON.stringify(bodyObj))
      .map((response:Response) => response.json())
        
 }
   } 