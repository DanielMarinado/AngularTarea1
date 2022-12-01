import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor() {}

  private listGames: any = [
    {
      name: 'Super Mario Kart',
      description: 'Juego de aventuras',
      platform: 'Nintendo',
    },
    {
      name: 'Gran turismo',
      description: 'Juego de carreras',
      platform: 'PlayStation',
    },
    {
      name: 'GTA',
      description: 'Juego de aventuras',
      platform: 'Todas las plataformas',
    },
    {
      name: 'Mortal Kombat',
      description: 'Juego de peleas',
      platform: 'Todas las plataformas',
    },
    {
      name: 'Pokemon',
      description: 'Juego de estrategia y aventura',
      platform: 'Nintendo Switch',
    },
  ];

  getData(){
    return this.listGames;
  }
}
