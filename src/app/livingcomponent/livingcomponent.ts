import { Component, inject, OnInit } from '@angular/core';
import { Masterservice } from '../masterservice';
import { APIResponseModel, Category } from '../model/interface/phone';
import { SlicePipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livingcomponent',
  imports: [SlicePipe, CommonModule],
  templateUrl: './livingcomponent.html',
  styleUrl: './livingcomponent.css',
})
export class Livingcomponent implements OnInit {
    
    categories: Category[] = [];
    masterService = inject(Masterservice);
    isLoader: boolean = true;

    ngOnInit(): void {
      this.masterService.getLiving().subscribe((response: APIResponseModel) => {
        this.categories = response.categories;
        this.isLoader = false;
        console.log(this.categories)
      });
    }
}
