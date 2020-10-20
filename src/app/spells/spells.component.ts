import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'; /* Gives access to Http Variables */

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss']
})
export class SpellsComponent implements OnInit {

  spell1:object;
  spell2:object;
  spell3:object;
  spell4:object;
  spell5:object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getSpell1().subscribe(data => {
      this.spell1 = data;
      console.log(this.spell1);
    });

    this._http.getSpell2().subscribe(data => {
      this.spell2 = data;
      console.log(this.spell2);
    });

    this._http.getSpell3().subscribe(data => {
      this.spell3 = data;
      console.log(this.spell3);
    });

    this._http.getSpell4().subscribe(data => {
      this.spell4 = data;
      console.log(this.spell4);
    });

    this._http.getSpell5().subscribe(data => {
      this.spell5 = data;
      console.log(this.spell5);
    });
  }

}
