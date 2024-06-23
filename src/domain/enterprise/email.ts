import { ValueObject } from "../../shared/domain/value-objects";

export class Email extends ValueObject<string> {
  private constructor(value: string) {
    super(value)
  }
  
  static create(email: string) {
    const [emailAlias, emailDomain] = email.split("@")
    if (emailDomain === "niuco.com.br") return new Email(email)
    const firstTwoChars = emailAlias.substring(0,2)
    const lastTwoChars = emailAlias.substring(emailAlias.length - 2)
    const result = `${firstTwoChars}*****${lastTwoChars}@${emailDomain}`
    return new Email(result)
  }
}