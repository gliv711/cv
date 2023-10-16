import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  translationData: any;

  constructor(private http: HttpClient) { }

  loadTranslationData() {
    return this.http.get('assets/fr.json');
  }
}
