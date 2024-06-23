import { describe, it, expect } from "vitest"
import { User } from "./user"

describe("[Entity] User", () => {
  it("should be able to create an user", () => {
    const input = {
      id: "52d609a3-0690-4043-8415-e78a2bd968f4",
      name: "Homer Simpson",
      email: "homer.simpson@hotmail.com",
      status: "enabled",
      role: "editor",
      last_activity: 1649241478
    }
    const result = User.create(input)
    const expected = {
      id: '52d609a3-0690-4043-8415-e78a2bd968f4',
      name: 'Homer Simpson',
      email: 'ho*****on@hotmail.com',
      isPaying: true,
      isEnabled: true,
      lastActivity: '2022-04-06T10:37:58.000Z'
    }
    expect(result.toOutput()).toStrictEqual(expected)
  })
})