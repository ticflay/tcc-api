import { Category } from "../models/category";
import { Criteria } from "../models/criteria";

const environmentalArray = [
  {
    criterion: "Ambiental",
    category: "Políticas Ambientais",
    description: ""
  },
  {
    criterion: "Ambiental",
    category: "Emissão e energia",
    description: ""
  },
  {
    criterion: "Ambiental",
    category: "Gestão de Resíduos e Reciclagem",
    description: ""
  },
  { criterion: "Ambiental", category: "Conservação de Água", description: "" },
  {
    criterion: "Ambiental",
    category: "Design e Ciclo de Vida do Produto",
    description: "",
  },
  {
    criterion: "Ambiental",
    category: "Agricultura e Práticas Sustentáveis",
    description: "",
  },
];

const socialArray = [
  { criterion: "Social", category: "Privacidade do Cliente", description: "" },
  {
    criterion: "Social",
    category: "Informação ao Consumidor",
    description: "",
  },
  {
    criterion: "Social",
    category: "Segurança do Consumidor",
    description: "",
  },
  { criterion: "Social", category: "Políticas Públicas", description: "" },
  { criterion: "Social", category: "Comunidade Local", description: "" },
  {
    criterion: "Social",
    category: "Emprego e Condições de Trabalho",
    description: "",
  },
  {
    criterion: "Social",
    category: "Trabalho Forçado ou Análogo ao Escravo",
    description: "",
  },
  { criterion: "Social", category: "Direitos Humanos", description: "" },
  {
    criterion: "Social",
    category: "Diversidade e Igualdade",
    description: "",
  },
];

const governanceArray = [
  {
    criterion: "Governança",
    category: "Estrutura e Ética de Governança",
    description: "",
  },
  {
    criterion: "Governança",
    category: "Diversidade do Conselho",
    description: "",
  },
  {
    criterion: "Governança",
    category: "Políticas de Governança Corporativa",
    description: "",
  },
  {
    criterion: "Governança",
    category: "Remuneração Variável",
    description: "",
  },
  {
    criterion: "Governança",
    category: "Satisfação do Cliente",
    description: "",
  },
  {
    criterion: "Governança",
    category: "Satisfação do Funcionário",
    description: "",
  },
  { criterion: "Governança", category: "Combate à Corrupção", description: "" },
  {
    criterion: "Governança",
    category: "Cadeia de Fornecedores",
    description: "",
  },
];

const categoryArray = [
  ...environmentalArray,
  ...socialArray,
  ...governanceArray,
];

export const createCategory = async () => {
  const createdCategories = await Promise.all(
    categoryArray.map(async ({ criterion, category, description }) => {
      const criterionCategory = await Criteria.findOne({
        where: { name: criterion },
      });
      if (criterionCategory) {
        await Category.create({
          name: category,
          description,
          criteriaId: criterionCategory.id,
          criteria: criterionCategory,
        });
      }
    })
  );
  return createdCategories;
};
