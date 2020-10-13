import { Component, OnInit } from '@angular/core';
import {Coord} from '../coord';

@Component({
  selector: 'app-board-component',
  templateUrl: './board-component.component.html',
  styleUrls: ['./board-component.component.css']
})
export class BoardComponentComponent implements OnInit {


  sixtyFour = new Array(64).fill(0).map((_, i) => i);

  ngOnInit() {
  }
  xy(i): Coord {
        console.log("in xy()");
        return {
            x: i % 8,
            y: Math.floor(i / 8)
        }
      }
}