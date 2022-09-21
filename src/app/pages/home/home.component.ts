import {Component} from "@angular/core";
import {IStudent} from "../../interfaces/student.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent extends  Component{
  student: IStudent = {id:1, name:'TheDung', age:19, address:'Yen Hoa Parkview'};
}
