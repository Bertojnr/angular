import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IPhone } from '../model/interface/phone';
import { CommonModule } from '@angular/common';
import { Addrolescomponent } from '../addrolescomponent/addrolescomponent';

@Component({
  selector: 'app-rolescomponent',
  imports: [FormsModule, CommonModule],
  templateUrl: './rolescomponent.html',
  styleUrl: './rolescomponent.css',
})
export class Rolescomponent implements OnInit {

    // firstname: string = 'albie';
    // version: number = 20.3;
    // building: boolean = true;
    // selectedState: string = '';

    // showAlertMessage() {
    //   alert("Welcome to Angular 20 Tutorial");
    // }

    // showReactMessage(message: string) {
    //   alert("Welcome to " + message);
    // }

    // showAngularMessage(message: string) {
    //   alert("Welcome to " + message);
    // }
    phonesList: IPhone[] = [];
    isLoader: boolean = true;
    http = inject(HttpClient);

    ngOnInit(): void {
      this.getAllPhones();
    }

    getAllPhones() {
      this.http
        .get<IPhone[]>('https://api.restful-api.dev/objects').subscribe((response: IPhone[]) => {
          this.phonesList = response;
          this.isLoader = false;
          console.log('Fetched phone name:', this.phonesList[0].name);
        });
    }
}
