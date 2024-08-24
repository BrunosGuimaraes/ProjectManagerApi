/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";

export class CreateProjectDto {
    @IsNotEmpty({message: "O nome do projeto não pode ser vazio"})
    name: string;

    @IsNotEmpty({message: "A descrição do projeto não pode ser vazio"})
    description: string
}
