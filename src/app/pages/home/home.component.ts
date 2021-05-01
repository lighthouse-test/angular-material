import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    public titleService: Title,
    public metaService: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Lighthouse Test | Angular SSR Home');
    this.metaService.updateTag({ name: 'description', content: 'Lighthouse Test | Angular SSR Home' });
  }
}
