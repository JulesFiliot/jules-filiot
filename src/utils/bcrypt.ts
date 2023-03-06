import * as bcrypt from 'bcryptjs';

export function hashPassword(rawPass: string) {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(rawPass, salt);
}

export function comparePassword(rawPass: string, hash: string) {
  return bcrypt.compareSync(rawPass, hash);
}
