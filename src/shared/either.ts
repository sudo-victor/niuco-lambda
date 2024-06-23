export class Either {
  constructor(public value: any) {}

  static right(value: any) {
    return new Right(value)
  }

  static left(value: any) {
    return new Left(value)
  }

  isRight() {
    return this instanceof Right
  }

  isLeft() {
    return this instanceof Left
  }
}

class Right extends Either {}

class Left extends Either {}