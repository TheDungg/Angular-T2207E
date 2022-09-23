import {Component} from "@angular/core";
import {IStudent} from "../../interfaces/student.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent extends  Component{
  student: IStudent = {id:1, name:'TheDung', age:19, address:'Yen Hoa Parkview'};

  arrayNumber: number[] = [1,2,3,4,5];

  stringArray:string[] = ["Nguyen The Dung", "Khoi du"];

  ls: IStudent[] = [
    {id:1,name:"Nguyen The Dung",age:19,address:'chung cu Yen Hoa Parkview'},
    {id:2,name:"KHoi du",age:19,address:'Thanh xuan'},
    {id:3,name:"KHoi du 2",age:19,address:'thanh xuan'}
  ]
}
