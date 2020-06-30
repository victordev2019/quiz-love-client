//import { QuizService } from './../shared/quiz.service';
import { Component, Input, OnInit } from '@angular/core';
import { FinalAnswer } from '../shared/interface/questions.interface';
import {AbstractControl, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { Results, returnResults } from '../shared/interface/results.interface';
import { QuizService } from '../shared/quiz.service';
import {consoleTestResultHandler} from "tslint/lib/test";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LiguagemFormulario} from "./interface";
//import { QuizService } from '../shared/quiz.service';


@Component({
  selector: 'app-result-test',
  templateUrl: './result-test.component.html',
  styleUrls: ['./result-test.component.css']
})
export class ResultTestComponent implements OnInit {

  /******************* ATRIBUTOS *******************/
  formulario: LiguagemFormulario = new LiguagemFormulario();
  public imagemResposta: string;
  public result: Results;

  public labels = {
    NAME: 'Nome',
    EMAIL: 'Email',
    AGE: 'Idade',
    GENDER: 'Sexo',
    STATUS: 'Você está...',
    SELECT_OPTION: 'Selecione',
    MALE: 'Masculino',
    FEMALE: 'Feminino',
    SINGLE: 'Solteiro',
    DATING: 'Namorando',
    MARRIAGE: 'Casado (a)',
    SHOW_RESULTS: 'Mostrar Resultados',
    NAME_FIELD: {
      REQUIRED: 'Campo Obrigatorio',
      PATTERN: 'Formato de Nome Invalido'
    },
    EMAIL_FIELD: {
      REQUIRED: 'Campo Obrigatorio',
      EMAIL: 'Formato de Email Invalido'
    },
    AGE_FIELD: {
      REQUIRED: 'Campo Obrigatorio',
      MIN: 'Valor Minimo de 18',
      MAX: 'Valor Maximo de 120'
    },
    GENDER_FIELD: {
      REQUIRED: 'Campo Obrigatorio'
    },
    STATUS_FIELD: {
      REQUIRED: 'Campo Obrigatorio'
    },
    CHALLENGE_LANGUAGE: 'Linguagem Desafiadora',
    PRIMARY_LANGUAGE: 'Linguagem de amor primaria ',
    LOVE_DEMONSTRATION: 'Demonstração de amor',
    UNEXPECTED: 'Erro Inesperado'
  };
  @Input()
  public allAnswers: Array<FinalAnswer>;

  public allResults: Array<Results>;

  public form: FormGroup;


  public submitted = false;

  public contentFirstResult = '';

  public secondResult = 0;

  public contentThirdResult = '';

  public contentFourthResult = '';

