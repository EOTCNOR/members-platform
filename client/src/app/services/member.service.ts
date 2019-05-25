import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Member } from '../models/member';
import { MEMBERS } from '../data/mock-members';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor() { }

  getMembers(): Observable<Member[]> {
    return of(MEMBERS);
  }

  getMember(id: number): Observable<Member> {
    return of(MEMBERS.find(member => member.id === id));
  }

  searchMembers(filterText: string): Observable<Member[]> {
    if (!filterText) {
      return of(MEMBERS);
    }

    return of(MEMBERS.filter( member => {
      return Object.values(member).reduce((prev, curr) => {
        return prev || curr.toString().toLowerCase().includes(filterText.toLowerCase());
      }, false);
    }));
  }
}
