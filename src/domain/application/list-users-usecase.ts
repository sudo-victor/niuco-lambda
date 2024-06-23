import { Either } from "../../shared/either";
import { logger } from "../../shared/utils/logger";
import { User } from "../enterprise/user";
import { UserGateway } from "./gateways/user-gateway";

export class ListUsersUsecase {
  constructor(private userGateway: UserGateway) {}

  async execute(): Promise<Either> {
    try {
      logger.info('Fetching users from saas...')
      const users = await this.userGateway.listUsers()
      logger.info('Formatting users...')
      const result = users.map(user => User.create(user).toOutput())
      logger.info("That's all, folks!")
      return Either.right(result)
    } catch(err) {
      logger.error(err.message)
      return Either.left(err.message)
    }
  }
}