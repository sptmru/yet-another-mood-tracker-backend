import { FastifyInstance } from 'fastify';

import { MoodController } from '../../controllers/mood/mood.controller';
import { getMoodsRouteOptions } from './options/get-moods.route-options';
import { getMoodsWithReasonsRouteOptions } from './options/get-moods-with-reasons.route-options';
import { getMoodByIdRouteOptions } from './options/get-mood-by-id.route-options';
import { addMoodRouteOptions } from './options/add-mood.route-options';
import { updateMoodRouteOptions } from './options/update-mood.route-options';
import { deleteMoodRouteOptions } from './options/delete-mood.route-options';

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
