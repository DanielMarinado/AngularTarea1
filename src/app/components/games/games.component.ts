import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/service/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(private myService: GamesService) { }

  ngOnInit() {
    console.log("INICIO DE MI COMPONENTE GAMES");
    this.getGames();
  }

  getGames(){
    console.log(this.myService.getData());
  }

}
