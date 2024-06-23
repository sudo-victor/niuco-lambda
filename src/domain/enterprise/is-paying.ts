import { ValueObject } from "../../shared/domain/value-objects";

export class IsPaying extends ValueObject<boolean> {
  static create(role: string, status: string) {
    if (status === 'disabled') return new IsPaying(false)
    const payingRoles = ['editor', 'admin']
    return new IsPaying(payingRoles.includes(role))
  }
}