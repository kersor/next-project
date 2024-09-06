import { Injectable, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
    constructor (
        private jwt: JwtService,
        private userService: UserService
    ) {}


    async login (dto: AuthDto) {
        
    }

    private issueToken (userId: number) {
        const payload = {id: userId}
        const accessToken = this.jwt.sign(payload, {
            expiresIn: '1h'
        })

        const refreshToken = this.jwt.sign(payload, {
            expiresIn: '7d'
        })
    }

}
