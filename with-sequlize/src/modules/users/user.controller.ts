import {Controller, Delete, Get, Param} from "@nestjs/common";
import {UserService} from "./user.service";

@Controller("/users")
export class UserController {
    constructor(private userService: UserService) {
    }

    @Get("/")
    async findAll ()  {
        return await this.userService.findAll();
    }

    @Delete("/")
    async deleteAll ()  {
        return await this.userService.deleteAll();
    }

    @Delete("/:id")
    async deleteOne (@Param('id') id: number)  {
        return await this.userService.deleteOne(id);
    }
}