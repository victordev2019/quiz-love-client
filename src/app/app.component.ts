import {Component} from '@angular/core';
import {FinalAnswer} from './shared/interface/questions.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Teste de Amor';

  isInQuestion = true;

  public allAnswer: Array<FinalAnswer>;

  showResults(event: Array<FinalAnswer>) {
    this.allAnswer = event;
    this.isInQuestion = false;
  }
}
