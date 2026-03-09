import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPlayers',
  standalone: true
})
export class FilterPlayersPipe implements PipeTransform {
  transform(players: any[], search: string): any[] {
    if (!players) return [];
    if (!search) return players;

    search = search.toLowerCase();

    return players.filter(player =>
      player.nombre.toLowerCase().includes(search) ||
      player.apellidos.toLowerCase().includes(search) ||
      player.posicion.toLowerCase().includes(search)
    );
  }
}
