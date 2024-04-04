import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css'],
})
export class CoursesDetailComponent {
coures:string="";
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.coures = params['course'];
      this.coures = this.coures.charAt(0).toUpperCase() + this.coures.slice(1);
    });
  }

  constructor(public route: ActivatedRoute) {

  }
}
