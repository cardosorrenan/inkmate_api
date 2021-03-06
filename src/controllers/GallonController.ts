import { json, Request, Response } from "express";
import { MockDatabase } from '../database/MockDatabase'

const database = new MockDatabase();

const getBetterResult = ({ results }) => {
  // should be an optimization algorithm... but, bring me the cheap :)
  return results.reduce((acc, gl) => (acc.price < gl.price) ? acc : gl).volume
}
class GallonController {

  // Calculate the number of gallons needed from an area
  async query (request: Request, response: Response) { 

    const { area } = request.query;
    const areaNum: number = +area;
    const litersInk = areaNum / 5;
    
    const results = database.get(litersInk);

    const betterVolumeChoice = getBetterResult(results)

    const payload = {
      'area': (areaNum).toFixed(2),
      'liters_ink': (litersInk).toFixed(2),
      'recommended': betterVolumeChoice,
      ...results
    }
    
    return response.status(200).json({ ...payload });
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