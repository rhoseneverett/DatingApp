import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  
  protected readonly title = signal('Dating App')
  private http = inject(HttpClient)
  protected members = signal<any>([])

  ngOnInit(): void {
    this.http.get('https://localhost:5002/api/members').subscribe({
      next: response => this.members.set(response),
      error: error => console.log(error),
      complete : () => console.log('Complete the http request')
    })
  }
  
}
