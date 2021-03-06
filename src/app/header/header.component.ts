import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { projectModel } from '../shared/project.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('appSidebar',{static:true}) sidebar:ElementRef;
  @ViewChild('dropDown',{static:true}) dropdown:ElementRef;
  blackHeader:string[]=['HOME','PROJECTS','EDUCATION','RESUME','SERVICES','TESTIMONIALS','ABOUT','CONTACT'];
  projects:projectModel[]=[
    new projectModel('Single vendor e-commerce project','Banana Store',7800,'bananaStore.png'),
    new projectModel('Admin panel driven news portal project','Truth Teller',200,'truthTeller.png'),
    new projectModel('Shopping list, recipes list angular project','Shopping List',6700,'shoppingList.png')
  ];
  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  // this.dropdown.nativeElement.style.display='none';
    this.renderer.setStyle(this.dropdown.nativeElement,'display','none');
  }
  onOpen(){
    // this.sidebar.nativeElement.style.left='0px';
    this.renderer.setStyle(this.sidebar.nativeElement,'left','0px');

  }
  onClose(){
    // this.sidebar.nativeElement.style.left='-85%';
    this.renderer.setStyle(this.sidebar.nativeElement,'left','-85%');

  }
  openDropdown(){
    // this.dropdown.nativeElement.style.display='block';
    this.renderer.setStyle(this.dropdown.nativeElement,'display','block');

  }
  closeDropdown(){
    // this.dropdown.nativeElement.style.display='none';
    this.renderer.setStyle(this.dropdown.nativeElement,'display','none');

  }
  

}
