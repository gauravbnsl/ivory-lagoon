import {
  Component,
  AfterViewInit,
  OnDestroy,
  Renderer2,
  ElementRef,
} from "@angular/core";
import { MenubarModule } from "primeng/menubar";

@Component({
  selector: "app-navbar",
  imports: [MenubarModule],
  templateUrl: "./navbar.html",
  styleUrl: "./navbar.scss",
})
export class Navbar implements AfterViewInit, OnDestroy {
  items = [
    { label: "Spa", command: () => this.scrollTo("spa") },
    { label: "Experiences", command: () => this.scrollTo("experience") },
    { label: "Rooms", command: () => this.scrollTo("rooms") },
    { label: "Dining", command: () => this.scrollTo("dining") },
    { label: "Contact", command: () => this.scrollTo("cta") },
  ];

  private observer: IntersectionObserver | null = null;

  constructor(private renderer: Renderer2, private hostRef: ElementRef) {}

  ngAfterViewInit() {
    const waitForElements = () => {
      const heroEl = document.querySelector(".hero");
      const menubarEl = document.querySelector(".p-menubar");
      if (
        !heroEl ||
        !menubarEl ||
        typeof IntersectionObserver === "undefined"
      ) {
        requestAnimationFrame(waitForElements);
        return;
      }

      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.25) {
              (menubarEl as HTMLElement).classList.add("over-hero");
            } else {
              (menubarEl as HTMLElement).classList.remove("over-hero");
            }
          });
        },
        { threshold: [0, 0.25, 0.5, 0.75, 1] }
      );

      this.observer.observe(heroEl);
    };

    waitForElements();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  private scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
