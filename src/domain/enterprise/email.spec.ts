import { describe, it, expect } from "vitest";
import { Email } from "./email";

describe("[Value Object] Email", () => {
  it.each([
    'joao.silva@niuco.com.br',
    'victor.souto@niuco.com.br',
  ])("should be able to create an instance of Email with niuco domain", (input) => {
    const result = Email.create(input)
    expect(result.toValue()).toEqual(input)
  })

  it.each([
    { original: 'maria.oliveira@gmail.com', expected: 'ma*****ra@gmail.com' },
    { original: 'pedro.santos@yahoo.com', expected: 'pe*****os@yahoo.com' },
    { original: 'claudia.rodrigues@outlook.com', expected: 'cl*****es@outlook.com' },
  ])("should be able to create an instance of Email without niuco domain", (input) => {
    const result = Email.create(input.original)
    expect(result.toValue()).toEqual(input.expected)
  })
})