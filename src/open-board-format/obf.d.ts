/**
 * TypeScript Definitions for Open Board Format (OBF) and Open Board Zipped (OBZ)
 *
 * The Open Board Format (.obf) is a standardized file format designed to facilitate
 * the sharing of augmentative and alternative communication (AAC) boards between different
 * applications and platforms. An .obf file contains the structure, layout, and content
 * of an AAC board in JSON format.
 *
 * The Open Board Zipped (.obz) format packages multiple .obf files along with their
 * associated resources (images, sounds) into a single zipped file, allowing for the
 * distribution of complete AAC board sets.
 *
 * These definitions provide a framework for working with .obf and .obz files within
 * TypeScript projects, enhancing interoperability and ease of use across AAC applications.
 */

/**
 * License information for boards, images, and sounds.
 */
interface License {
  type: string; // License type (e.g., "CC-By-SA")
  copyright_notice_url: string; // URL to copyright notice or license text
  source_url?: string; // Original content source URL
  author_name: string; // Author or copyright holder's name
  author_url?: string; // Author's website or profile URL
  author_email?: string; // Author's email address
}

/**
 * Symbol set for images.
 */
interface SymbolSet {
  set: string; // Symbol set name (e.g., "SymbolStix")
  filename: string; // Filename within the symbol set
}

/**
 * Image entity within a board.
 */
interface Image {
  id: string; // Unique ID within the board
  url?: string; // External URL of the image
  data?: string; // Embedded image data (base64)
  path?: string; // Path within .obz package
  width: number; // Image width in pixels
  height: number; // Image height in pixels
  content_type: string; // MIME type of the image
  license?: License; // Licensing information
  symbol?: SymbolSet; // Reference to a proprietary symbol set
}

/**
 * Sound entity within a board.
 */
interface Sound {
  id: string; // Unique ID within the board
  url?: string; // External URL of the sound
  data?: string; // Embedded sound data (base64)
  path?: string; // Path within .obz package
  content_type: string; // MIME type of the sound
  license?: License; // Licensing information
}

/**
 * Configuration for linking to other boards.
 */
interface LoadBoard {
  id?: string; // ID of the board to load
  name?: string; // Name of the board to load
  data_url?: string; // Endpoint providing data about the board
  url?: string; // URL to the board's web page
  path?: string; // Path to the board within .obz package
}

/**
 * Button entity on a board.
 */
interface Button {
  id: string; // Unique ID within the board
  image_id?: string; // ID of the associated image
  label?: string; // Text label for the button
  border_color?: string; // CSS color value for border
  background_color?: string; // CSS color value for background
  load_board?: LoadBoard; // Linking to another board
  vocalization?: string; // Custom vocalization text
  action?: string; // Associated action (e.g., "+a", ":clear")
  actions?: string[]; // Array of actions for multi-action buttons
}

/**
 * Grid layout for organizing buttons on a board.
 */
interface Grid {
  rows: number; // Number of rows in the grid
  columns: number; // Number of columns in the grid
  order?: (string | null)[][]; // Button order, row by row
}

/**
 * Main structure of a board in .obf format.
 */
interface Board {
  format?: string; // Format version (e.g., "open-board-0.1")
  id: string; // Board's unique identifier
  locale?: string; // IETF language tag (e.g., "en")
  url?: string; // URL to board's online location
  name?: string; // Board name
  description_html?: string; // HTML description of the board
  buttons?: Button[]; // Array of buttons
  grid?: Grid; // Grid layout
  images?: Image[]; // Array of images
  sounds?: Sound[]; // Array of sounds
  license?: License; // Licensing information
}

/**
 * Structure for .obz files, encapsulating multiple .obf boards.
 */
interface Manifest {
  format: string; // Format version for .obz files
  root: string; // Path to the primary .obf file
  paths: {
    boards: Record<string, string>; // Board ID to path mappings
    images: Record<string, string>; // Image ID to path mappings
    sounds: Record<string, string>; // Sound ID to path mappings
  };
}

export {
  Board,
  Button,
  Grid,
  Image,
  License,
  LoadBoard,
  Manifest,
  Sound,
  SymbolSet,
};
