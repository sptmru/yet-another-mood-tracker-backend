import { FastifyReply, FastifyRequest } from 'fastify';
import { ReasonService } from '../../services/reason/reason.service';
import { GetReasonByIdDTO } from '../../domain/dto/reason/get-reason-by-id.dto';
import { FindReasonByNameDTO } from '../../domain/dto/reason/find-reason-by-name.dto';
import { AddReasonDTO } from '../../domain/dto/reason/add-reason.dto';
import { DeleteReasonDTO } from '../../domain/dto/reason/delete-reason.dto';
import { UpdateReasonDTO } from '../../domain/dto/reason/update-reason.dto';

export class ReasonController {
  static async getReasons(_request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    try {
      const reasons = await ReasonService.getReasons();
      return reply.code(200).send(reasons);
    } catch (err) {
      return reply.code(500).send({ error: err.message });
    }
  }

  static async getReasonById(
    request: FastifyRequest<{ Params: GetReasonByIdDTO }>,
    reply: FastifyReply
  ): Promise<FastifyReply> {
    try {
      const { id } = request.params;
      const reason = await ReasonService.getReasonById(id);
      if (!reason) {
        return reply.code(404).send({ error: `Reason with id ${id} not found` });
      } else {
        return reply.code(200).send(reason);
      }
    } catch (err) {
      return reply.code(500).send({ error: err.message });
    }
  }

  static async findReasonByName(
    request: FastifyRequest<{ Params: FindReasonByNameDTO }>,
    reply: FastifyReply
  ): Promise<FastifyReply> {
    try {
      const { name } = request.params;
      const reason = await ReasonService.findReasonByName(name);
      if (!reason) {
        return reply.code(404).send({ error: `Reason with name ${name} not found` });
      } else {
        return reply.code(200).send(reason);
      }
    } catch (err) {
      return reply.code(500).send({ error: err.message });
    }
  }

  static async addReason(request: FastifyRequest<{ Body: AddReasonDTO }>, reply: FastifyReply): Promise<FastifyReply> {
    try {
      const { name } = request.body;
      const reason = await ReasonService.addReason(name);
      return reply.code(201).send(reason);
    } catch (err) {
      return reply.code(500).send({ error: err.message });
    }
  }

  static async updateReason(
    request: FastifyRequest<{ Params: GetReasonByIdDTO; Body: UpdateReasonDTO }>,
    reply: FastifyReply
  ): Promise<FastifyReply> {
    try {
      const { id } = request.params;
      const { name } = request.body;
      const reason = await ReasonService.updateReason(id, name);
      if (!reason) {
        return reply.code(404).send({ error: `Reason with id ${id} not found` });
      } else {
        return reply.code(200).send(reason);
      }
    } catch (err) {
      return reply.code(500).send({ error: err.message });
    }
  }

  static async deleteReason(
    request: FastifyRequest<{ Params: DeleteReasonDTO }>,
    reply: FastifyReply
  ): Promise<FastifyReply> {
    try {
      const { id } = request.params;
      const result = await ReasonService.deleteReason(id);
      if (!result) {
        return reply.code(404).send({ error: `Reason with id ${id} not found` });
      } else {
        return reply.code(204).send();
      }
    } catch (err) {
      return reply.code(500).send({ error: err.message });
    }
  }
}
