import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dexter-assignments';

  canvasAssignmentsUrl = "https://dexterschools.instructure.com/api/v1/courses/7218/assignment_groups?exclude_assignment_submission_types%5B%5D=wiki_page&exclude_response_fields%5B%5D=description&exclude_response_fields%5B%5D=rubric&include%5B%5D=assignments&include%5B%5D=discussion_topic&override_assignment_dates=true&per_page=50";
  assignments: any;

  constructor(private readonly httpClient: HttpClient) {
  }

  public ngOnInit(): void {
    this.httpClient.get(this.canvasAssignmentsUrl).subscribe(assignments => this.assignments = assignments, err => console.log("there was an error reading the canvas service"));
  }
}
