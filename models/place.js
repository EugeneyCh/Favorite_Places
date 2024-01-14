class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; //{ lat:123.123456, lng:123.123456}
    this.id = new Date().toString() + Math.random().toString();
  }
}
