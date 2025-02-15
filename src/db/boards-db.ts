import { DBSchema, IDBPDatabase, openDB } from "idb";
import * as OBF from "../open-board-format/obf";
import { OBZFiles, unzipOBZ } from "../utils/zip-utils";

interface BoardsDB extends DBSchema {
  manifest: {
    value: OBF.Manifest;
    key: string;
  };
  boards: {
    value: {
      path: string;
      data: OBF.Board;
    };
    key: string;
    indexes: { "by-path": string };
  };
  images: {
    value: {
      id: string;
      path: string;
      data: Blob;
    };
    key: string;
    indexes: { "by-path": string };
  };
  sounds: {
    value: {
      id: string;
      path: string;
      data: Blob;
    };
    key: string;
    indexes: { "by-path": string };
  };
}

const db = await initDB();

export async function importOBZFile(file: File): Promise<void> {
  const buffer = await file.arrayBuffer();
  const obz = new Uint8Array(buffer);
  const obzFiles = await unzipOBZ(obz);

  await storeOBZFiles(obzFiles);
}

export async function storeOBZFiles(obzFiles: OBZFiles): Promise<void> {
  const { manifest, boards, images, sounds } = obzFiles;

  const tx = db.transaction(
    ["manifest", "boards", "images", "sounds"],
    "readwrite",
  );

  try {
    const manifestStore = tx.objectStore("manifest");
    await manifestStore.put(manifest, "manifest");

    const imagesIdsByPath: Record<string, string> = {};
    for (const [id, path] of Object.entries(manifest.paths.images)) {
      imagesIdsByPath[path] = id;
    }

    const soundsIdsByPath: Record<string, string> = {};
    for (const [id, path] of Object.entries(manifest.paths.sounds)) {
      soundsIdsByPath[path] = id;
    }

    const boardsStore = tx.objectStore("boards");
    for (const [path, board] of Object.entries(boards)) {
      await boardsStore.put({ path, data: board });
    }

    const imagesStore = tx.objectStore("images");
    for (const [path, image] of Object.entries(images)) {
      await imagesStore.put({ id: imagesIdsByPath[path], path, data: image });
    }

    const soundsStore = tx.objectStore("sounds");
    for (const [path, sound] of Object.entries(sounds)) {
      await soundsStore.put({ id: soundsIdsByPath[path], path, data: sound });
    }

    await tx.done;
  } catch (error) {
    console.error("Transaction failed", error);
    throw error;
  }
}

export async function getRootBoard(): Promise<OBF.Board | null> {
  const tx = db.transaction(["manifest"]);
  const manifestStore = tx.objectStore("manifest");
  const manifest = await manifestStore.get("manifest");

  if (manifest?.root) {
    return getBoardByPath(manifest.root);
  }

  return null;
}

export async function getBoardByPath(path: string): Promise<OBF.Board | null> {
  const tx = db.transaction(["boards"]);
  const boardsStore = tx.objectStore("boards");
  const board = await boardsStore.index("by-path").get(path);

  return board?.data ?? null;
}

async function initDB(): Promise<IDBPDatabase<BoardsDB>> {
  return openDB<BoardsDB>("boards-db", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("manifest")) {
        db.createObjectStore("manifest");
      }

      if (!db.objectStoreNames.contains("boards")) {
        const boardsStore = db.createObjectStore("boards", {
          keyPath: "data.id",
        });
        boardsStore.createIndex("by-path", "path");
      }

      if (!db.objectStoreNames.contains("images")) {
        const imagesStore = db.createObjectStore("images", { keyPath: "id" });
        imagesStore.createIndex("by-path", "path");
      }

      if (!db.objectStoreNames.contains("sounds")) {
        const soundsStore = db.createObjectStore("sounds", { keyPath: "id" });
        soundsStore.createIndex("by-path", "path");
      }
    },
  });
}
