import { Controller, Get, Post } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('/quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Get()
  async findAll() {}

  @Post()
  async create() {}
}
