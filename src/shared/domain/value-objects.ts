export class ValueObject<T> {
  constructor(private value: T) {}

  toValue() {
    return this.value
  }
}