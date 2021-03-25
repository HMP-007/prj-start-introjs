import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipes.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})

export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe ('A Test Recipe 1', 'This is simply a test', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/3/0/FNK_the-best-pot-roast_H_s4x3.jpg.rend.hgtvcom.966.725.suffix/1567523587365.jpeg'),
    new Recipe ('A Test Recipe 2', 'This is simply a test', 'https://www.rachaelraymag.com/.image/t_share/MTUxNTM2NTU5Nzc3MTI5NzI3/beef-tenderloin-with-horseradish-sauce-1217-103205053.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
