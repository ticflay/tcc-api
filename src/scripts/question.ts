import { Category } from "../models/category";
import { Criteria } from "../models/criteria";
import { Question } from "../models/question";

const questions = [
  {
    category: "Políticas Ambientais",
    name: "A empresa tem uma política ambiental claramente definida?",
    description: `Ter uma política ambiental traz diversos benefícios para uma empresa, tanto internamente quanto externamente. 
    Uma política ambiental deve ser curta, pública, com uma linguagem acessível. A declaração deve ser realista, alcançável e relevante para as atividades do seu negócio`,
    required: true,
  },
  {
    category: "Políticas Ambientais",
    name: "A empresa considera o impacto ambiental em suas decisões de negócios?",
    description: `Envolve pensar sobre como suas operações, produtos e serviços afetam o meio ambiente e tomar medidas para minimizar esses impactos. 
    Abaixo são listados alguns exemplos práticos:
    Uma empresa de tecnologia pode projetar seus produtos para terem uma vida útil mais longa, reduzindo a quantidade de resíduos eletrônicos.
    Uma empresa de manufatura pode  optar por usar materiais reciclados em seus produtos.
    `,
    required: true,
  },
  {
    category: "Políticas Ambientais",
    name: "A empresa tem uma política de conservação da biodiversidade?",
    description: `Proteger a biodiversidade garante a sobrevivência das espécies, da diversidade genética e ecossistemas naturais. Além de contribuir para a segurança alimentar e a saúde humana, e é essencial para o desenvolvimento sustentável.
    Uma política de biodiversidade pode conter elementos relacionados a prevenção, gestão e reparação de danos a habitats naturais resultantes de atividades da empresa.`,
    required: false,
  },
  {
    category: "Políticas Ambientais",
    name: "A empresa tem programas de treinamento para os funcionários sobre práticas sustentáveis?",
    description: `É obrigação de uma organização conscientizar seus funcionários em relação as práticas sustentáveis. Uma empresa não consegue alcançar metas ambientais sem a colaboração dos funcionários.
    Inicialmente, pode-se iniciar conscientizando a liderança da organização. No fim, os funcionários devem entender sobre as práticas sustentáveis e os impactos delas para a sociedade.
    Essa capacitação deve ser contínua, presente em comunicação internas, relatórios e campanhas.`,
    required: true,
  },
  {
    category: "Emissão e energia",
    name: "A empresa monitora e minimiza suas emissões de carbono?",
    description: `As emissões de carbono podem ocorrer de diversas fontes, entre elas: geração de eletricidade, processamento físico-químico, transporte de materiais. 
    Ao monitorar suas emissões de carbono, a empresa pode minimizá-las por meio de compensações, filtros, agentes, entre outros.`,
    required: false,
  },
  {
    category: "Emissão e energia",
    name: "A empresa utiliza energia renovável em suas operações?",
    description: `Fontes de energia renováveis são aquelas que podem ser repostas em um curto período por meio de ciclos ecológicos ou processos agrícolas. 
    Optar por fontes de energia renováveis, tais como eólica, hídrica ou solar, é essencial para combater mudanças climáticas e reduzir a pegada ambiental da organização `,
    required: false,
  },
  {
    category: "Emissão e energia",
    name: "A empresa tem metas claras e mensuráveis para reduzir suas emissões de gases de efeito estufa?",
    description: `Metas claras e mensuráveis para reduzir as emissões de gases de efeito estufa são objetivos definidos por uma empresa para diminuir sua contribuição para o aquecimento global. Essas metas devem ser quantificáveis, permitindo que a empresa acompanhe seu progresso e faça ajustes quando necessário.`,
    required: false,
  },
  {
    category: "Emissão e energia",
    name: "A empresa realiza auditorias regulares de energia para identificar oportunidades de economia de energia?",
    description: `Uma auditoria de energia é um exame sistemático dos padrões de uso de energia de uma empresa, identificando ineficiências e propondo melhorias acionáveis. Ao otimizar o consumo de energia, as empresas podem reduzir significativamente os custos operacionais, liberando recursos para investir em crescimento e inovação.
    Para realiza-las, é preciso coletar os dados de uso de energia, identificar o uso atual e tomar ações para redução.`,
    required: true,
  },
  {
    category: "Gestão de Resíduos e Reciclagem",
    name: "A empresa tem um programa eficaz de gestão de resíduos?",
    description: `A gestão de resíduos inclui a coleta, transporte e descarte de resíduos. Para implementar um programa de gestão de resíduos, a organização precisa inicialmente identificar os resíduos produzidos, estabelecer a equipe responsável pela gestão e definir metas de redução.
    Por fim, a empresa pode implementar práticas de minimização de resíduos, como o uso de embalagens reutilizáveis e automação para prevenir o uso excessivo de materiais. Além disso, a organização pode melhorar a classificação e coleta, criando rótulos para desviar recicláveis, orgânicos etc`,
    required: true,
  },
  {
    category: "Gestão de Resíduos e Reciclagem",
    name: "A empresa tem um programa de reciclagem?",
    description: `Um programa de reciclagem envolve a coleta, separação e processamento de materiais. Para iniciar o processo, é preciso implementar a coleta seletiva, educar os funcionários e monitorar e ajustar o programa.`,
    required: true,
  },
  {
    category: "Gestão de Resíduos e Reciclagem",
    name: "A empresa tem um programa para minimizar a geração de resíduos em suas operações?",
    description: `A minimização de resíduos envolve a redução da quantidade de resíduos por meio de práticas eficientes de produção e consumo.
    Para isso, tecnologias inovadoras que reduzem resíduos pdem ser utilizadas, ou a utilização de materiais de forma mais eficiente.`,
    required: true,
  },
  {
    category: "Gestão de Resíduos e Reciclagem",
    name: "A empresa tem iniciativas para reutilizar ou doar materiais que não são mais necessários para suas operações?",
    description: `Está relacionado ao uso repetitivo de itens ou doação de itens indesejados. Primeiro, é preciso identificar os materiais reutilizáveis. É possível estabelecer parcerias com organizações locais que poderiam se beneficiar dos materiais indesejados, além de implementar um programa de doação. Por fim, é preciso promover a reutilização interna dos materiais dentro da organização.`,
    required: true,
  },
  {
    category: "Conservação de Água",
    name: "A empresa tem práticas de conservação de água?",
    description: `A conservação de água pode ajudar na economia financeira e proteção do meio ambiente. 
    Para esse fim, as empresas podem, por exemplo, instalar equipamentos de baixo  fluxo, reutilização de água e educação dos funcionários sobre a importância da conservação da água.`,
    required: true,
  },
  {
    category: "Conservação de Água",
    name: "A empresa tem metas claras e mensuráveis para reduzir seu uso de água?",
    description: `A definição de metas é essencial para monitorar o progresso e fazer ajustes se necessário. Essas metas podem ser baseadas em regulamentos governamentais, por exemplo.
    O ideal é que elas sejam mensuráveis, por exemplo, redução de 20% do consumo de água até 2025.`,
    required: true,
  },
  {
    category: "Conservação de Água",
    name: "A empresa realiza auditorias regulares de água para identificar oportunidades de economia de água?",
    description: `A auditoria é uma avaliação do uso de água de uma empresa. O objetivo é identificar onde e como a água está sendo usado e onde existem oportunidades de economizar água.`,
    required: true,
  },
  {
    category: "Agricultura e Práticas Sustentáveis",
    name: "A empresa pratica agricultura sustentável?",
    description: `A agricultura sustentável é fazer o melhor uso dos bens ambientais sem danificá-los. Implica em um equilíbrio entre serviços e bens da agricultura e do meio-ambiente .
    Algumas práticas de agricultura sustentável incluem: rotação de culturas, uso de fertilizantes orgânicos e implementação de sistemas de irrigação eficiente.`,
    required: false,
  },
  {
    category: "Agricultura e Práticas Sustentáveis",
    name: "A empresa utiliza tecnologias e práticas sustentáveis?",
    description: `A empresa pode investir em várias tecnologias e práticas sustentáveis, como energia renovável, eficiência energética, gestão de resíduos. Por exemplo, por meio da instalação de painéis solares.`,
    required: false,
  },
  {
    category: "Agricultura e Práticas Sustentáveis",
    name: "A empresa utiliza práticas de agricultura regenerativa para melhorar a saúde do solo e sequestrar carbono?",
    description: `A agricultura regenerativa é crucial para a mitigação de mudanças climáticas e melhoria da saúde do solo. As empresas podem adotar rotação de cultura e plantio de culturas de cobertura, por exemplo.`,
    required: false,
  },
  {
    category: "Privacidade do Cliente",
    name: "A empresa tem uma política claramente definida de privacidade do cliente?",
    description: `Uma política de privacidade do cliente deve especificar como uma empresa coleta, usa, compartilha e protege os dados pessoais dos clientes. Ela é crucial para a conformidade legal, confiança do cliente e reputação da empresa .
    A organização pode desenvolver uma política que esteja em conformidade com as leis de privacidade aplicáveis.`,
    required: true,
  },
  {
    category: "Privacidade do Cliente",
    name: "A empresa monitora e minimiza a coleta de dados do cliente?",
    description: `Visa reduzir a quantidade de dados pessoas que uma empresa coleta dos clientes, minimizando assim os riscos de violação de dados.
    Para isso, é importante que a organização se atente para coletar apenas os dados necessários para fornecer um produto ou serviço.`,
    required: true,
  },
  {
    category: "Privacidade do Cliente",
    name: "A empresa tem uma política de não compartilhamento de dados do cliente?",
    description: `A empresa deve ter o compromisso com o cliente de não compartilhar seus dados pessoais com terceiros sem consentimento.
    A política deve estar em conformidade com as leis de privacidade aplicáveis e ser transparente para os clientes.`,
    required: true,
  },
  {
    category: "Privacidade do Cliente",
    name: "A empresa tem um programa de resposta a violações de dados?",
    description: `Trata-se de um plano que a empresa tem em vigor para responder a uma violação de dados de maneira eficaz.
    Esse plano visa minimizar o impacto da violação de dados, proteger os clientes e cumprir leis.
    As etapas podem incluir detectar, avaliar, conter, notificar e recuperar-se de uma violação de dados.`,
    required: true,
  },
  {
    category: "Privacidade do Cliente",
    name: "A empresa considera a privacidade do cliente em suas decisões de negócios?",
    description: `Ao tomar decisões sobre produtos, serviços, operações e estrategas é importante considerar a privacidade do cliente.
    Para isso, é importante incorporar considerações de privacidade estratégias de tomadas de decisão da companhia.`,
    required: true,
  },
  {
    category: "Segurança do Consumidor",
    name: "A empresa garante que os clientes tenham acesso a informações sobre a composição dos produtos, seu uso correto e disposição?",
    description: `Refere-se à prática de uma empresa de fornecer informações detalhadas sobre seus produtos aos clientes, com informações sobre ingredientes e materiais usados, instruções de uso e descarte do produto.
    Para esse fim, a empresa pode adotar a impressão de informações na embalagem do produto, disponibilizar manuais de instruções ou publicar informações detalhadas online.`,
    required: false,
  },
  {
    category: "Segurança do Consumidor",
    name: "A empresa informa os consumidores sobre os possíveis riscos associados ao uso de seus produtos e serviços?",
    description: `A empresa deve informar seus clientes sobre possíveis riscos ou efeitos colaterais dos seus produtos ou serviços. Esses avisos podem estar em embalagens de produtos, site da empresa ou comunicação direta com o cliente.`,
    required: false,
  },
  {
    category: "Segurança do Consumidor",
    name: "A empresa tem um processo para lidar com reclamações relacionadas à segurança do consumidor?",
    description: `Refere-se a ter um sistema para receber, processar e responder as reclamações de clientes relacionadas à segurança dos produtos ou serviços. É preciso garantir que os canais de comunicação sejam claros e acessíveis para os clientes, e a equipe de atendimento deve ser treinada para lidar com essas reclamações.`,
    required: true,
  },
  {
    category: "Comunidade Local",
    name: "A empresa identificou grupos vulneráveis que poderiam ser afetados negativamente por suas atividades?",
    description: `A identificação de grupos vulneráveis refere-se ao reconhecimento de comunidades que poderiam ser afetados de forma negativa pelas operações da organização. `,
    required: false,
  },
  {
    category: "Comunidade Local",
    name: "A empresa realiza avaliações de impacto social e ambiental na comunidade local?",
    description: `A avaliação e planejamento é essencial para compreender os impactos reais e potenciais na comunidade local. Para entender melhor esses impactos, é ideal que todas as partes interessadas estejam envolvidas no processo, desde do estágio inicial de planejamento até durante as operações`,
    required: true,
  },
  {
    category: "Comunidade Local",
    name: "A empresa tem programas de desenvolvimento local baseados nas necessidades das comunidades locais?",
    description: `Um programa de desenvolvimento local detalha ações para minimizar, mitigar ou compensar impactos na comunidade local. Além disso, pode identificar ações que promovam impactos positivos na comunidade. 
    A organização deve considerar a natureza única da comunidade e adotar medidas específicas para engajar grupos vulneráveis, como por exemplo, tornar informações disponíveis para diferentes idiomas ou formatos alternativos para pessoas não alfabetizadas.`,
    required: false,
  },
  {
    category: "Comunidade Local",
    name: "A empresa tem pontos de contato para queixas por parte de comunidades locais?",
    description: `As organizações devem prever e evitar impactos negativos nas comunidades. Quando isso não é possível, é preciso que a organização gerencie esses impactos de forma adequada, por meio de queixas e indenizações `,
    required: false,
  },
  {
    category: "Emprego e Condições de Trabalho",
    name: "A empresa fornece condições de trabalho justas e seguras para seus funcionários?",
    description: `As condições de trabalho referem-se a remuneração, jornada de trabalho, período de descanso, férias, práticas disciplinares e de demissão, proteção à maternidade e ambiente de trabalho. Incluem elementos relacionados ao bem-estar do funcionário.`,
    required: true,
  },
  {
    category: "Emprego e Condições de Trabalho",
    name: "A empresa respeita os direitos e obrigações legais em suas relações de emprego?",
    description: `A empresa deve cumprir as leis trabalhistas e de segurança social que se aplicam aos funcionários. Para isso, a empresa deve verificar se suas relações trabalhistas respeitam leis locais, nacionais e internacionais.`,
    required: true,
  },
  {
    category: "Emprego e Condições de Trabalho",
    name: "A empresa tem uma estratégia clara para atrair empregados diversos e qualificados?",
    description: `O número, idade, gênero e região de novos empregados contratados podem fazer parte da estratégia para atrair empregados diversos e qualificados. A organização deve implementar práticas inclusivas de recrutamento baseadas em idade e gênero, e utilizar mão de obra de diferentes regiões`,
    required: true,
  },
  {
    category: "Emprego e Condições de Trabalho",
    name: "A empresa tem uma baixa taxa de rotatividade de empregados?",
    description: `Uma alta taxa de rotatividade pode indicar algum nível de incerteza e insatisfação por partes dos funcionários, ou uma mudança em alguma estrutura da organização.
    Uma baixa taxa de rotativa é positivo pois a rotatividade gera mudanças nas pessoas e intelecto presentes na organização, o que pode impactar na produtividade `,
    required: true,
  },
  {
    category: "Diversidade e Igualdade",
    name: "A empresa tem políticas para prevenir a discriminação no local de trabalho?",
    description: `A empresa deve definir diretrizes para prevenir qualquer forma de descriminação no local de trabalho. São um conjunto de regras que devem ser seguidas pelos funcionários.
    Pode incluir políticas de igualdade de oportunidades, não discriminação e não ao assédio sexual.`,
    required: true,
  },
  {
    category: "Diversidade e Igualdade",
    name: "A empresa tem um processo para lidar com reclamações ou violações relacionadas à diversidade e igualdade?",
    description: `A organização deve ter um processo claro e transparente para lidar com reclamações e violações, o objetivo é garantir que todas as reclamações sejam tratadas de forma justa e imparcial.
    Esse processo deve garantir a proteção dos direitos dos denunciantes e a aplicação de sanções adequadas para os infratores.`,
    required: true,
  },
  {
    category: "Diversidade e Igualdade",
    name: "A empresa realiza treinamentos regulares para seus funcionários sobre diversidade e igualdade?",
    description: `Os treinamentos com os funcionários servem para que eles aprendam sobre a importância da diversidade e igualdade, além de entender as políticas e processos adotados pela empresa.
    Para isso, os treinamentos devem incluir apresentação detalhada sobre formas de cumprir as políticas da empresa e seguir os processos adequados, quando necessário. `,
    required: true,
  },
  {
    category: "Estrutura de Governança",
    name: "A empresa tem uma estrutura de governança claramente definida?",
    description: `É o sistema de regras, práticas e processos pelo qual a empresa é dirigida. Uma estrutura bem definida ajuda a garantir uma gestão eficaz e responsável.
    Uma estrutura bem definida inclui a definição de papéis e responsabilidades claros para a diretoria e alta administração.`,
    required: true,
  },
  {
    category: "Estrutura de Governança",
    name: "A remuneração dos executivos está alinhada com o desempenho da empresa?",
    description: `A remuneração pode incluir salário, bônus e outros benefícios. Uma remuneração alinhada com o desempenho pode ajudar a garantir que os executivos trabalhem no melhor interesse da empresa.
    Isso pode ser alcançado por meio de um plano de remuneração baseado em desempenho, vinculando uma parte da remuneração ao desempenho financeiro da empresa, por exemplo.`,
    required: true,
  },
  {
    category: "Estrutura de Governança",
    name: "A empresa tem um processo de tomada de decisão transparente?",
    description: `Os processos de tomada de decisão devem ser transparentes para as partes interessadas, a empresa deve ser aberta e honesta sobre como e por que as decisões são tomadas. Além disso, é importante utilizar o feedback das partes interessadas na tomada de decisão `,
    required: true,
  },
  {
    category: "Diversidade do Conselho",
    name: "O conselho da empresa é composto por uma variedade de gêneros?",
    description: `Um conselho composto por diversidade de gênero pode levar a uma maior diversidade de perspectivas, melhorando a tomada de decisões e desempenho da empresa`,
    required: true,
  },
  {
    category: "Diversidade do Conselho",
    name: "O conselho da empresa possui uma variedade de habilidades e áreas de expertise?",
    description: `A diversidade de habilidades e expertise no conselho pode incluir variedades de experiências profissionais, habilidades técnicas e conhecimentos.
    Quanto mais diverso, maior o número de perspectivas, o que pode melhorar a toma de decisão da organização, além de trazer variedades de desafios e oportunidades de negócio `,
    required: true,
  },
  {
    category: "Diversidade do Conselho",
    name: "A empresa tem uma política para garantir a diversidade de gênero no conselho?",
    description: `Refere-se a uma política forma estabelecida pela organização para promover a diversidade de gênero nos cargos mais altos. Ela pode conter metas ou diretrizes específicas para a representação de gênero no conselho.`,
    required: true,
  },
  {
    category: "Gestão de impactos",
    name: "A governança da empresa desempenha papel importante no gerenciamento de estratégias para alcançar o desenvolvimento sustentável?",
    description: `O mais alto órgão de governança e altos executivos devem ter um papel no desenvolvimento, aprovação e atualização de declaração de valores, missões, estratégias, políticas e objetivos que estão relacionados com o desenvolvimento sustentável.`,
    required: true,
  },
  {
    category: "Gestão de impactos",
    name: "A governança da empresa desempenha papel importante no gerenciamento dos impactos na economia, meio ambiente e pessoas?",
    description: `O mais alto órgão de governança deve participar da supervisão da devida diligência da organização e de outros processos que podem identificar impactos na economia, ambiente e pessoas.
    A governança da empresa deve estar engajada com os stakeholders para ajudar nesses processos e utilizar o resultado para tomada de decisões empresariais `,
    required: true,
  },
  {
    category: "Gestão de impactos",
    name: "As políticas de governança corporativa da empresa incluem diretrizes para a distribuição de poderes e responsabilidades entre os diversos órgãos da entidade?",
    description: `O mais alto órgão de governança deve participar da supervisão da devida diligência da organização e de outros processos que podem identificar impactos na economia, ambiente e pessoas.
    A governança da empresa deve estar engajada com os stakeholders para ajudar nesses processos e utilizar o resultado para tomada de decisões empresariais.`,
    required: true,
  },
  {
    category: "Gestão de impactos",
    name: "As políticas de governança corporativa da empresa incluem diretrizes para a distribuição de poderes e responsabilidades entre os diversos órgãos da entidade?",
    description: `Essas diretrizes podem incluir como o mais alto órgão de governança da empresa delega responsabilidade pela gestão dos impactos da organização em relação aos critérios ESG. Pode incluir a nomeação de um alto executivo ou outros empregados para ser responsável pela gestão de impactos. Pode incluir a frequência que os responsáveis devem relatar para a governança da empresa sobre a gestão desses impactos.`,
    required: true,
  },
  {
    category: "Satisfação dos Stakeholders",
    name: "A empresa faz pesquisas regulares de satisfação dos stakeholders?",
    description: `A empresa pode obter informações sobre a satisfação dos stakeholders por meio de consulta, pesquisas. Esse processo deve ser contínuo, sendo definido um período (trimestral, anual, etc). Nesses casos, é preciso garantir o respeito aos direitos humanos, como a privacidade e liberdade de expressão.`,
    required: true,
  },
  {
    category: "Satisfação dos Stakeholders",
    name: "A empresa usa o feedback dos stakeholders para melhorar seus produtos ou serviços?",
    description: `O feedback dos stakeholders pode ser registrado e integrado na tomada de decisão. Nesse caso, é importante informar os stakeholder sobre como seu feedback influenciou as decisões.`,
    required: true,
  },
  {
    category: "Combate à Corrupção",
    name: "A empresa tem uma política clara de combate à corrupção?",
    description: `Uma política de combate a corrupção pode incluir: os riscos adotados pela organização referente à corrupção, com critérios em relação a localização, setor e atividade; gerenciamento de conflitos de interesse por parte dos funcionários; política para doação e patrocínio para outras organizações.`,
    required: true,
  },
  {
    category: "Combate à Corrupção",
    name: "A empresa tem mecanismos para prevenir práticas de corrupção, como suborno, fraude, extorsão e lavagem de dinheiro?",
    description: `A empresa pode adotar mecanismos como: política de combate a corrupção, comunicação e capacitação em relação a essa políticas para a governança da empresa, empregados e parceiros`,
    required: true,
  },
  {
    category: "Cadeia de Fornecedores",
    name: "A empresa possui uma política de governança claramente definida para a seleção de novos fornecedores?",
    description: `Uma política de seleção de novos fornecedores pode levar em consideração critérios ambientais, sociais e de governança. Na política, devem ser listados os critérios utilizados para seleção de novos fornecedores. Uma organização pode iniciar o processo de diligência devida logo no início da nova relação com o fornecedor, pois assim impactos podem ser evitados ou mitigados.`,
    required: true,
  },
  {
    category: "Cadeia de Fornecedores",
    name: "A empresa implementou processos de governança para identificar e avaliar impactos sociais negativos significativos na cadeia de fornecedores?",
    description: `A organização pode utilizar processos para identificar e avaliar impactos negativos, tais como devida diligência. O objetivo é identificar impactos negativos reais e potenciais da cadeia de fornecedores. As informações para avaliações podem ser obtidas através de auditoria, revisões de contrato e mecanismos de queixa.`,
    required: true,
  },
  {
    category: "Cadeia de Fornecedores",
    name: "A empresa estabelece expectativas em contratos com fornecedores para promover a prevenção, mitigação e reparação de impactos sociais negativos?",
    description: `Os impactos negativos podem incluir aqueles que a organização causou ou contribuiu para causar por sua relação com o fornecedor. As expectativas em relação a promoção, prevenção e mitigação de impactos ambientais deve estar bem definida nos contratos com a cadeia de fornecedores.`,
    required: true,
  },
  {
    category: "Cadeia de Fornecedores",
    name: "A empresa incentiva e recompensa fornecedores que previnem, mitigam e reparam impactos sociais significativos como parte de sua governança corporativa?",
    description: `A organização pode oferecer recompensas e incentivos para fornecedores que previnem, mitigam e reparam impactos ambientais significativos reais e potenciais.`,
    required: true,
  },
  {
    category: "Cadeia de Fornecedores",
    name: "A empresa tem sistemas de governança para avaliar impactos negativos potenciais do encerramento da relação com um fornecedor?",
    description: `A empresa não deve se preocupar apenas com os impactos causadas ao iniciar uma relação com um fornecedor. Ao encerrar uma relação com um fornecedor, podem haver impactos negativos, como por exemplo, pode haver algum prejuízo para a comunidade local. A empresa deve ter sistema definido para avaliar esses impactos potenciais e estratégias para mitigar esses impactos `,
    required: true,
  },
];

export const createQuestions = async () => {
  const createdQuestions = await Promise.all(
    questions.map(async ({ name, category, description, required }) => {
      const categoryQyuestion = await Category.findOne({
        where: { name: category },
      });
      if (categoryQyuestion) {
        await Question.create({
          name: name,
          description,
          categoryId: categoryQyuestion.id,
          category: categoryQyuestion,
          required: required,
        });
      }
    })
  );
  return createdQuestions;
};
