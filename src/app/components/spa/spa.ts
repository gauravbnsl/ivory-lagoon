import { Component } from "@angular/core";
import { CardModule } from "primeng/card";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { AnimateOnScrollModule } from "primeng/animateonscroll";

@Component({
  selector: "app-spa",
  templateUrl: "./spa.html",
  styleUrl: "./spa.scss",
  imports: [CommonModule, CardModule, ButtonModule, AnimateOnScrollModule],
})
export class Spa {
  services = [
    {
      title: "Forest Floor Aromatherapy",
      duration: "90 Minutes",
      description:
        "Using essential oils extracted from native flora, this massage grounds your energy with the scents of damp earth and blooming orchids.",
      image: "spa1.png",
    },
    {
      title: "Canopy Yoga Session",
      duration: "60 Minutes",
      description:
        "Find your balance on our elevated wooden decks. A guided vinyasa flow accompanied by the rhythmic sounds of the morning jungle.",
      image: "spa2.png",
    },
    {
      title: "Riverstone Detox",
      duration: "120 Minutes",
      description:
        "Heated stones gathered from the nearby riverbed are placed on pressure points to release deep-seated tension and toxins.",
      image: "spa3.png",
    },
  ];
}
