import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

export interface DragData {
  tag: string;
  data: any;
}

@Injectable()
export class DragDropService {

  private _dragData = new BehaviorSubject<DragData>(null);

  constructor() {
  }

  //
  serDragData(data: DragData) {
    this._dragData.next(data);
  }


  //
  getDragData(): Observable<DragData> {
    return this._dragData.asObservable();
  }

  //
  ClearDragData() {
    this._dragData.next(null);
  }

}




























