/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DetenuWhereInput } from "./DetenuWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DetenuListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DetenuWhereInput,
  })
  @ValidateNested()
  @Type(() => DetenuWhereInput)
  @IsOptional()
  @Field(() => DetenuWhereInput, {
    nullable: true,
  })
  every?: DetenuWhereInput;

  @ApiProperty({
    required: false,
    type: () => DetenuWhereInput,
  })
  @ValidateNested()
  @Type(() => DetenuWhereInput)
  @IsOptional()
  @Field(() => DetenuWhereInput, {
    nullable: true,
  })
  some?: DetenuWhereInput;

  @ApiProperty({
    required: false,
    type: () => DetenuWhereInput,
  })
  @ValidateNested()
  @Type(() => DetenuWhereInput)
  @IsOptional()
  @Field(() => DetenuWhereInput, {
    nullable: true,
  })
  none?: DetenuWhereInput;
}
export { DetenuListRelationFilter as DetenuListRelationFilter };