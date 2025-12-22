import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Cta } from "./components/cta/cta";
import { Experience } from "./components/experience/experience";
import { Footer } from "./components/footer/footer";
import { Hero } from "./components/hero/hero";
import { Navbar } from "./components/navbar/navbar";
import { Rooms } from "./components/rooms/rooms";
import { Dining } from "./components/dining/dining";
import { Spa } from "./components/spa/spa";

@Component({
  selector: "app-root",
  imports: [Cta, Experience, Footer, Hero, Navbar, Rooms, Dining, Spa],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {
  protected readonly title = signal("ivory-lagoon");
}
