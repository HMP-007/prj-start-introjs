import { element } from 'protractor';
import { Component, OnInit } from "@angular/core";
import * as introJs from "intro.js/intro.js";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {

  public introJS = introJs();

  constructor() {

    this.introJS.setOptions({

      steps: [
        {
          element: "#step1",
          title: 'Welcome',
          intro: "Welcome to your new app!",
          position: 'bottom'
        },
        {
          element: "#step2",
          title: 'Let\'s Go !',
          intro: "Ok, wasn't that fun ?",
          position: 'left'
        },
        {
          element: "#step3",
          title: 'Great to have you Here !',
          intro: "let's keep going",
          position: 'right'
        },
        {
          element: "#step4",
          title: 'See you next time !',
          intro: "More features, more fun.",
          position: 'top'
        },
        {
          element: "#step5",
          title: 'I know! You are Hungry NOW!',
          intro: "<img src = https://i.pinimg.com/originals/72/07/15/720715d026b4558715aaf241602d5af9.gif style='max-height: 237px'>",
          position: 'left top'
        }
      ],

      showProgress: true,
      //hidePrev: true,
      hideNext: false

    });

  }

  ngOnInit() {

    this.introJS.start();

  }
}
