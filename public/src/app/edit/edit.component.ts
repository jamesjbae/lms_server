import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editLecture: any = [];
  editLectureError: any = {
    title: { message: ''},
    major: { message: ''},
    intro: { message: ''},
    photoUrl: { message: ''},
    details: { message: ''}
  };  
  
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.editLecture._id = params['id']
      this.getOneLecture();
    });
  }

  onSubmitUpdateLecture() {
    this._httpService.updateLectureToDB(this.editLecture._id, this.editLecture)
      .subscribe(data => {
        if(data['errors']) {
          this.editLectureError = data['errors'];
        } else {
          this._router.navigate(['/list']);
        }
      }); 
  }

  getOneLecture() {
    this._httpService.getOneLectureFromDB(this.editLecture._id)
      .subscribe(data => {
          this.editLecture = data;
      });
  }
}
