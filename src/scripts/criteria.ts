import { Criteria } from "../models/criteria";

const criteriaArray = ["Ambiental", "Social", "Governança"];

export const createCriteria = async () => {
    const createdCriteria = await Promise.all(criteriaArray.map(async criterion => {
        await Criteria.create({
            name: criterion
        })
    }))
    return createdCriteria;
}