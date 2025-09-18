import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiIntegrationService } from '../../services/api-integration.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courses',
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  constructor(private apiservice: ApiIntegrationService, private http: HttpClient) { }

  source = 'unPaid';
  courses: any[] = []
  coursesDetail: any
  isPopupOpen: boolean = false

  ngOnInit() {
    this.apiservice.getRequest('content/all').subscribe({
      next: (res: any) => {
        this.courses = res.data
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  close(){
    this.isPopupOpen = false
  }

  openDetail(id: number) {
    this.apiservice.getRequest(`content/detail/${id}`).subscribe({
      next: (res: any) => {
        this.isPopupOpen = true
        this.coursesDetail = res.data
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }
}
