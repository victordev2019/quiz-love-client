import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fourth-result',
  templateUrl: './fourth-result.component.html',
  styleUrls: ['./fourth-result.component.css']
})
export class FourthResultComponent implements OnInit {

  @Input()
  public content: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
