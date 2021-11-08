#!/usr/bin/env ts-node
import { rename } from "fs/promises";
import path from "path";
export const move = async (
  source: string,
  destination: string
): Promise<true | false> => {
  try {
    await rename(path.resolve(source), path.resolve(destination));
    return true;
  } catch (error: any) {
    console.error(error);
    return false;
  }
};
