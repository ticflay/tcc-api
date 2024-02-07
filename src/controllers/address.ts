import { RequestHandler } from "express";
import cep from "cep-promise";
import { Country, State, City,  } from "country-state-city";


export const getCountries: RequestHandler = async (req, res, next) => {
    const countries = Country.getAllCountries();
    res.status(200).json(countries);
}

