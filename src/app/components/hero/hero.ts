import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  OnDestroy,
} from "@angular/core";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-hero",
  imports: [ButtonModule],
  templateUrl: "./hero.html",
  styleUrl: "./hero.scss",
})
export class Hero implements AfterViewInit, OnDestroy {
  @ViewChild("bgRef") bgRef!: ElementRef<HTMLElement>;
  @ViewChild("contentRef") contentRef!: ElementRef<HTMLElement>;

  private rafId: number | null = null;

  ngAfterViewInit() {
    this.updateParallax();

    window.addEventListener("scroll", this.onScroll, { passive: true });
  }

  ngOnDestroy() {
    window.removeEventListener("scroll", this.onScroll);
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }

  private onScroll = () => {
    if (this.rafId) return;
    this.rafId = requestAnimationFrame(() => {
      this.updateParallax();
      this.rafId = null;
    });
  };

  private updateParallax() {
    const rect = this.bgRef.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const centerY = rect.top + rect.height / 2;
    const progress = (centerY - windowHeight / 2) / (windowHeight / 2);
    const translate = Math.round(progress * 48);
    this.bgRef.nativeElement.style.setProperty(
      "--bg-translate",
      `${translate}px`
    );
  }
}
