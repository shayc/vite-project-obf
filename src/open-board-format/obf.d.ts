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

type ID = string;
type Extendable = Record<`ext_${string}`, unknown>;

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

interface Media extends Extendable {
  id: ID; // Unique ID within the board
  url?: string; // External URL of the media
  data?: string; // Embedded media data (base64)
  path?: string; // Path within .obz package
  content_type: string; // MIME type of the media
  license?: License; // Licensing information
}

/**
 * Image entity within a board.
 */
interface Image extends Media {
  width: number; // Image width in pixels
  height: number; // Image height in pixels
  symbol?: SymbolSet; // Reference to a proprietary symbol set
}

/**
 * Sound entity within a board.
 */
type Sound = Media;

/**
 * Configuration for linking to other boards.
 */
interface LoadBoard {
  id?: ID; // ID of the board to load
  name?: string; // Name of the board to load
  data_url?: string; // Endpoint providing data about the board
  url?: string; // URL to the board's web page
  path?: string; // Path to the board within .obz package
}

/**
 * Type of actions a button can perform.
 */
enum SpecialtyAction {
  Speak = ":speak", // Speak the current sentence box contents
  Clear = ":clear", // Clear the sentence box
  Home = ":home", // Return to the user’s home board
  Backspace = ":backspace", // Remove the last entry in the sentence box
  Space = ":space", // Finish spelling and start a new word
}

type SpellingAction = `+${string}`; // Append letter(s) to a currently-spelled word (e.g., "+a", "+oo")
type CustomAction = `:ext_${string}`; // Custom action prefix for app-specific extensions (e.g., ":ext_someaction")
type ButtonAction = SpecialtyAction | SpellingAction | CustomAction;

/**
 * Button entity on a board.
 */
interface Button extends Extendable {
  id: ID; // Unique ID within the board
  image_id?: ID; // ID of the associated image
  sound_id?: ID; // ID of the associated sound
  label?: string; // Text label for the button
  border_color?: string; // Color value for border represented as rgb or rgba
  background_color?: string; // Color value for background represented as rgb or rgba
  load_board?: LoadBoard; // Linking to another board
  vocalization?: string; // Custom vocalization text
  action?: ButtonAction; // Associated action (e.g., ":speak", ":clear")
  actions?: ButtonAction[]; // Array of actions for multi-action buttons
  top?: number; // For absolute positioning (0.0 to 1.0)
  left?: number; // For absolute positioning (0.0 to 1.0)
  width?: number; // For absolute positioning (0.0 to 1.0)
  height?: number; // For absolute positioning (0.0 to 1.0)
}

/**
 * Grid layout for organizing buttons on a board.
 */
interface Grid {
  rows: number; // Number of rows in the grid
  columns: number; // Number of columns in the grid
  order?: (ID | null)[][]; // Button order, row by row
}

/**
 * Main structure of a board in .obf format.
 */
interface Board extends Extendable {
  format?: string; // Format version (e.g., "open-board-0.1")
  id: ID; // Board's unique identifier
  locale?: string; // IETF language tag (e.g., "en")
  url?: string; // URL to board's online location
  name?: string; // Board name
  description_html?: string; // HTML description of the board
  buttons?: Button[]; // Array of buttons
  grid?: Grid; // Grid layout
  images?: Image[]; // Array of images
  sounds?: Sound[]; // Array of sounds
  strings?: Record<string, Record<string, string>>; // String lists for different locales (e.g., "en": {"hello": "Hello"}, "es": {"hello": "Hola"})
  license?: License; // Licensing information
}

/**
 * Structure for .obz files, encapsulating multiple .obf boards.
 */
interface Manifest {
  format: string; // Format version for .obz files
  root: string; // Path to the primary .obf file
  paths: {
    boards: Record<ID, string>; // Board ID to path mappings
    images: Record<ID, string>; // Image ID to path mappings
    sounds: Record<ID, string>; // Sound ID to path mappings
  };
}

export {
  Board,
  Button,
  ButtonAction,
  Grid,
  Image,
  License,
  LoadBoard,
  Manifest,
  Media,
  Sound,
  SpecialtyAction,
  SymbolSet,
};
