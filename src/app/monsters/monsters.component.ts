import { Component, OnInit, DefaultIterableDiffer } from '@angular/core';
import { HttpService } from '../http.service'; /* Gives access to Http Variables */

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss']
})
export class MonstersComponent implements OnInit {

  monsterlist:object; /* Creates and object */
  monsterlist2:object; /* Creates and object */

  constructor(private _http: HttpService, private _http2: HttpService) { }

  ngOnInit() {
    this._http.getMonsters().subscribe(data => { /* Creates Array Object for us to use/ read */
      this.monsterlist = data;
      console.log(this.monsterlist);
    });
  }

  values = '';
  onKey(event: any) { // without type info
    this.values = event.target.value;
  }  
}
