class Card {

  private _value: number;
  private _imageURL: string;

  constructor(value: number, imageURL: string) {
    this._value = value;
    this._imageURL = imageURL;
  }

  public getValue(): number {
    return this._value; 
  }

  public getImageURL(): string {
    return this._imageURL;
  }

}
