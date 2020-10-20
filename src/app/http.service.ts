import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private http2: HttpClient) { }

  /* Spells Page API */
  getSpell1() {return this.http.get('https://www.dnd5eapi.co/api/spells/acid-arrow')}
  getSpell2() {return this.http.get('https://www.dnd5eapi.co/api/spells/acid-splash')}
  getSpell3() {return this.http.get('https://www.dnd5eapi.co/api/spells/aid')}
  getSpell4() {return this.http.get('https://www.dnd5eapi.co/api/spells/animal-friendship')}
  getSpell5() {return this.http.get('https://www.dnd5eapi.co/api/spells/bestow-curse')}

  /* Monsters Page API */
  getMonsters() {return this.http.get('https://www.dnd5eapi.co/api/monsters/')}
}
