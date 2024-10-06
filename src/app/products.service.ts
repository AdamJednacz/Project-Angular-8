import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private localStorageKey = 'productList';

  constructor() { }

  getProducts(): string[] {
    const storedProducts = localStorage.getItem(this.localStorageKey);
    return storedProducts ? JSON.parse(storedProducts) : this.getDefaultProducts();
  }

  private getDefaultProducts(): string[] {
    return [
      'Ananas',
      'Arbuz',
      'Awokado',
      'Bakłażan',
      'Bazylia',
      'Bazylia cięta',
      'Bób',
      'Borówki',
      'Bratki',
      'Brzoskwinia',
      'Brzoskwinie',
      'Buraki',
      'Cebula',
      'Cebula czerwona',
      'Cebula zielona',
      'Cykoria biała',
      'Cykoria czerwona',
      'Czosnek',
      'Czosnek obrany',
      'Fasolka szparagowa zielona',
      'Fasolka szparagowa żółta',
      'Figi',
      'Granat',
      'Jabłka drobne',
      'Jabłka grube',
      'Jarzynka',
      'Jeżyny',
      'Kabocha',
      'Kabaczek',
      'Kalafior',
      'Kalarepa',
      'Kiełki',
      'Kiełki brokuła',
      'Kiełki groszku',
      'Kiełki lucerny',
      'Kiełki rzodkiewki',
      'Kiełki słonecznika',
      'Kiwi',
      'Koper',
      'Koper włoski',
      'Maliny',
      'Marakuja',
      'Marchew',
      'Marchew młoda',
      'Marchewki kolorowe',
      'Mięta',
      'Mięta cięta',
      'Morela',
      'Nektarynka',
      'Ogórki',
      'Ogórki gruntowe',
      'Ogórki małosolne',
      'Papryka czerwona',
      'Papryka zielona',
      'Papryka żółta',
      'Pasternak',
      'Peperoni',
      'Pietruszka',
      'Pomidory',
      'Pomidory malinowe',
      'Pomidor koktajlowy mix',
      'Por',
      'Porzeczki',
      'Rukola',
      'Rozmaryn',
      'Rzepa biała',
      'Rzodkiewka',
      'Sałata',
      'Sałata dekoracyjna czerwona',
      'Sałata dekoracyjna zielona',
      'Sałata freeze',
      'Sałata mix',
      'Sałata rzymska',
      'Seler',
      'Seler naciowy',
      'Seler zielony',
      'Szczaw',
      'Szczypiorek',
      'Śliwka zachodnia',
      'Śliwki polskie duże',
      'Śliwki polskie małe',
      'Szparagi',
      'Szpinak',
      'Szpinak baby',
      'Tymianek',
      'Truskawki',
      'Winogrona czerwone',
      'Winogrona zielone'
    ];
  }
}
