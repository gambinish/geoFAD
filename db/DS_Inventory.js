class Inventory {
  constructor() {
    this._storage = [];
    this.add({
      id: 1,
      longitude: -155.94833333,
      latitude: 19.19833333,
      name: 'B',
      island: 'Hawaii'
    });
    this.add({
      id: 2,
      longitude: -155.98666667,
      latitude: 19.385,
      name: 'C',
      island: 'Hawaii'
    });
    this.add({
      id: 3,
      longitude: -155.95666667,
      latitude: 19.07666667,
      name: 'TT',
      island: 'Hawaii'
    });
    this.add({
      id: 4,
      longitude: -155.95166667,
      latitude: 19.28,
      name: 'UU',
      island: 'Hawaii'
    });
    this.add({
      id: 5,
      longitude: -156.03166667,
      latitude: 19.585,
      name: 'VV',
      island: 'Hawaii'
    });
    this.add({
      id: 6,
      longitude: -156.19333333,
      latitude: 19.87666667,
      name: 'OT',
      island: 'Hawaii'
    });
    this.add({
      id: 7,
      longitude: -155.39166667,
      latitude: 19.13,
      name: 'RN',
      island: 'Hawaii'
    });
    this.add({
      id: 8,
      longitude: -154.98333333,
      latitude: 19.97666667,
      name: 'HK',
      island: 'Hawaii'
    });
    this.add({
      id: 9,
      longitude: -156.26666667,
      latitude: 20.53333333,
      name: 'GG',
      island: 'Maui'
    });
    this.add({
      id: 10,
      longitude: -156.63333333,
      latitude: 20.40333333,
      name: 'JJ',
      island: 'Maui'
    });
    this.add({
      id: 11,
      longitude: -157.14166667,
      latitude: 20.59833333,
      name: 'MC',
      island: 'Maui'
    });
    this.add({
      id: 12,
      longitude: -156.15833333,
      latitude: 20.54833333,
      name: 'NL',
      island: 'Maui'
    });
    this.add({
      id: 13,
      longitude: -156.58333333,
      latitude: 21.34833333,
      name: 'N',
      island: 'Maui'
    });
    this.add({
      id: 14,
      longitude: -156.485,
      latitude: 20.45,
      name: 'HS',
      island: 'Maui'
    });
    this.add({
      id: 15,
      longitude: -158.14666667,
      latitude: 21.83333333,
      name: 'J',
      island: 'Oahu'
    });
    this.add({
      id: 16,
      longitude: -157.81166667,
      latitude: 20.77333333,
      name: 'P',
      island: 'Oahu'
    });
    this.add({
      id: 17,
      longitude: -158.28166667,
      latitude: 21.45833333,
      name: 'R',
      island: 'Oahu'
    });
    this.add({
      id: 18,
      longitude: -158.24666667,
      latitude: 21.39666667,
      name: 'S',
      island: 'Oahu'
    });
    this.add({
      id: 19,
      longitude: -157.43,
      latitude: 21.50333333,
      name: 'T',
      island: 'Oahu'
    });
    this.add({
      id: 20,
      longitude: -157.69166667,
      latitude: 21.58166667,
      name: 'U',
      island: 'Oahu'
    });
    this.add({
      id: 21,
      longitude: -158.31333333,
      latitude: 21.53833333,
      name: 'V',
      island: 'Oahu'
    });
    this.add({
      id: 22,
      longitude: -157.99333333,
      latitude: 21.86333333,
      name: 'X',
      island: 'Oahu'
    });
    this.add({
      id: 23,
      longitude: -158.035,
      latitude: 21.035,
      name: 'HH',
      island: 'Oahu'
    });
    this.add({
      id: 24,
      longitude: -158.22166667,
      latitude: 21.74666667,
      name: 'II',
      island: 'Oahu'
    });
    this.add({
      id: 25,
      longitude: -157.755,
      latitude: 21.74833333,
      name: 'LL',
      island: 'Oahu'
    });
    this.add({
      id: 26,
      longitude: -158.15166667,
      latitude: 21.15,
      name: 'BO',
      island: 'Oahu'
    });
    this.add({
      id: 27,
      longitude: -159.30833333,
      latitude: 21.875,
      name: 'Z',
      island: 'Kauai'
    });
    this.add({
      id: 28,
      longitude: -159.61,
      latitude: 21.82166667,
      name: 'AA',
      island: 'Kauai'
    });
    this.add({
      id: 29,
      longitude: -159.23166667,
      latitude: 22.22666667,
      name: 'BB',
      island: 'Kauai'
    });
    this.add({
      id: 30,
      longitude: -159.35833333,
      latitude: 21.80666667,
      name: 'CK',
      island: 'Kauai'
    });
    this.add({
      id: 31,
      longitude: -159.22833333,
      latitude: 22.125,
      name: 'DK',
      island: 'Kauai'
    });
    this.add({
      id: 32,
      longitude: -159.49166667,
      latitude: 22.32666667,
      name: 'EK',
      island: 'Kauai'
    });
    this.add({
      id: 33,
      longitude: -159.57,
      latitude: 21.795,
      name: 'PP',
      island: 'Kauai'
    });
    this.add({
      id: 34,
      longitude: -159.215,
      latitude: 22.02166667,
      name: 'WK',
      island: 'Kauai'
    });
    this.add({
      id: 35,
      longitude: -159.73166667,
      latitude: 21.865,
      name: 'KK',
      island: 'Kauai'
    });
    this.add({ id: 36, longitude: 0, latitude: 0, name: '', island: '' });
    this.add({ id: 37, longitude: 0, latitude: 0, name: '', island: '' });
    this.add({ id: 38, longitude: 0, latitude: 0, name: '', island: '' });
    this.add({ id: 39, longitude: 0, latitude: 0, name: '', island: '' });

  }

  add(item) {
    this._storage.push(item);
    this._count++;
    return item.id;
  }

  getItemById(id) {
    return this._storage.filter(item => id == item.id)[0];
  }
}

module.exports = Inventory;