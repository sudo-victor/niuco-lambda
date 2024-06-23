import { describe, it, beforeEach, expect, vi } from "vitest";
import { ListUsersUsecase } from "./list-users-usecase";
import { UserGateway } from "./gateways/user-gateway";

let userGateway: UserGateway
let sut: ListUsersUsecase

describe("[Usecase] List users", () => {
  beforeEach(() => {
    userGateway = { listUsers: vi.fn() } as UserGateway
    sut = new ListUsersUsecase(userGateway)
  })

  it("should be able to list formatted users", async () => {
    vi.spyOn(userGateway, 'listUsers').mockResolvedValue([
      {
        "id": "52d609a3-0690-4043-8415-e78a2bd968f4",
        "name": "Homer Simpson",
        "email": "homer.simpson@hotmail.com",
        "status": "enabled",
        "role": "editor",
        "last_activity": 1649241478
      },
      {
        "id": "7288a49f-d9da-48bf-a258-baaf9984c8c1",
        "name": "Bruce Wayne",
        "email": "bruce.wayne@niuco.com.br",
        "status": "disabled",
        "role": "editor",
        "last_activity": 1586169478
      }
    ])
    const result = await sut.execute()
    const expected = [
      {
        id: '52d609a3-0690-4043-8415-e78a2bd968f4',
        name: 'Homer Simpson',
        email: 'ho*****on@hotmail.com',
        isPaying: true,
        isEnabled: true,
        lastActivity: '2022-04-06T10:37:58.000Z'
      },
      {
        id: '7288a49f-d9da-48bf-a258-baaf9984c8c1',
        name: 'Bruce Wayne',
        email: 'bruce.wayne@niuco.com.br',
        isPaying: false,
        isEnabled: false,
        lastActivity: '2020-04-06T10:37:58.000Z'
      }
    ]
    expect(result.isRight()).toBeTruthy()
    expect(result.isLeft()).toBeFalsy()
    expect(result.value).toStrictEqual(expected)
  })

  it("should not be able to list formatted users with unexpected error", async () => {
    vi.spyOn(userGateway, 'listUsers').mockRejectedValue(Error('Unexpected error'))
    const result = await sut.execute()
    const expected = 'Unexpected error'
    expect(result.isLeft()).toBeTruthy()
    expect(result.isRight()).toBeFalsy()
    expect(result.value).toStrictEqual(expected)
  })
})