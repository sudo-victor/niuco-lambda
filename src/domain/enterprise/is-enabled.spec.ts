import { describe, it, expect } from "vitest";
import { IsEnabled } from "./is-enabled";

describe("[Value Object] IsEnabled", () => {
  it("should be able to create an instance of IsEnabled with value 'true'", () => {
    const result = IsEnabled.create('enabled')
    expect(result.toValue()).toBeTruthy()
  })
  it("should be able to create an instance of IsEnabled with value 'true'", () => {
    const result = IsEnabled.create('disabled')
    expect(result.toValue()).toBeFalsy()
  })
})