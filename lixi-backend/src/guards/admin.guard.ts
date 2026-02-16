import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private configService: ConfigService) { }

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers['authorization'];

        if (!authHeader) {
            throw new UnauthorizedException('Missing authorization header');
        }

        const token = authHeader.replace('Bearer ', '');
        const adminPassword = this.configService.get<string>('ADMIN_PASSWORD');

        if (token !== adminPassword) {
            throw new UnauthorizedException('Invalid admin credentials');
        }

        return true;
    }
}
