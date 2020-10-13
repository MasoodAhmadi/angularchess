import { Component, Input  } from "@angular/core";
//import { SkyhookDndService } from "@angular-skyhook/core";
//import { ItemTypes } from "../constants";
//import {GameService} from '../game.service';

@Component({
    selector: 'app-board-square',
    template: `
    <div class="wrapper" >
        <app-square [black]="black">
            
        </app-square>
    </div>
    `, styles: [`
    :host, .wrapper {
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
    }
    `]
})
export class BoardSquareComponent {
    @Input() position: coord;
    get black() {
         const { x, y } = this.position;
         return (x + y) % 2 === 1;
    }

    // step 2
  /*   target = this.dnd.dropTarget(ItemTypes.KNIGHT, {
    drop: monitor => {
        this.game.moveKnight(this.position);
    }
    }); */

    // step 1
/*     constructor(private dnd: SkyhookDndService, private game: GameService) { }
 */
    // step 4
  /*   ngOnDestroy() {
        this.target.unsubscribe();
    } */

}