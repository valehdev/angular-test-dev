import {Component, OnInit} from '@angular/core';
import {MemberService} from '../../services/member.service';
import {Member} from '../../models/member';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  members: Member[];

  constructor(private memberService: MemberService) {
  }

  ngOnInit() {
  }

  getMembers(): void {
    this.memberService.getMembers().subscribe(members => this.members = members);
  }

}
