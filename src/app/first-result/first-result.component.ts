import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-first-result',
  templateUrl: './first-result.component.html',
  styleUrls: ['./first-result.component.css']
})
export class FirstResultComponent implements OnInit {
  @Input()
  public imagem: string;
  
  @Input()
  public content: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