  public showComponentsResults = false;

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient) {
  }

  ngOnInit(): void {

    this.allResults = returnResults();

   this.form = this.formBuilder.group({
    //  name: ['', [Validators.required, Validators.pattern('[A-Za-zÀ-ú ]*')]],
    //  email: ['', [Validators.required, Validators.email]],
    //  age: ['', [Validators.required]],
    //  gender: ['', [Validators.required]],
    //  status: ['', [Validators.required]],
     challengeLanguage: [''],
      primaryLanguage: [''],
      loveDemonstration: ['']
   });

    //this.challengeLanguageFormControl.disable();
  //  this.primaryLanguageFormControl.disable();
  //  this.loveDemonstrationFormControl.disable();

    this.makeResults(this.allAnswers);
  }

  makeResults(listOfAnswers: Array<FinalAnswer>) {
    this.challengeLanguageResult(listOfAnswers);
    this.primaryLanguageResults(listOfAnswers);
    this.loveDemonstrationResults(listOfAnswers);

    this.secondResult = listOfAnswers.filter(el => el.id === 2)[0].value;
  }

  primaryLanguageResults(listOfAnswers: Array<FinalAnswer>) {
    const primaryResults = listOfAnswers.filter(answer => this.verifyPrimaryLanguageResults(answer.id));
    const singlePrimaryResults = new Set(primaryResults.map(item => item.value));

    const result = this.highValue(primaryResults, singlePrimaryResults);

    this.primaryLanguageFormControl.setValue(this.allResults.filter(res => res.id == result)[0].title);
    this.contentFirstResult = this.allResults.filter(res => res.id == result)[0].content;
    this.imagemResposta = this.allResults.filter(res => res.id == result)[0].imagemResposta;

  }


  loveDemonstrationResults(listOfAnswers: Array<FinalAnswer>) {
    const loveDemonstration = listOfAnswers.filter(answer => this.verifyLoveDemonstration(answer.id));
    const singleLoveResults = new Set(loveDemonstration.map(item => item.value));

    const result = this.highValue(loveDemonstration, singleLoveResults);

    this.loveDemonstrationFormControl.setValue(this.allResults.filter(res => res.id == result)[0].title);
    this.contentThirdResult = this.allResults.filter(res => res.id == result)[0].title;

  }

  highValue(listOfAnswers: Array<FinalAnswer>, singleResults: Set<number>) {
    let result = 0;
    let totalElements = 0;
    singleResults.forEach(el => {
      const count = listOfAnswers.filter(listItem => listItem.value === el).length;

      if (count > totalElements) {
        totalElements = count;
        result = el;
      }
    });

    return result;
  }

  verifyPrimaryLanguageResults(value: number) {
    return value === 1
      || value === 3
      || value === 4
      || value === 6
      || value === 7
      || value === 8
      || value === 10
      || value === 11
      || value === 13
      || value === 15
      || value === 17;
  }


  verifyLoveDemonstration(value: number) {
    return value === 5
      || value === 9
      || value === 12
      || value === 14
      || value === 16
      || value === 18;
  }


  challengeLanguageResult(listOfAnswers: Array<FinalAnswer>) {
    const challengeLanguage: number = listOfAnswers.filter(answer => answer.id === 19)[0].value;

    this.challengeLanguageFormControl.setValue(
      // tslint:disable-next-line:triple-equals
      this.allResults.filter(result => result.id == challengeLanguage)[0].title);
    this.contentFourthResult = this.allResults.filter(res => res.id == challengeLanguage)[0].title;


  }

  showResults(form: NgForm) {

    this.submitted = true;
    if (this.formulario.nome !== undefined && this.formulario.nome !== '' ) {
      this.showComponentsResults = true;
      var data = new FormData();
      data.append("mauticform[formName]", "nomeform");
      data.append("mauticform[return]", "");
      data.append("mauticform[formId]", "3");
      data.append("mauticform[nome]", this.formulario.nome);

      this.http.post<any>(`api/form/submit?formId=2`, data).subscribe(data => {

        //todo verificar o tipo de retorno que api retorna e fazer o tratamento !
        console.log("retorno", data);
      });
    } else {
      alert("Preencha todos os campos obrigatório! ");
    }

  }
  //requestInsert(): void {

  // this.showResults();
 //  const data = {
//"mauticform[nome]" : this.nameFormControl.value
//"mauticform[email]" : this.emailFormControl.value,
//"mauticform[idade]" : this.ageFormControl.value,
//"mauticform[sexo]" : this.genderFormControl.value,
//"mauticform[voce_esta]" : this.statusFormControl.value,
//"mauticform[linguagem_de_amor_primari]" : this.primaryLanguageFormControl.value,
//"mauticform[linguagem_desafiadora]" : this.challengeLanguageFormControl.value,
//"mauticform[demonstracao_de_amor]" : this.loveDemonstrationFormControl.value


 //  }

 //   this.quizService.formulario(data).subscribe(res => {
  //    console.log(res)
  //  })
  //}






  get challengeLanguageFormControl(): AbstractControl {
   return this.form.get('challengeLanguage');
  }

 get primaryLanguageFormControl(): AbstractControl {
    return this.form.get('primaryLanguage');
 }

 get loveDemonstrationFormControl(): AbstractControl {
    return this.form.get('loveDemonstration');
 }
}
