import fs from 'fs';
import path from 'path';
import { TItem } from '@/types/Item';

const dataFilePath: string = path.join(process.cwd(), 'data.json');

export function getData(): TItem[] {
    try {
        return JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));
    } catch (error) {
        console.error('Error reading data file:', error);
        return [];
    }
}
