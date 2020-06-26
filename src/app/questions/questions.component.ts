import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BsModalService, ModalDirective} from 'ngx-bootstrap/modal';
import {createQuestions, FinalAnswer, Questions} from '../shared/interface/questions.interface';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  public labels = {
    CONTINUE: 'Continuar',
    FINISH: 'Finalizar',
    INVALID_FORM: 'Uma resposta é obrigatoria'
  };

  private config = {
    backdrop: true,
    ignoreBackdropClick: true
  };

  public submitted = false;
  public index: number;
  public questions: Array<Questions>;

  public form: FormGroup;

  private allAnswers: Array<FinalAnswer> = new Array<FinalAnswer>();

  @Output()
  public finishTest: EventEmitter<Array<FinalAnswer>> = new EventEmitter();

  constructor(private modalService: BsModalService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.questions = createQuestions();
    this.index = 0;

    this.form = this.formBuilder.group({
      answer: ['', Validators.required]
    });

    document.getElementById('startModal').click();
  }

  openModal(modal: ModalDirective) {
    modal.config = this.config;
    modal.show();
  }

  continue() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.fillAnswer();
    this.index++;
    this.clearForm();
  }

  fillAnswer() {
    this.allAnswers.push({
      id: this.questions[this.index].id,
      value: this.answerFormControl.value,
      isValid: this.questions[this.index].isValid
    });
  }

  clearForm() {
    this.answerFormControl.setValue('');
    this.submitted = false;
  }

  finish() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.fillAnswer();
    this.finishTest.emit(this.allAnswers);
  }

  endOfQuestions(): boolean {
    return this.index >= this.questions.length - 1;
  }

  get answerFormControl(): AbstractControl {
    return this.form.get('answer');
  }
}
