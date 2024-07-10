import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-demo-table',
  templateUrl: './demo-table.component.html',
  styleUrls: ['./demo-table.component.css']
})
export class DemoTableComponent implements OnInit {
  roles: any[] = [];
  loading: boolean = true; // Add loading state

  constructor(private demoService: DemoService) { }

  ngOnInit(): void {
    console.log('Fetching roles...');
    this.demoService.getDemos().subscribe(
      (data: any) => {
        console.log('Received data in component:', data);
        this.roles = data.roles; // Assign roles array from response
        this.loading = false; // Update loading state
      },
      (error) => {
        console.error('Error fetching roles data', error);
        this.loading = false; // Update loading state on error
      }
    );
  }
}
