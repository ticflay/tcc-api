import { Category } from "../models/category";
import { Criteria } from "../models/criteria";

interface ICategory {
  criterion: string,
  category: string,
  identifier: string
}

const environmentalArray: ICategory[] = [
  {
    criterion: "Ambiental",
    category: "Políticas Ambientais",
    identifier: `envpolicy`
  },
  {
    criterion: "Ambiental",
    category: "Emissão e energia",
    identifier: "emission"
  },
  {
    criterion: "Ambiental",
    category: "Gestão de Resíduos e Reciclagem",
    identifier: "recycle"
  },
  { criterion: "Ambiental", category: "Conservação de Água", identifier: 'water' },
  {
    criterion: "Ambiental",
    category: "Agricultura e Práticas Sustentáveis",
    identifier: 'agro'
  },
];

const socialArray: ICategory[] = [
  { criterion: "Social", category: "Privacidade do Cliente", identifier: "privacy" },
  {
    criterion: "Social",
    category: "Segurança do Consumidor",
    identifier: "safety"
  },
  { criterion: "Social", category: "Comunidade Local", identifier: "community" },
  {
    criterion: "Social",
    category: "Emprego e Condições de Trabalho",
    identifier: "jobs"
  },
  {
    criterion: "Social",
    category: "Diversidade e Igualdade",
    identifier: "diversity"
  },
];

const governanceArray: ICategory[] = [
  {
    criterion: "Governança",
    category: "Diversidade do Conselho",
    identifier: "board"
  },
  {
    criterion: "Governança",
    category: "Gestão de Impactos",
    identifier: "impact"
  },
  {
    criterion: "Governança",
    category: "Satisfação dos stakeholders",
    identifier: "stakeholders"
  },
  { criterion: "Governança", category: "Combate à Corrupção", identifier: "corruption" },
  {
    criterion: "Governança",
    category: "Cadeia de Fornecedores",
    identifier: "supply",
  },
];

const categoryArray = [
  ...environmentalArray,
  ...socialArray,
  ...governanceArray,
];

export const createCategory = async () => {
  const createdCategories = await Promise.all(
    categoryArray.map(async ({ criterion, category, identifier }) => {
      const criterionCategory = await Criteria.findOne({
        where: { name: criterion },
      });
      if (criterionCategory) {
        await Category.create({
          name: category,
          identifier,
          criteriaId: criterionCategory.id,
          criteria: criterionCategory,
        });
      }
    })
  );
  return createdCategories;
};
