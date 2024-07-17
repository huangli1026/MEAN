import { Component, HostListener } from '@angular/core';
import { TestimonialsService } from '../testimonials.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  comments: any[] = [];
  start: number = 0;
  limit: number = 5;
  loading: boolean = false;

  constructor(private commentsService: TestimonialsService) {}

  ngOnInit(): void {
    this.loadComments();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.loading) {
      this.loadComments();
    }
  }

  loadComments(): void {
    this.loading = true;
    this.commentsService.getComments(this.start, this.limit).subscribe((data: any[]) => {
      this.comments = this.comments.concat(data);
      this.start += this.limit;
      this.loading = false;
    });
  }
}
