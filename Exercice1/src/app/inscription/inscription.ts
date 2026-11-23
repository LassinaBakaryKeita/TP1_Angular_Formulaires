import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Inscription } from '../models/inscription';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './inscription.html',
})
export class InscriptionComponent {
  // Modèle de données lié avec Two-Way Binding [(ngModel)]
  formData: Inscription = {
    fullname: '',
    age: null,
    country: '',
    email: '',
  };

  // Liste des choix du pays (au moins 4 pays)
  countries = [
    { label: 'France', value: 'France' },
    { label: 'Belgique', value: 'Belgique' },
    { label: 'Suisse', value: 'Suisse' },
    { label: 'Canada', value: 'Canada' },
    { label: 'USA', value: 'USA' },
  ];

  isSubmitted = false;
  submittedData: Inscription | null = null;

  onSubmit(form: NgForm): void {
    if (form.valid) {
      // Cloner les données soumises pour l'affichage récapitulatif
      this.submittedData = { ...this.formData };
      this.isSubmitted = true;
      console.log('Données du formulaire soumises :', this.submittedData);
    }
  }
}
