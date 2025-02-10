import { FastifyInstance } from 'fastify';

import { ReasonController } from '../../controllers/reason/reason.controller';
import { getReasonsRouteOptions } from './options/get-reasons.route-options';
import { getReasonByIdRouteOptions } from './options/get-reason-by-id.route-options';
import { findReasonByNameRouteOptions } from './options/find-reason-by-name.route-options';
import { addReasonRouteOptions } from './options/add-reason.route-options';
import { deleteReasonRouteOptions } from './options/delete-reason.route-options';
import { updateReasonRouteOptions } from './options/update-reason.route-options';

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
