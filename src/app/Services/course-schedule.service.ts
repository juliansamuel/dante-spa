import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseScheduleService {

  constructor(private http: HttpClient) { }

  getCourseSchedule(): Observable<any> {
    const apiUrl = `https://demo.dante.app/API/V1/Schedule/Select?apikey=dante.WKyjArOJ/VQka5WihamYDOHG2wWW//VWzbNS42nHeBM=&fields=Course.Name,Status,MasterScheduleID&filters=%5B%7B%20FieldName%3A%20%22StartDate%22,%20Operator%3A%20%22%3E%22,%20Value%3A%20%222024-01-01%22%20%7D,%20%7B%20FieldName%3A%20%22TutorResource.Reference%22,%20Operator%3A%20%22%3D%22,%20Value%3A%20%22R%22%20%7D%5D%0A`;
    return this.http.get(apiUrl);
  }
}
