class Inventory {
  constructor() {
    this._count = 1;
    this._storage = [];
    this.add({
      id: 4,
      name: "dataset-1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet quam a lacus egestas fringilla et in ipsum. Cras laoreet ipsum placerat eros accumsan commodo. Vivamus tempor enim a pellentesque euismod. Quisque malesuada auctor augue ac eleifend. Fusce nec facilisis risus. Pellentesque vulputate vestibulum tortor sed pharetra. Nullam at ipsum sit amet leo luctus egestas nec et nisi. Mauris eget metus et nisi maximus maximus.",
      gear: "hook",
      targetFish: "Moano",
      debrisPresent: "",
      message: ""

    });
    this.add({
      id: 5,
      name: "dataset-2",
      description: "Nullam pharetra tortor in nibh tempor blandit. Mauris blandit nibh eget elit vehicula, quis lobortis lectus ultricies. Vivamus enim lacus, laoreet vitae scelerisque eu, pellentesque vitae risus. Donec vitae sapien vitae purus rutrum pulvinar. Sed vel vehicula dolor, eget rhoncus ligula. Suspendisse lacinia arcu gravida, ultrices ipsum eu, ornare lorem.",
      gear: "net",
      targetFish: "spotted boxfish",
      debrisPresent: "",
      message: ""
    });
    this.add({
      id: 5,
      name: "dataset-3",
      description: "Sed malesuada odio vitae facilisis bibendum. Nullam ornare molestie mauris. Fusce sit amet blandit odio. Cras orci nibh, lobortis eget lacinia id, feugiat ac nulla.",
      gear: "net",
      targetFish: "pacific cornet fish",
      debrisPresent: "",
      message: ""
    });
  }

  add(item) {
    this._storage.push(item);
    this._count++;
    // console.log(this._storage)
    return item.id;
  }

  getItemById(id) {
    console.log('DS_id: ', id)
    return this._storage.filter(item => id == item.id)[0];
  }
}

module.exports = Inventory;