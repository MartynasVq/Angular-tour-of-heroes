import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService} from "../hero.service";
import { Location } from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  submitted = false;
  name = "";
  power = this.powers[0];
  model = {
    name: `${this.name}`,
    power: `${this.power}`
  }

  constructor(private heroService: HeroService, private location: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    this.heroService.addHero(this.model as Hero).subscribe();
    console.log(this.model);
    this.location.navigateByUrl("");
  }

}
