import { describe, it, expect } from "vitest"
import { IsPaying } from "./is-paying"

describe("[Value Object] IsPaying", () => {
  it.each([
    'viewer',
    'admin',
    'system',
    'editor',
  ])("should be able to create an instance of IsPaying as false when user is disabled", (input) => {
    const result = IsPaying.create(input, 'disabled')
    expect(result?.toValue()).toBeFalsy()
  })

  it.each([
    'viewer',
    'system',
  ])("should be able to create an instance of IsPaying as falsy", (input) => {
    const result = IsPaying.create(input, 'enabled')
    expect(result?.toValue()).toBeFalsy()
  })

  it.each([
    'admin',
    'editor',
  ])("should be able to create an instance of IsPaying as truthy", (input) => {
    const result = IsPaying.create(input, 'enabled')
    expect(result?.toValue()).toBeTruthy()
  })
})