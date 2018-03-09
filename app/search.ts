/*
* http://usejsdoc.org/
*/
import { EmployeeService } from './test.service';
import { Component} from '@angular/core';

@Component({
    selector:'search',
    template:`<br><br>SEARCH<input type="text" class="box" #searchId><br>
             <br><button (click)="OnClick1(searchId.value)" class="button">SUBMIT</button><br>
             <br><br><button (click)="deleteClick(searchId.value)" class="button">delete</button>
             <br><br><table>
                <tr>
                    <th>ID</th>
                    <th>NAME</th> 
                    <th>SALARY</th>
                    <th>DEPARTMENT</th>
                </tr>
        
                <tr *ngFor="let item of employees">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.salary}}</td>
                <td>{{item.dept}}</td>
              
                </tr>
             </table>`,
        
       
      providers:[EmployeeService]     

})

export class SearchComponent{
    stauts:any;
    employees:any[];
    constructor(private _employeeService:EmployeeService){}
  
    OnClick1(id:string){
      this._employeeService.getEmployee(id)
        .subscribe(resEmployeeData => this.employees=resEmployeeData);     
    }
    
    
    deleteClick(id:string){
        this._employeeService.deleteEmployee(id)
        .subscribe(resEmployeeData => this.employees=resEmployeeData);
     }

}