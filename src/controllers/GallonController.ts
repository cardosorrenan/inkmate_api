import { json, Request, Response } from "express";

class GallonController {

  // Calculate the number of gallons needed from an area
  async query (request: Request, response: Response) { 
    const test = { message: 'OK' }
    return response.status(200).json(test);
  }

  // Show a list of all gallons
  async index (request: Request, response: Response) { }

  // Create/save a new gallon
  async create (request: Request, response: Response) { }

  // Display a single gallon
  async show (request: Request, response: Response) { }

  // Update gallon details
  async update (request: Request, response: Response) { }

  // Delete a gallon with id
  async destroy (request: Request, response: Response) { }

}

export { GallonController }