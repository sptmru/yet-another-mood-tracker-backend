import { Reason } from '../../entities/Reason.entity';
import { dataSource } from '../../infrastructure/database/data-source';
import { logger } from '../../misc/Logger';

export class ReasonService {
  static async getReasons(): Promise<Reason[]> {
    logger.info('Getting all reasons');
    return await dataSource.getRepository(Reason).find();
  }

  static async getReasonById(id: string): Promise<Reason | null> {
    logger.info(`Getting reason with id ${id}`);
    return await dataSource.getRepository(Reason).findOne({ where: { id } });
  }

  static async findReasonByName(name: string): Promise<Reason | null> {
    logger.info(`Finding reason with name ${name}`);
    return await dataSource.getRepository(Reason).findOne({ where: { name } });
  }

  static async addReason(name: string): Promise<Reason> {
    logger.info(`Adding reason with name ${name}`);
    const reason = new Reason();
    reason.name = name;
    return await dataSource.getRepository(Reason).save(reason);
  }

  static async updateReason(id: string, name: string): Promise<Reason | null> {
    logger.info(`Updating reason with id ${id}`);
    const reason = await dataSource.getRepository(Reason).findOne({ where: { id } });
    if (!reason) {
      logger.error(`Cannot update reason: reason with id ${id} not found`);
      return null;
    }
    reason.name = name;
    return await dataSource.getRepository(Reason).save(reason);
  }

  static async deleteReason(id: string): Promise<boolean> {
    logger.info(`Deleting reason with id ${id}`);
    const reason = await dataSource.getRepository(Reason).findOne({ where: { id } });
    if (!reason) {
      logger.error(`Cannot delete reason: reason with id ${id} not found`);
      return false;
    }
    await dataSource.getRepository(Reason).remove(reason);
    return true;
  }
}
