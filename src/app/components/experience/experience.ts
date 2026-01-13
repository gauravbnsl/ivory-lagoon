import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

export interface ExperienceItem {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: "app-experience",
  imports: [CommonModule],
  templateUrl: "./experience.html",
  styleUrl: "./experience.scss",
})
export class Experience {
  experiences: ExperienceItem[] = [
    {
      title: 'Spa & Wellness',
      description: 'Relax with world-class treatments',
      image: '/spa1.png'
    },
    {
      title: 'Fine Dining',
      description: 'Chef-curated culinary experiences',
      image: '/dinner1.png'
    },
    {
      title: 'Vineyard Views',
      description: 'Stunning landscapes and sunsets',
      image: '/hero.png'
    },
    {
      title: 'Guided Nature Trails',
      description: 'Explore the jungle with expert naturalists and discover native flora and fauna.',
      image: '/room1.png'
    },
    {
      title: 'Sunset Boat Tours',
      description: 'Drift along peaceful waterways while enjoying golden-hour views and local cocktails.',
      image: '/dinner2.png'
    },
    {
      title: 'Yoga & Wellness Retreats',
      description: 'Mornings of guided yoga, breathwork, and meditation to rejuvenate body and mind.',
      image: '/spa2.png'
    }
  ];
}
