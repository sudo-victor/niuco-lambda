import { ListUsersUsecase } from "./domain/application/list-users-usecase";
import { UserGatewaySaasMock } from "./external/user-gateway-saas-mock";

export class MakeListUser {
  static make() {
    const userGateway = new UserGatewaySaasMock()
    const usecase = new ListUsersUsecase(userGateway)
    return usecase
  }
}