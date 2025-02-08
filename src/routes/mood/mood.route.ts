import { FastifyInstance } from 'fastify';
import { MoodController } from '../../controllers/mood/mood.controller';
import {
  getMoodByIdRouteOptions,
  getMoodsWithReasonsRouteOptions,
  getMoodsRouteOptions,
  addMoodRouteOptions,
  updateMoodRouteOptions,
  deleteMoodRouteOptions,
} from './mood.route-options';

export class MoodRoute {
  public prefix = '/moods';

  // eslint-disable-next-line require-await
  async routes(fastify: FastifyInstance): Promise<void> {
    fastify.get('', getMoodsRouteOptions, MoodController.getMoods);
    fastify.get('/moods-with-reasons', getMoodsWithReasonsRouteOptions, MoodController.getMoodsWithReasons);
    fastify.get('/:id', getMoodByIdRouteOptions, MoodController.getMoodById);
    fastify.post('', addMoodRouteOptions, MoodController.addMood);
    fastify.put('/:id', updateMoodRouteOptions, MoodController.updateMood);
    fastify.delete('/:id', deleteMoodRouteOptions, MoodController.deleteMood);
  }
}
