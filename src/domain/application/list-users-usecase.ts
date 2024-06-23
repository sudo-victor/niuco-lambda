import { Either } from "../../shared/either";
import { User } from "../enterprise/user";
import { UserGateway } from "./gateways/user-gateway";

export class ListUsersUsecase {
  constructor(private userGateway: UserGateway) {}

  async execute(): Promise<Either> {
    try {
      const users = await this.userGateway.listUsers()
      const result = users.map(user => User.create(user).toOutput())
      return Either.right(result)
    } catch(err) {
      return Either.left(err.message)
    }
  }
}