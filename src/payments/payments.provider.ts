import { Application } from './entities/application.entity';
import { APP_REPOSITORY } from '../constants';

export const applicationsProviders = [{
    provide: APP_REPOSITORY,
    useValue: Application,
}];