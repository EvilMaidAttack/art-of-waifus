import { Waifu } from "../waifu";
import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from "@angular/animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [
    trigger("myAnimation", [
      state("small", style({ transform: "scale(1)", boxShadow: "0px 3px 12px 0px rgba(0,0,0,0.75)" })),
      state("large", style({ transform: "scale(1.1)", boxShadow:"0px 6px 25px 0px rgba(0,0,0,0.75)"})),
      transition("small <=> large", animate("50ms ease-in")),
    ]),
    trigger("myToggleInfoTrigger", [
      transition(":enter", [
        style({opacity: 0}),
        animate('100ms ease-in', style({opacity: 1}))
      ]),
      transition(":leave", [
        animate('100ms ease-in', style({opacity: 0}))
        ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  waifu: Waifu = {
    id: 1,
    name: "Zero Two",
    anime: "Darling in the Franxx",
  };

  state: string = "small";

  info: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  animateMeLarge(): void {
    if(!(this.state === "large")){
      this.state = "large"
    }
  }
  
  animateMeSmall(): void {
    this.state = "small"
  }

  toggleInfo(): void {
    this.info = !this.info
  }

}
