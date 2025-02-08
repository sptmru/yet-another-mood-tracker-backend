import { FastifyReply, FastifyRequest } from 'fastify';
import { HealthService } from '../../services/health/health.service';
import { logger } from '../../misc/Logger';
import { HealthCheckResult } from '../../domain/misc/health/healthcheck-result.enum';

export class HealthController {
  static healthCheck(_request: FastifyRequest, reply: FastifyReply): FastifyReply {
    try {
      const healthCheckResult = HealthService.healthCheck();
      if (healthCheckResult) {
        return reply.code(200).send({ status: HealthCheckResult.UP });
      } else {
        return reply.code(500).send({ status: HealthCheckResult.DOWN });
      }
    } catch (err) {
      logger.error(`Health check failed: ${err.message}`);
      return reply.code(500).send({ status: HealthCheckResult.DOWN, error: err.message });
    }
  }
}
