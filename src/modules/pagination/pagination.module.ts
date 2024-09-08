/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { PageService } from "./page/page.service";

@Module({
    providers: [PageService],
    exports: [PageService],
})
export class PaginationModule {}

