import { EmployeeService } from './test.service';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
                                                <div align="center" >
                                               <div *ngIf="flag" id="example1"><h2>LOGIN PAGE</h2>
                                             
                                                USERNAME <input type="text" id="rcorners2" #userid>
                                                <br><br>
                                                PASSWORD <input type="password" id="rcorners2" #pswrd>
                                                <br><br>
                                                
                                                <button (click)="onClick(userid.value,pswrd.value)" class="button">Login</button>
                                                <h2>{{status}}</h2></div> 
  
                                                
                                                <div *ngIf="!flag"><employee-list></employee-list><button (click)="logout()" class="posis">LOGOUT</button></div>
  
                                               </div>

                                                `,
                                               providers:[EmployeeService]
                                               
})                                               
export class AppComponent  { 
                flag=true;
                name = 'User'; 
                status:string;
                onClick(user:string,pwd:string){
                                console.log(user);
                                console.log(pwd);
                                if(user=="admin" && pwd=="system"){
                                                alert("Successfully Logged in")
                                                this.flag=!this.flag;
                                                
                                }
                                else{
                                                alert("please try again")
                                            
                                }
                                
                 
                }
                logout(){
                    this.flag=!this.flag;
                    }
}  
