import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CourseScheduleService } from './Services/course-schedule.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dante-spa';
  data: any[] = [];

  constructor(private courseScheduleService: CourseScheduleService) { }

  ngOnInit() {
    this.courseScheduleService.getCourseSchedule().subscribe(result => {
      this.data = result; // Adjust based on your API structure
      //console.log(this.data);
    });
  }
}
