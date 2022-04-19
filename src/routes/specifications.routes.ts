import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specicationsRoutes = Router();

specicationsRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
})

specicationsRoutes.get("/", (request, response) => {
    //const all = specificationsRepository.list();

   // return response.json(all);
})

export {specicationsRoutes}