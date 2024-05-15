import { ObjectId } from 'mongodb';

/**
 * Module with the basic utilities.
 */
const basicUtils = {
  /**
   * Checks if Id is Valid for Mongo.
   *
   * @id {string|number} id to be evaluated.
   * @return {boolean} true if valid, false if not valid.
   */
  isValidId(id) {
    try {
      ObjectId(id);
    } catch (err) {
      return false;
    }
    return true;
  },
};

export default basicUtils;
