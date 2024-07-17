import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Job } from '../job.model';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-board.component.html',
  styleUrl: './job-board.component.css'
})
export class JobBoardComponent {
  jobs: Job[] = [];
  jobIds: number[] = [];
  currentIndex: number = 0;
  moreJobs: boolean = true;
  pageSize: number = 6;

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.loadJobIds();
  }

  loadJobIds() {
    this.jobService.getJobIds().subscribe(data => {
      this.jobIds = data;
      this.loadMore();
    });
  }

  loadMore() {
    this.jobService.getJobs(this.jobIds, this.pageSize, this.currentIndex).subscribe(jobs => {
      this.jobs.push(...jobs);
      this.currentIndex += this.pageSize;
      this.moreJobs = this.currentIndex < this.jobIds.length;
    });
  }
}
