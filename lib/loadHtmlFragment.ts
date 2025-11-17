import { readFileSync } from 'fs';
import { join } from 'path';

/**
 * Reads an HTML fragment from the /data directory.
 */
export function loadHtmlFragment(fileName: string) {
  try {
    return readFileSync(join(process.cwd(), 'data', fileName), 'utf8');
  } catch (error) {
    console.error(`Failed to load HTML fragment: ${fileName}`, error);
    return '';
  }
}

