import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appScrollAnimate]",
  standalone: true,
})
export class ScrollAnimateDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add("in-view");
          observer.unobserve(this.el.nativeElement);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(this.el.nativeElement);
  }
}
