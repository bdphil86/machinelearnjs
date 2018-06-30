import * as fs from 'fs';
import * as path from 'path';

/**
 * BaseProcessor implemented by the children processors
 */
export class BaseProcesser {
  private baseOutputDir = path.join(__dirname, '../md_out');
  constructor() {
    this.makeBaseDir();
  }
  protected makeBaseDir() {
    if (!fs.existsSync(this.baseOutputDir)) {
      fs.mkdirSync(this.baseOutputDir);
    }
  }
}
