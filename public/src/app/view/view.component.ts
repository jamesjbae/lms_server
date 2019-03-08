import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  viewLecture: any = [];
  
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.viewLecture._id = params['id']
      this.getOneLecture();
    });
  }

  getAllLectures() {
    const obs = this._httpService.getAllLecturesFromDB();
    obs.subscribe(data => {
      console.log(data)
      this.viewLecture = data;
    });
  }

  getOneLecture() {
    this._httpService.getOneLectureFromDB(this.viewLecture._id)
      .subscribe(data => {
          this.viewLecture = data;
      });
  }
  onClickDeleteLecture(id: string) {
    let observable = this._httpService.deleteLectureFromDB(id);
    observable.subscribe(data => {
      this.getAllLectures();
    });
  }

}