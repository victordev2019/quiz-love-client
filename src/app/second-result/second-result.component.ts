import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-second-result',
  templateUrl: './second-result.component.html',
  styleUrls: ['./second-result.component.css']
})
export class SecondResultComponent implements OnInit {

  @Input()
  public result: number;

  @Input()
  public name: string;

  public content = '';

  constructor() {
  }

  ngOnInit(): void {
    this.content = this.showContent(this.result);
  }


  showContent(value): string {
    switch (value) {
      case '1':
        return 'Seu par queira ficar por perto e, mesmo quando distante, sinta vontade de fazer ligações sem motivo aparente?';
      case '2':
        return 'Seu par se proponha a ajudar no que você precisa?';
      case '3':
        return 'Seu par dedique-se a comprar pequenas lembrancinhas para você, inclusive fora de datas comemorativas?';
      case '4':
        return 'Seu par volte a admirá-la e fale coisas incríveis sobre você?';
      case '5':
        return 'Seu par queira te abraçar e beijar com mais frequência?';
      default:
        return 'Valor invalido';
    }
  }

}
