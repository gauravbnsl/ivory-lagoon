import { Component } from "@angular/core";
import { CardModule } from "primeng/card";

@Component({
  selector: "app-spa",
  imports: [CardModule],
  templateUrl: "./spa.html",
  styleUrl: "./spa.scss",
})
export class Spa {}
