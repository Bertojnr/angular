import { Component } from '@angular/core';
import { Designationcomponent } from '../designationcomponent/designationcomponent';
import { Rolescomponent } from '../rolescomponent/rolescomponent';
import { CommonModule } from '@angular/common';
import { Livingcomponent } from '../livingcomponent/livingcomponent';
import { Addrolescomponent } from '../addrolescomponent/addrolescomponent';

@Component({
  selector: 'app-mastercomponent',
  imports: [Designationcomponent, Rolescomponent, CommonModule, Livingcomponent, Addrolescomponent],
  templateUrl: './mastercomponent.html',
  styleUrl: './mastercomponent.css',
})
export class Mastercomponent {

    currentComponent: string = 'Designation';

    changeTab(tabName: string) {
      this.currentComponent = tabName;

    }
}
