import { Request, Response } from "express";

export async function teste(req: Request, res: Response) {
  return res.status(200).json({ message : 'Ola, mundo'})
}