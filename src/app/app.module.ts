import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AppComponent} from './app.component';
import {ResultTestComponent} from './result-test/result-test.component';
import {QuestionsComponent} from './questions/questions.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FirstResultComponent } from './first-result/first-result.component';
import { SecondResultComponent } from './second-result/second-result.component';
import { ThirdResultComponent } from './third-result/third-result.component';
import { FourthResultComponent } from './fourth-result/fourth-result.component';
import { AlertResultComponent } from './alert-result/alert-result.component';
import { QuestionResumeComponent } from './question-resume/question-resume.component';
import { LoadingComponent } from './loading/loading.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ResultTestComponent,
    QuestionsComponent,
    FirstResultComponent,
    SecondResultComponent,
    ThirdResultComponent,
    FourthResultComponent,
    AlertResultComponent,
    QuestionResumeComponent,
    LoadingComponent
    
    
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
