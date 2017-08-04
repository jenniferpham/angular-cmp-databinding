import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private timer: number;
  private evenNumbers: Array<number>; //number[]
  private oddNumbers: Array<number>; //number[]

  constructor(){
    this.evenNumbers = [];
    this.oddNumbers = [];
  }
  // serverElements = [{type: 'server', name: 'Testserver', content: 'just a test!'}];

  // onServerAdded(serverData: {serverName: string, serverContent: string}) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.serverName,
  //     content: serverData.serverContent
  //   });
  // }

  // onBlueprintAdded(blueprintData: {blueprintName: string, blueprintContent: string}) {
  //    this.serverElements.push({
  //      type: 'blueprint',
  //     name: blueprintData.blueprintName,
  //     content: blueprintData.blueprintContent
  //   });
  // }

  // onChangeFirst(){
  //   this.serverElements[0].name = "Changed!";
  // }

  // onDestroyFirst(){
  //   this.serverElements.splice(0,1);
  // }

  showTimer(numberEventFromGameCtrl: number){
    console.log(numberEventFromGameCtrl);
    this.timer = numberEventFromGameCtrl;
    if(numberEventFromGameCtrl % 2 === 0){
      this.evenNumbers.push(numberEventFromGameCtrl);
    } else{
      this.oddNumbers.push(numberEventFromGameCtrl);
    }
  }

}
