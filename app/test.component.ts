 

import { EmployeeService } from './test.service';
import { Component} from '@angular/core'; 
@Component({
  
        selector:'employee-list',
        template:`<h2>WELCOME</h2>
                    <marquee>Welcome to UST Global Employee Page</marquee><br><br>
                <li><a routerLink="list"><button class="button">LIST ALL</button></a>
                 <a [routerLink]="['/search']"><button class="button">SEARCH EMPLOYEE</button></a>
                 <a routerLink="add"><button class="button">ADD/UPDATE</button></a></li>
                 <div><router-outlet></router-outlet></div>`
})


export class TestComponent{} 
