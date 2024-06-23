import { ValueObject } from "../../shared/domain/value-objects";

export class IsEnabled extends ValueObject<boolean> {
  static create(status: string) {
    return new IsEnabled(status === 'enabled')
  }
}