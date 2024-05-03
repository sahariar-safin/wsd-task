import { IsNotEmpty } from 'class-validator';

export class TextAnalyticsDto {
  @IsNotEmpty()
  text: string;
}
