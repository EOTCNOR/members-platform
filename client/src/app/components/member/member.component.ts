import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member';
import { MEMBERS } from '../../data/mock-members';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  members = MEMBERS;
  selectedMember: Member;

  constructor() { }

  ngOnInit() {
  }

  onSelect(member: Member): void {
    this.selectedMember = member;
  }
}
