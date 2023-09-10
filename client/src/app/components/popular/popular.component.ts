import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  constructor(private apiService : ApiServiceService) {}

  readData: any;

  ngOnInit(): void {
      this.apiService.getAllData().subscribe((res) =>{
        console.log(res);
        this.readData = res
        console.log(this.readData);
        
      });
  }

}
