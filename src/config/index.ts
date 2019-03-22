/* tslint:disable:no-empty */

import dotenv from 'dotenv'

export default class Config {
  constructor() {}
  public init() {
    dotenv.config()
  }
}
