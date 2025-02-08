import { FastifyReply, FastifyRequest } from 'fastify';
import { MoodService } from '../../services/mood/mood.service';
import { AddMoodDTO } from '../../domain/dto/mood/add-mood.dto';
import { GetMoodByIdDTO } from '../../domain/dto/mood/get-mood-by-id.dto';
import { UpdateMoodDTO } from '../../domain/dto/mood/update-mood.dto';
import { DeleteMoodDTO } from '../../domain/dto/mood/delete-mood.dto';

export class MoodController {
  static async getMoods(_request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    try {
      const moods = await MoodService.getMoods();
      return reply.code(200).send(moods);
    } catch (err) {
      return reply.code(500).send({ error: err.message });
    }
  }

  static async getMoodsWithReasons(_request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    try {
      const moods = await MoodService.getMoodsWithReasons();
      return reply.code(200).send(moods);
    } catch (err) {
      return reply.code(500).send({ error: err.message });
    }
  }

  static async getMoodById(
    request: FastifyRequest<{ Params: GetMoodByIdDTO }>,
    reply: FastifyReply
  ): Promise<FastifyReply> {
    try {
      const { id } = request.params;
      const mood = await MoodService.getMoodById(id);
      if (!mood) {
        return reply.code(404).send({ error: `Mood with id ${id} not found` });
      } else {
        return reply.code(200).send(mood);
      }
    } catch (err) {
      return reply.code(500).send({ error: err.message });
    }
  }

  static async addMood(request: FastifyRequest<{ Body: AddMoodDTO }>, reply: FastifyReply): Promise<FastifyReply> {
    try {
      const { date, rating, description } = request.body;
      const mood = await MoodService.addMood(date, rating, description);
      return reply.code(201).send(mood);
    } catch (err) {
      return reply.code(500).send({ error: err.message });
    }
  }

  static async updateMood(
    request: FastifyRequest<{ Params: GetMoodByIdDTO; Body: UpdateMoodDTO }>,
    reply: FastifyReply
  ): Promise<FastifyReply> {
    try {
      const { id } = request.params;
      const mood = await MoodService.updateMood(request.body);
      if (!mood) {
        return reply.code(404).send({ error: `Mood with id ${id} not found` });
      } else {
        return reply.code(200).send(mood);
      }
    } catch (err) {
      return reply.code(500).send({ error: err.message });
    }
  }

  static async deleteMood(
    request: FastifyRequest<{ Params: DeleteMoodDTO }>,
    reply: FastifyReply
  ): Promise<FastifyReply> {
    try {
      const { id } = request.params;
      const mood = await MoodService.deleteMood(id);
      if (!mood) {
        return reply.code(404).send({ error: `Mood with id ${id} not found` });
      } else {
        return reply.code(200).send(mood);
      }
    } catch (err) {
      return reply.code(500).send({ error: err.message });
    }
  }
}
