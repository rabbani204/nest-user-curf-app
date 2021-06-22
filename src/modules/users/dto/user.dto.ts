import { IsNotEmpty, MinLength } from 'class-validator';

export class UserDto {

    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    readonly mobile: string;

    @IsNotEmpty()
    @MinLength(6)
    readonly password: string;

    @IsNotEmpty()
    readonly fcm: string;
}
