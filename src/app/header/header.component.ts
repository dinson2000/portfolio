import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('appSidebar',{static:true}) sidebar:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  onOpen(){
    this.sidebar.nativeElement.style.left='0px';
  }
  onClose(){
    this.sidebar.nativeElement.style.left='-85%';
  }
  

}
