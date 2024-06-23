import { Entity } from "../../shared/domain/entity";
import { Email } from "./email";
import { IsEnabled } from "./is-enabled";
import { IsPaying } from "./is-paying";

interface UserProps {
  id: string
  name: string
  email: Email
  isEnabled: IsEnabled
  isPaying: IsPaying
  lastActivity: string
}

interface CreateUserProps {
  id: string
  name: string
  email: string
  status: string
  role: string
  last_activity: number
}

export class User extends Entity<UserProps> {
  static create(props: CreateUserProps) {
    return new User({
      ...props,
      email: Email.create(props.email),
      isPaying: IsPaying.create(props.role, props.status),
      isEnabled: IsEnabled.create(props.status),
      lastActivity: new Date(props.last_activity * 1e3).toISOString()
    })
  }

  toOutput() {
    return {
      id: this.props.id,
      name: this.props.name,
      email: this.props.email.toValue(),
      isPaying: this.props.isPaying.toValue(),
      isEnabled: this.props.isEnabled.toValue(),
      lastActivity: this.props.lastActivity
    }
  }
}