import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPlayers',
  standalone: true
})
export class FilterPlayersPipe implements PipeTransform {

  transform(players: any[], search: string, position: string, age: number | null, team: string): any[] {
    if (!players) return [];

    search = search?.toLowerCase() || '';
    position = position?.toLowerCase() || '';
    team = team?.toLowerCase() || '';

    return players.filter(player => {

      const matchesName =
        player.nombre.toLowerCase().includes(search) ||
        player.apellidos.toLowerCase().includes(search);

      const matchesPosition =
        position === '' || player.posicion.toLowerCase() === position;

      // 🔥 AHORA FILTRA POR "MAYOR QUE X"
      const matchesAge =
        !age || player.edad > age;

      const matchesTeam =
        team === '' || player.equipo.toLowerCase().includes(team);

      return matchesName && matchesPosition && matchesAge && matchesTeam;
    });
  }
}
