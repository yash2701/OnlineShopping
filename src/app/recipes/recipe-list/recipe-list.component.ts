import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A taste Recipe', 'This is simply a test','https://storage.needpix.com/rsynced_images/zucchini-wraps-1967456_1280.jpg'),
    new Recipe('A taste Recipe', 'This is simply a test','https://storage.needpix.com/rsynced_images/zucchini-wraps-1967456_1280.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}

