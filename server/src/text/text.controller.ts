import { TextAnalyticsDto } from './dto/text-analytics.dto';
import { TextService } from './text.service';
import { Body, Controller, Get, Post, Req } from '@nestjs/common';

@Controller('text')
export class TextController {
  constructor(private readonly textService: TextService) {}
  @Get()
  getText() {
    return 'Hello, World!';
  }

  @Post('/word-count')
  async getTheNumberOfWords(
    @Req() _request: any,
    @Body() body: TextAnalyticsDto,
  ) {
    return await this.textService.getTheNumberOfWords(body.text);
  }

  @Post('/character-count')
  async getTheNumberOfCharacters(
    @Req() _request: any,
    @Body() body: TextAnalyticsDto,
  ) {
    return await this.textService.getTheNumberOfCharacters(body.text);
  }

  @Post('/sentence-count')
  async getTheNumberOfSentences(
    @Req() _request: any,
    @Body() body: TextAnalyticsDto,
  ) {
    return await this.textService.getTheNumberOfSentences(body.text);
  }

  @Post('/paragraph-count')
  async getTheNumberOfParagraphs(
    @Req() _request: any,
    @Body() body: TextAnalyticsDto,
  ) {
    return await this.textService.getTheNumberOfParagraphs(body.text);
  }

  @Post('longest-word')
  async getTheLongestWordInParagraphs(
    @Req() _request: any,
    @Body() body: TextAnalyticsDto,
  ) {
    return await this.textService.getTheLongestWordInParagraphs(body.text);
  }
}
