import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllLecturesFromDB() {
    return this._http.get('api/lectures');
  }
  
  getOneLectureFromDB(id: string) {
    return this._http.get('api/lectures/' + id)
  }

  postLectureToDB(newLecture: any) {
    return this._http.post('api/lectures', newLecture);
  }

  updateLectureToDB(id: string, updateLecture: any) {
    return this._http.put(`api/lectures/${id}`, updateLecture);
  }

  deleteLectureFromDB(id: string) {
    return this._http.delete(`api/lectures/${id}`);
  }

}