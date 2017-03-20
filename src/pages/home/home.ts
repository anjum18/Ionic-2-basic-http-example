import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {Http} from "@angular/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	posts: any;

	constructor(public http: Http) {
 
    this.http.get('http://137.74.114.227/API/select.php/projets').map(res => res.json()).subscribe(data => {
        console.log(data);
        this.posts = data;
    });
 
  }
}
