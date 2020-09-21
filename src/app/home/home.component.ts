import { Waifu } from "../waifu";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  waifu: Waifu = {
    id: 1,
    name: "Zero Two",
    anime: "Darling in the Franxx",
  };

  constructor() {}

  ngOnInit(): void {}
}
