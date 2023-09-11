import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-loading-pages',
    templateUrl: './loading-pages.component.html',
    styleUrls: ['./loading-pages.component.scss'],
    standalone: true
})
export class LoadingPagesComponent implements OnInit{
  //@ViewChild('menuIconos') menuIconos: ElementRef;

  constructor() {}

  ngOnInit(): void {
  }

  changeCSS():void {

  }
  
}
