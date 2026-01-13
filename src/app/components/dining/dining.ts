import { Component } from "@angular/core";
import { CardModule } from "primeng/card";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { ImageModule } from "primeng/image";
import { TagModule } from "primeng/tag";
import { AnimateOnScrollModule } from "primeng/animateonscroll";

export interface DiningOption {
  id: number;
  name: string;
  tag: string;
  description: string;
  image: string;
}

@Component({
  selector: "app-dining",
  templateUrl: "./dining.html",
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    ImageModule,
    TagModule,
    AnimateOnScrollModule,
  ],
  styleUrl: "./dining.scss",
})
export class Dining {
  diningOptions: DiningOption[] = [
    {
      id: 1,
      name: "The Canopy Table",
      tag: "Fine Dining",
      description:
        "Dine 30 feet above the forest floor on a private wooden platform. Features a 7-course tasting menu.",
      image: "dinner1.png",
    },
    {
      id: 2,
      name: "Starlight Fire-Pit",
      tag: "Authentic",
      description:
        "Traditional barbecue techniques meet modern gastronomy under the vast equatorial sky.",
      image: "dinner2.png",
    },
    {
      id: 3,
      name: "Roots Garden Café",
      tag: "Farm-to-Table",
      description:
        "Ingredients harvested daily from our biodynamic garden in a vibrant, casual setting.",
      image: "dinner3.png",
    },
  ];

  activeOption: DiningOption = this.diningOptions[0];

  onHover(option: DiningOption): void {
    this.activeOption = option;
  }
}
