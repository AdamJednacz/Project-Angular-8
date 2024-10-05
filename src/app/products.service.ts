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
      'Bakłażan', 'Ananas', 'Botwina', 'Arbuz', 'Brokuł', 'Awokado', 'Buraki', 'Banan',
      'Cebula', 'Bataty', 'Cebula czerwona', 'Brzoskwinia', 'Cukinia', 'Cytryna', 'Czosnek', 'Fisalis',
      'Fasolka szparagowa zielona', 'Granat', 'Fasolka szparagowa żółta', 'Grapefruit',
      'Kabaczek', 'Karambola', 'Kalafior', 'Kiełki', 'Kalarepa', 'Kiwi', 'Kapusta biała', 'Limonka',
      'Kapusta czerwona', 'Mandarynka', 'Kapusta pekińska', 'Mango', 'Kapusta włoska', 'Melony',
      'Marchew', 'Morela', 'Marchew młoda', 'Nektarynka', 'Ogórki gruntowe', 'Papryka czerwona',
      'Papryka zielona', 'Papryka żółta', 'Pomarańcza', 'Peperoni', 'Pomidorki Cherry', 'Pietruszka',
      'Roszponka', 'Por', 'Rukola', 'Seler', 'Sałata mix', 'Seler zielony', 'Seler naciowy', 'Szpinak baby',
      'Śliwka zachodnia', 'Winogrona czerwone', 'Winogrona zielone', 'Boczniaki', 'Bób', 'Gruszki',
      'Bazylia', 'Jabłka drobne', 'Cebula zielona', 'Jabłka grube', 'Chili', 'Ogórki', 'Cykoria biała',
      'Ogórki małosolne', 'Cykoria czerwona', 'Pieczarki', 'Jarmuż', 'Pomidory', 'Kalarepa', 'Pomidory malinowe',
      'Koper', 'Lodowa', 'Lubczyk', 'Mięta', 'Natka', 'Natka dekoracyjna', 'Peperoni', 'Radicchio', 'Rozmaryn',
      'Borówki', 'Rzepa biała', 'Brzoskwinie', 'Rzodkiewka', 'Czereśnie', 'Sałata', 'Jeżyny',
      'Sałata dekoracyjna czerwona', 'Maliny', 'Sałata dekoracyjna zielona', 'Pomidor Lima', 'Sałata freeze',
      'Porzeczki', 'Sałata rzymska', 'Śliwki polskie duże', 'Seler naciowy', 'Śliwki polskie małe',
      'Szczaw', 'Truskawki', 'Szczypiorek', 'Szpinak', 'Tymianek',  "Maliny",
      "Borówki",
      "Figi",
      "Groszek",
      "Groszek cukrowy",
      "Groszek czepny",
      "Kiełki groszku",
      "Porzeczki",
      "Pak choy",
      "Koper włoski",
      "Cząber",
      "Kiełki rzodkiewki",
      "Kiełki brokuła",
      "Kiełki lucerny",
      "Kiełki buraka",
      "Czosnek obrany",
      "Pomidor koktajlowy mix",
      "Storczyki",
      "Bratki",
      "Jarzynka",
      "Mięta cięta",
      "Bazylia cięta",
      "Kiełki słonecznika",
      "Marchewki kolorowe",
      "Szparagi",
      "Marakuja"
    ];
  }
}
