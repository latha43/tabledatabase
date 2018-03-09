/*
* http://usejsdoc.org/
*/
import { EmployeeService } from './test.service';
import { Component} from '@angular/core';

@Component({
    selector:'add',
    template:`<br><br><li>ID:<input type="text" class="box" #id>
             NAME:<input type="text" class="box" #name>
             SALARY:<input type="text" class="box" #salary>
            DEPT: <input type="text" class="box" #dept></li>
             <br><br><button (click)="insertClick(id.value,name.value,salary.value,dept.value)" class="button">ADD</button>
             <br><br><button (click)="updateClick(id.value,name.value,salary.value,dept.value)" class="button">UPDATE</button>`,
    providers:[EmployeeService]     

})

export class AddComponent{
    status1:any;
    status:any;
    employees:any[];
    constructor(private _employeeService:EmployeeService){}
  
     insertClick(id:string,name:string,salary:string,dept:string){
        this._employeeService.addCustomer(id,name,salary,dept)
        .subscribe(resEmployeeData => this.status=(resEmployeeData));
        this.status1="Inserted successfully";
    }
    
    
   updateClick(id:string,name:string,salary:string,dept:string){
        this._employeeService.updateCustomer(id,name,salary,dept)
        .subscribe(resEmployeeData => this.employees=resEmployeeData);
        
    } 
}