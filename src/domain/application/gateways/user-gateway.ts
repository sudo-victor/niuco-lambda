interface User {
  id: string
  name: string
  email: string
  status: string
  role: string
  last_activity: number
}

export abstract class UserGateway {
  abstract listUsers(): Promise<User[]>
}