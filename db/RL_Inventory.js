class ReportLog {
  constructor() {
    this._count = 1;
    this._storage = [];
    this.add({
      name: 'andy hillstrand',
      description: 'time bandit',
      primaryGear: 'trawling',
      fishingFrom: 'private vessel',
      pierDock: 'honolulu',
      targetFish: 'king crab',
      debrisPresent: 'medium',
      catchImg: '../images/magikarp.jpg',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat, magna a consequat pellentesque, quam leo rhoncus metus, at auctor ipsum nulla ut odio. Morbi nisi metus, dapibus et nibh id, vehicula vestibulum ligula. Nunc eu nisl eget nunc aliquet commodo. Suspendisse eu libero id odio hendrerit mollis. Praesent posuere egestas leo vel pretium. Duis fermentum varius ante, vitae blandit lacus interdum venenatis.'
    });
    this.add({
      name: 'phil harris',
      description: 'cornelia marie',
      primaryGear: 'long lines',
      fishingFrom: 'chartered vessel',
      pierDock: 'hilo',
      targetFish: 'opilio',
      debrisPresent: 'high',
      catchImg: '../images/happycrab.png',
      message: 'Nam vel dignissim nisi. Sed egestas facilisis mi vitae mattis. Nunc ultricies sollicitudin velit et luctus. Suspendisse sed massa neque. Vestibulum lacinia, augue sit amet fringilla imperdiet, lacus orci placerat dolor, ac aliquam neque eros non est. Aenean et vehicula ipsum. Donec bibendum venenatis est non laoreet. Integer euismod, magna ac porttitor pellentesque, nisl diam varius urna, at aliquam nisl quam non mi.'
    });

  }

  all() {
    return [...this._storage];
  }

  add(report) {
    this._storage.push(report);
    this._count++;
    return report.id;
  }
}

module.exports = ReportLog;