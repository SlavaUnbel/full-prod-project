import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';

export interface ApplicationState {
    counter: CounterSchema;
    user: UserSchema;
}
