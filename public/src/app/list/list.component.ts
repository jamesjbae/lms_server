import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  allLectures: any = [];
  
  constructor(private _httpService: HttpService) {
    this.getAllLectures();
  }

  ngOnInit(){

  }

  getAllLectures() {
    const obs = this._httpService.getAllLecturesFromDB();
    obs.subscribe(data => {
      console.log(data)
      this.allLectures = data;
    });
  }

  onClickDeleteLecture(id: string) {
    let observable = this._httpService.deleteLectureFromDB(id);
    observable.subscribe(data => {
      this.getAllLectures();
    });
  }

}