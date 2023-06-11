import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface ApplicationState {
    counter: CounterSchema;
    user: UserSchema;
    login: LoginSchema;
}
