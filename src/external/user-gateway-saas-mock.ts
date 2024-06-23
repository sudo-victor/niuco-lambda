import axios from "axios"
import { UserGateway } from "../domain/application/gateways/user-gateway";

export class UserGatewaySaasMock implements UserGateway {
  async listUsers() {
    const response = await axios(`${process.env.API_URL}/users`)
    return response.data
  }
}