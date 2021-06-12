import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Jobs } from '../jobs';
import { JobService } from '../job.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobs: Jobs[];
  searchValue: string;

  constructor(private jobService: JobService,
              private router: Router) {
  }

  ngOnInit(){
    this.getJobs();
  }

  private getJobs(){
    this.jobService.getJobList().subscribe(data => {
      this.jobs = data.jobs;
    });
  }
}
