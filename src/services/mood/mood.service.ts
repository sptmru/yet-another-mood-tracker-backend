import { UpdateMoodDTO } from '../../domain/dto/mood/update-mood.dto';
import { Mood } from '../../entities/Mood.entity';
import { Reason } from '../../entities/Reason.entity';
import { dataSource } from '../../infrastructure/database/data-source';
import { logger } from '../../misc/Logger';

export class MoodService {
  static async getMoods(): Promise<Mood[]> {
    logger.info('Getting all moods');
    return await dataSource.getRepository(Mood).find();
  }

  static async getMoodsWithReasons(): Promise<Mood[]> {
    logger.info('Getting all moods');
    return await dataSource.getRepository(Mood).find({ relations: ['reasons'] });
  }

  static async getMoodById(id: string): Promise<Mood | null> {
    logger.info(`Getting mood with id ${id}`);
    return await dataSource.getRepository(Mood).findOne({ where: { id }, relations: ['reasons'] });
  }

  static async addMood(date: string, rating: number, description?: string): Promise<Mood> {
    logger.info(`Adding mood with rating ${rating} and description ${description}`);
    const mood = new Mood();
    mood.date = date;
    mood.rating = rating;
    mood.description = description;
    return await dataSource.getRepository(Mood).save(mood);
  }

  static async updateMood(moodParams: UpdateMoodDTO): Promise<Mood | null> {
    const { id, date, rating, description, reasonIds } = moodParams;
    logger.info(`Updating mood with id ${id}`);
    const mood = await dataSource.getRepository(Mood).findOne({ where: { id } });
    if (!mood) {
      logger.error(`Cannot update mood: mood with id ${id} not found`);
      return null;
    }

    if (date !== undefined) mood.date = date;
    if (rating !== undefined) mood.rating = rating;
    if (description !== undefined) mood.description = description;
    if (reasonIds !== undefined) {
      mood.reasons = [];
      for (const reasonId of reasonIds) {
        const reason = await dataSource.getRepository(Reason).findOne({ where: { id: reasonId } });
        if (reason) {
          mood.reasons.push(reason);
        } else {
          logger.error(`Cannot add reason to mood: reason with id ${reasonId} not found`);
        }
      }
    }
    return await dataSource.getRepository(Mood).save(mood);
  }

  static async deleteMood(id: string): Promise<boolean> {
    logger.info(`Deleting mood with id ${id}`);
    const mood = await dataSource.getRepository(Mood).findOne({ where: { id } });
    if (!mood) {
      logger.error(`Cannot delete mood: mood with id ${id} not found`);
      return false;
    }

    await dataSource.getRepository(Mood).remove(mood);
    return true;
  }
}
