import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private apiService : ApiServiceService) {}

  ngOnInit(): void {
      this.apiService.getAllData().subscribe((res) =>{
        console.log(res);
        
      });
  }

}
