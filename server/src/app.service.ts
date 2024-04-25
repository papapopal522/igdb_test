import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
 private readonly dataPath = path.join(__dirname, '../src/', 'data', 'data.json');

 async getData(): Promise<any> {
  const data = fs.promises.readFile(this.dataPath, 'utf-8');
  return JSON.parse(await data);
 }

}
