import { Component } from "@angular/core";
import { MenubarModule } from "primeng/menubar";

@Component({
  selector: "app-navbar",
  imports: [MenubarModule],
  templateUrl: "./navbar.html",
  styleUrl: "./navbar.scss",
})
export class Navbar {
  items = [
    { label: "Resort" },
    { label: "Rooms" },
    { label: "Dining" },
    { label: "Spa" },
    { label: "Contact" },
  ];
}
