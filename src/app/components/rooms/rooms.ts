import { Component } from "@angular/core";
import { CardModule } from "primeng/card";
import { CarouselModule } from "primeng/carousel";
import { ScrollAnimateDirective } from "./../../directives/scroll-animate";

@Component({
  selector: "app-rooms",
  imports: [CarouselModule, CardModule, ScrollAnimateDirective],
  templateUrl: "./rooms.html",
  styleUrl: "./rooms.scss",
})
export class Rooms {
  rooms = [
    {
      name: "Deluxe Suite",
      image: "room1.png",
      description: "Elegant comfort with modern amenities",
    },
    {
      name: "Vineyard View Room",
      image: "room2.png",
      description: "Scenic views of rolling vineyards",
    },
  ];
}
