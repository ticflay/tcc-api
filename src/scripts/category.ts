import { Category } from "../models/category";
import { Criteria } from "../models/criteria";

const environmentalArray = [
  {
    criterion: "Ambiental",
    category: "Políticas Ambientais",
    description: `Uma política ambiental deve conter os objetivos e princípios de uma empresa para gerenciar os efeitos e aspectos ambientais de sua operação. Ela é vital se deseja trabalhar com grandes organizações, ou se precisa demonstrar as partes interessadas que a empresa está comprometida a gerenciar impactos ambientais de forma responsável. `
  },
  {
    criterion: "Ambiental",
    category: "Emissão e energia",
    description: `As emissões se referem ao descarte no ar de diferentes emissões atmosféricas significativas. Algumas emissões provocam impactos negativos nos ecossistemas, qualidade do ar, agricultura e saúde humana e animal. O uso eficiente de energia é essencial para combater mudanças climáticas. O consumo de energia pode acontecer de várias formas: combustível, eletricidade, aquecimento. `
  },
  {
    criterion: "Ambiental",
    category: "Gestão de Resíduos e Reciclagem",
    description: `A gestão de resíduos e reciclagem é uma parte crucial para manter a natureza limpa e sustentável.  Trata-se de um processo sistemático de coleta, transporte e descarte de resíduos, lado a lado com supervisão e regulamentação.`
  },
  { criterion: "Ambiental", category: "Conservação de Água", description: `O acesso a água é essencial para a vida humana, e é reconhecida pela ONU como um direito humano.` },
  {
    criterion: "Ambiental",
    category: "Agricultura e Práticas Sustentáveis",
    description: "A agricultura é essencial para a alimentação da população mundial. Ao mesmo tempo, as atividades desses setores têm impactos significativos no desenvolvimento sustentável. Dessa forma, a adoção de práticas sustentáveis se fazer necessária.",
  },
];

const socialArray = [
  { criterion: "Social", category: "Privacidade do Cliente", description: "A privacidade do cliente inclui perda de dados de clientes e violação da privacidade." },
  {
    criterion: "Social",
    category: "Segurança do Consumidor",
    description: "Envolve a abordagem de questões de segurança do consumidor em todo o ciclo de vida de um produto ou serviço.",
  },
  { criterion: "Social", category: "Comunidade Local", description: "Trata de comunidades que vivem ou trabalham em áreas afetadas ou que poderiam ser afetas pelas operações da organização." },
  {
    criterion: "Social",
    category: "Emprego e Condições de Trabalho",
    description: "Envolve a abordagem da organização em relação a emprego ou geração de empregos. Isso inclui sua abordagem para contratação, recrutamento, retenção e condição de trabalho oferecida.",
  },
  {
    criterion: "Social",
    category: "Diversidade e Igualdade",
    description: "O ato de tratar pessoas de forma desigual, impondo encargos desiguais ou negar benefícios sem base no mérito pessoal, é chamado de discriminação. A diversidade e igualdade no local de trabalho envolve a igualdade de oportunidades e como a organização lida com isso no local de trabalho.",
  },
];

const governanceArray = [
  {
    criterion: "Governança",
    category: "Diversidade do Conselho",
    description: "A comparação entre diversidade geral de empregados e a diversidade da equipe de gestão mostram como a igualdade de oportunidades é aplicada na empresa.",
  },
  {
    criterion: "Governança",
    category: "Gestão de Impactos",
    description: "Define como a organização está gerindo impactos no ambiente, economia e pessoas, com papeis e responsabilidades em relação a esses impactos.",
  },
  {
    criterion: "Governança",
    category: "Satisfação dos stakeholders",
    description: "Define como a organização lida com questões relacionadas a satisfação dos stakeholders. A GRI definiu stakeholders como: “indivíduos ou grupos que possuem interesses que são afetados ou poderiam ser afetados pelas atividades da organização”. Podem ser clientes, empregados, parceiros de negócios, entre outros.",
  },
  { criterion: "Governança", category: "Combate à Corrupção", description: "A corrupção inclui práticas como suborno, pagamento de propina, fraude, oferta e recebimento de presentes, entre outros. São formas de obter vantagens por meios ilícitos." },
  {
    criterion: "Governança",
    category: "Cadeia de Fornecedores",
    description: "Trata-se dos possíveis impactos negativos gerados pela relação com fornecedores. A cadeia de fornecedores são atividades realizadas por organizações que fornecem produtos ou serviços utilizados nas operações da própria organização.",
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
