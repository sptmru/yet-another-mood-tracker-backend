import { FastifyInstance } from 'fastify';
import { ReasonController } from '../../controllers/reason/reason.controller';
import {
  addReasonRouteOptions,
  deleteReasonRouteOptions,
  findReasonByNameRouteOptions,
  getReasonByIdRouteOptions,
  getReasonsRouteOptions,
  updateReasonRouteOptions,
} from './reason.route-options';

export class ReasonRoute {
  public prefix = '/reasons';

  // eslint-disable-next-line require-await
  async routes(fastify: FastifyInstance): Promise<void> {
    fastify.get('', getReasonsRouteOptions, ReasonController.getReasons);
    fastify.get('/:id', getReasonByIdRouteOptions, ReasonController.getReasonById);
    fastify.get('/name/:name', findReasonByNameRouteOptions, ReasonController.findReasonByName);
    fastify.post('', addReasonRouteOptions, ReasonController.addReason);
    fastify.delete('/:id', deleteReasonRouteOptions, ReasonController.deleteReason);
    fastify.put('/:id', updateReasonRouteOptions, ReasonController.updateReason);
  }
}
