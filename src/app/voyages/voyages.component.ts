import { Component, OnInit } from '@angular/core';
import { Voyage } from '../voyage';
import { VOYAGES } from '../mock-voyages';

@Component({
  selector: 'app-voyages',
  templateUrl: './voyages.component.html',
  styleUrls: ['./voyages.component.css']
})
export class VoyagesComponent implements OnInit  {
  voyages: Voyage[] = [];

  ngOnInit(): void {
    this.voyages = VOYAGES; // Charger les données
  }
}