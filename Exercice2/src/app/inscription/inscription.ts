import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Inscription } from '../models/inscription';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './inscription.html',
})
export class InscriptionComponent {
  private fb = inject(FormBuilder);

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

  // Création du FormGroup avec les validateurs synchrones requis
  inscriptionForm: FormGroup = this.fb.group({
    fullname: ['', [Validators.required, Validators.minLength(3)]],
    age: [null, [Validators.required, Validators.min(18)]],
    country: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
  });

  // Getters pratiques pour accéder aux contrôles dans le template
  get fullname() {
    return this.inscriptionForm.get('fullname');
  }

  get age() {
    return this.inscriptionForm.get('age');
  }

  get country() {
    return this.inscriptionForm.get('country');
  }

  get email() {
    return this.inscriptionForm.get('email');
  }

  onSubmit(): void {
    if (this.inscriptionForm.valid) {
      this.submittedData = this.inscriptionForm.value as Inscription;
      this.isSubmitted = true;
      console.log('Données du formulaire soumises (Reactive Forms) :', this.submittedData);
    } else {
      // Marquer tous les champs comme touchés si l'utilisateur tente de soumettre un formulaire invalide
      this.inscriptionForm.markAllAsTouched();
    }
  }
}
