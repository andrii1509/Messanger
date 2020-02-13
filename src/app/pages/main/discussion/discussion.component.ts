import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss'],
})
export class DiscussionComponent implements OnInit {

  constructor(
      private navController: NavController
  ) { }

  ngOnInit() {}

    redirect(data: any) {
      data = 'werqwerqwrq';
      this.navController.navigateForward('messages', {queryParams: data}).then();
    }

}
