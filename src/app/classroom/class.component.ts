import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html'
})
export class ClassComponent extends Component{
    classroomName = "T2207E"
    numberStudent = 12;

    @Input()
    clName ?: string;

    upNumber(){
      this.numberStudent++;
    }

    studentName = 'Khôi đụ';
}
