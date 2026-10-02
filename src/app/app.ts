import { Component } from '@angular/core';
import { Header } from './sections/header';
import { Hero } from './sections/hero';
import { Projects } from './sections/projects';
import { ClientWorkSection } from './sections/client-work';
import { Experience } from './sections/experience';
import { Contact } from './sections/contact';

@Component({
  imports: [Header, Hero, Projects, ClientWorkSection, Experience, Contact],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {}
