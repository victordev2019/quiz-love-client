import {Component, Input, OnInit} from '@angular/core';
import {FinalAnswer} from '../shared/interface/questions.interface';

@Component({
  selector: 'app-question-resume',
  templateUrl: './question-resume.component.html',
  styleUrls: ['./question-resume.component.css']
})
export class QuestionResumeComponent implements OnInit {

  @Input()
  public list: Array<FinalAnswer>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
