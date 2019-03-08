import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpService } from '../http.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})

export class NewComponent implements OnInit {
  newLecture: any = [];
  newLectureError: any = {
    title: { message: ''},
    major: { message: ''},
    intro: { message: ''},
    photoUrl: { message: ''},
    details: { message: ''}
  }; 

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newLecture = {
      title: "",
      major: "",
      intro: "",
      photoUrl: "",
      details: ""
    }
  }

  onSubmitCreateLecture() {
      let obs = this._httpService.postLectureToDB(this.newLecture);
      obs.subscribe((data) => {
        if(data['errors']) {
          this.newLectureError = data['errors'];
        } else {
          this._router.navigate(['/list']);
        }
 
    });
  }
}


