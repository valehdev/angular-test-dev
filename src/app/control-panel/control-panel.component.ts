import {Component, OnInit} from '@angular/core';
import {Members} from './content/members/models/members';
import {MembersService} from './content/members/members.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  members: Members[] = [];

  constructor(private memberService: MembersService) {
  }

  ngOnInit() {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService.getMembers().subscribe(
      members => this.members = members.slice(1, 5)
    );
  }

}
