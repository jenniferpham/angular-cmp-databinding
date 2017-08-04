import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('svrElement') element: {type: string, name: string, content: string}; //@Input allows parent component to pass in data to this child component. Whatever string inside of @Input() is the custom alias or custom name that I can use for property binding on the parent component
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;  //access to something on html of this component
  @ContentChild('contentParagraph') paragraph: ElementRef; //access to something stored in another component (app.html) but that is passed on through ng-content

  constructor() {
    console.log('constructor() called');
   }

   ngOnChanges(changes: SimpleChanges) { //only lifecycle hook that takes in an argument. gets called before constructor and ngOnInit in the second round. Stores Current Value and Previous Value
      console.log('ngOnChanges called');
      console.log(changes);
      
      
   }

  ngOnInit() {
    console.log('ngOnInit() called');
    console.log('header ' + this.header.nativeElement.textContent); //doesn't show until ngAfterViewInit
    console.log('#contentParagraph ' + this.paragraph.nativeElement.textContent); //doesn't show until ngAfterContentInitt
    
  }

  ngDoCheck() {
    console.log('ngDoCheck() called whenever angular checks for any changes like event from clicking, event that takes data');
  }

  ngAfterContentInit() {
    console.log('AfterContentInit() called. After ngDoCheck(). Called only once and doesnt get initialized again. After this shows <ng-content></ng-content>');
     console.log('#contentParagraph ' + this.paragraph.nativeElement.textContent + '. doesnt show until ngAfterViewInit'); //doesn't show until ngAfterContentInit
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked() called. Called After DoCheck(). Called after each change detection cycle');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit() called. Loads after ngAfterContentInit and ngAfterContentChecked b/c it is initializing the entire view.');
    console.log('#header textContent:  ' + this.header.nativeElement.textContent + ' shows in ngAfterViewInit');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked() called.');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called');
    
  }

}
