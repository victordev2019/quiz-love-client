import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-third-result',
  templateUrl: './third-result.component.html',
  styleUrls: ['./third-result.component.css']
})
export class ThirdResultComponent implements OnInit {

  @Input()
  public content: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
