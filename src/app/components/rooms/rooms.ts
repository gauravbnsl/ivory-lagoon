import { Component } from "@angular/core";
import { CardModule } from "primeng/card";
import { CarouselModule } from "primeng/carousel";
import { ScrollAnimateDirective } from "./../../directives/scroll-animate";
import { CommonModule } from "@angular/common";
import { AnimateOnScrollModule } from "primeng/animateonscroll";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-rooms",
  imports: [CommonModule, CardModule, ButtonModule, AnimateOnScrollModule],
  templateUrl: "./rooms.html",
  styleUrl: "./rooms.scss",
})
export class Rooms {
  rooms = [
    {
      name: "Jungle View Suite",
      image: "room1.png",
      description:
        "Wake up to panoramic views of the dense, vibrant canopy from your floor-to-ceiling windows.",
      features: ["King Size Bed", "Private Balcony", "Canopy Views"],
    },
    {
      name: "Jacuzzi Garden Villa",
      image: "room2.png",
      description:
        "Indulge in our private outdoor Jacuzzi surrounded by lush tropical flora, a true sensory retreat.",
      features: ["Outdoor Jacuzzi", "Rain Shower", "Garden Access"],
    },
  ];
}
