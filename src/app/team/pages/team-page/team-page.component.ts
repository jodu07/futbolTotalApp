import { Component, OnInit } from '@angular/core';
import { Team } from '../../interfaces/team.interface';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent implements OnInit {

  

  /*team: Team={
    team_key:  '',
    team_name: '',
    team_logo: '',
    players: Player={
    player_key:          0,
    player_name:         '',
    player_number:       '',
    player_country:      null,
    player_type:         '',
    player_age:          '',
    player_match_played: '',
    player_goals:        '',
    player_yellow_cards: '',
    player_red_cards:    '',
    player_image:        ''
    },
    coaches: Coach={
      coach_name:    '',
      coach_country: null,
      coach_age:     null,
    }
   };*/

  team: any[]=[];
  termino: number = 0;



  constructor(private _teamService: TeamService) { }

  ngOnInit(): void {    

    this.buscar();
  }

  buscar(){
    
    console.log(this.termino);
    this._teamService.getTeams(this.termino)    
    .subscribe( (team:any) =>{

      this.team = team;
      console.log('este:', this.team);
    }           

    );
      

  }

}

