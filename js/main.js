const projectTitle = document.getElementById("projectTitle");
const projectDetails = document.getElementById("projectDetails");

const projectData = [
    {
        title: "Minha Jornada",
        description: "Nestas imagens vou mostrar a vocês como foi a minha aventura des do 1º ano até o 3º ano de uma forma simples mas também nostálgica ;D"
    },
    {
        title: "Primeiro encontro (25/03/2022)",
        description: "O primeiro encontro do P-tech foi fundamental para delinear a estrutura das futuras palestras e dinâmicas. Em um ambiente colaborativo, discutimos como as palestras seriam direcionadas ao desenvolvimento profissional e à troca de conhecimentos.<br> A proposta incluía convidar especialistas para compartilhar suas experiências e insights, enquanto as dinâmicas seriam interativas, incentivando a participação ativa de todos os presentes.<br> Também decidimos que as sessões focariam em habilidades práticas, como comunicação, liderança e tecnologia.<br> O objetivo era criar um espaço de aprendizado enriquecedor, onde todos pudessem contribuir e evoluir coletivamente."
    },
    {
        title: "Conduta Ética (19/04/2022)",
        description: "A conduta ética no ambiente de trabalho é fundamental para preservar a integridade e a confiança nas relações profissionais. Durante uma dinâmica, discutimos um cenário desafiador: um funcionário de um banco, responsável por transações financeiras, enfrenta a difícil escolha de desviar um centavo de cada conta para cobrir o tratamento médico urgente de um parente. Esse caso destaca o conflito entre valores pessoais e responsabilidades profissionais.<br> Embora a necessidade de ajudar um familiar seja compreensível, desviar fundos representa uma violação ética que pode gerar consequências legais e prejudicar a reputação da instituição.<br> A dinâmica nos fez refletir sobre a importância de manter a ética, mesmo em situações de pressão, e buscar alternativas que respeitem tanto a legislação quanto os princípios éticos."
    },
    {
        title: "Dia a dia do analista de suporte (13/05/2022)",
        description: "Um dia de trabalho na EDUZZ é marcado por dinamismo e colaboração. As equipes iniciam o dia com breves reuniões para alinhar tarefas e objetivos.<br> O ambiente é ágil, com grupos interdisciplinares atuando em diversos projetos, que vão desde marketing até o desenvolvimento de plataformas.<br> Ao longo do dia, os colaboradores participam de atividades como sessões de brainstorming, análise de dados e suporte a parceiros.<br> A EDUZZ valoriza a inovação, promovendo o compartilhamento de ideias e o aprendizado contínuo. O clima é leve e descontraído, com áreas de descompressão e interação entre equipes, reforçando um forte senso de comunidade."
    },
    {
        title: "Comunicação Interpessoal - como melhorar a sua? (30/09/2022)",
        description: "Para aprimorar minha comunicação interpessoal, o primeiro passo é realmente ouvir o que as pessoas têm a dizer, mostrando que me importo de verdade com suas palavras. Colocar-me no lugar delas, praticando a empatia, é uma forma poderosa de compreender diferentes pontos de vista. Também sei que usar uma linguagem clara e direta faz toda a diferença, evitando termos complicados que só trariam confusão. E claro, o feedback é uma ferramenta valiosa – sempre posso perguntar como estou me saindo e acolher críticas que me ajudem a melhorar.  Além disso, aprendi que minha comunicação vai além das palavras; gestos e expressões faciais são fundamentais para passar confiança e mostrar que estou realmente presente. Com essas práticas, sei que conseguirei criar conexões mais fortes e evitar aqueles mal-entendidos tão comuns."
    },
    {
        title: "Dia a dia do analista de suporte (27/04/2023)",
        description: "O dia a dia de um analista de suporte envolve resolver problemas técnicos e auxiliar usuários em questões relacionadas a sistemas e software. A jornada começa com o monitoramento de tickets, onde os problemas são priorizados conforme sua urgência.<br> O analista coleta informações detalhadas dos usuários, diagnostica a causa dos problemas e oferece soluções, seja por meio de telefone, e-mail ou chat. Também realiza testes, documenta processos e mantém os sistemas atualizados. Essa função é essencial para garantir que as operações funcionem sem interrupções, além de assegurar a satisfação e confiança dos clientes.<br> Isso reflete bem a rotina de quem trabalha com suporte técnico?"
    },
    {
        title: " Nova Parceria - ITIX (04/05/2023)",
        description: "Fundada em 2002, a ITIX é uma empresa brasileira especializada em soluções de tecnologia da informação, com foco em automação de processos e inteligência artificial. Desde o início, tem se destacado pela inovação e pelo compromisso em impulsionar a transformação digital.<br>Neste dia, a ITIX se juntou às parcerias da escola e trouxe uma dinâmica muito divertida, com sorteios de garrafinhas e cadernos. Por sorte, fui a última a ser premiada e ganhei um caderninho – foi um momento bem divertido!<br>Além disso, a ITIX desenvolve ferramentas que atendem às necessidades específicas de seus clientes, buscando otimizar a eficiência operacional e expandir sua presença no mercado. Seu objetivo é contribuir para o crescimento e a evolução digital de empresas no Brasil e no exterior."
    },
    {
        title: "De Estagiária a Analista: Quando Conversar Conta Tanto Quanto Codar!<br>(05/05/2023)",
        description: "A jornada de estagiária a Analista de Requisitos mostra que não é só o código que faz a mágica acontecer! Saber entender as necessidades das pessoas e traduzi-las em soluções claras é tão importante quanto programar.<br>No dia a dia, o verdadeiro superpoder é construir bons relacionamentos com a equipe e os clientes, garantindo que todo mundo esteja na mesma página. Além de dar vida ao código, o segredo está em captar as expectativas do usuário e criar algo que realmente faça sentido. E assim, as habilidades humanas e técnicas se juntam para turbinar sua carreira e transformar o trabalho em equipe!"
    },
    {
        title: "Palestra e Oficina: como gerenciar seu talento (22/09/2023)",
        description: "Palestras e oficinas são como atalhos para turbinar seu talento e melhorar suas habilidades profissionais! Enquanto as palestras trazem dicas incríveis sobre desenvolvimento pessoal e networking, as oficinas te permitem colocar tudo isso em prática.<br>Um ponto chave nesse caminho é montar um currículo que brilhe. Ele deve mostrar suas habilidades, conquistas e experiências de forma clara e objetiva. E lembre-se: personalizar seu currículo para cada vaga é essencial. Com uma boa dose de aprendizado nas palestras e oficinas, mais um currículo afinado, suas chances de sucesso no mercado de trabalho disparam!"
    },
    {
        title: "Treinamento presencial de uma nova ferramenta da ITIX (19/11/23)",
        description: "Para fazer uma empresa com baixo potencial de crescimento brilhar, o primeiro passo é encontrar um nicho de mercado único. Use análise de dados para entender o que seus clientes realmente precisam e ajustar seus produtos de acordo.<br>Priorize a experiência do cliente, forme parcerias estratégicas e aposte no marketing digital para aumentar seu alcance. Invista na capacitação da sua equipe e crie uma cultura de inovação. Com essas ações, sua empresa pode ganhar novo fôlego e acelerar seu crescimento!<br>Nesta atividade, usamos técnicas de Scrum para desenvolver um projeto de reciclagem com um app de forma rápida e eficiente. Me diverti bastante, por falar nisso, eu mesma fiz a logo da empresa fictícia do meu grupo. Foi bem legal!"
    },
    {
        title: "Criatividade e Inovação: Um Desafio Constante (08/04/2024)",
        description: "A criatividade e a inovação são fundamentais para o sucesso em um mercado dinâmico, pois impulsionam a solução de problemas e o desenvolvimento de novos produtos. Cultivá-las é um desafio constante, exigindo abertura a novas ideias e disposição para sair da zona de conforto.<br><br>Criar um ambiente que favoreça a colaboração e a experimentação é crucial. Organizações que valorizam a inovação atraem talentos e se tornam mais competitivas, tornando essencial enfrentar esse desafio para prosperar.<br><br>"
    },
    {
        title: "As possibilidades da IA no mercado de trabalho (23/05/2024)",
        description: "A inteligência artificial (IA) está revolucionando o mercado de trabalho, automatizando tarefas repetitivas e otimizando processos. Ela permite que as empresas aumentem a eficiência e tomem decisões baseadas em dados em tempo real.<br><br>Além de criar novas oportunidades em áreas como desenvolvimento de algoritmos e ética em IA, a demanda por profissionais com habilidades em machine learning está crescendo. Essa transformação exige novas competências, mas também oferece chances para carreiras mais criativas e estratégicas.<br><br>"
    },
    {
        title: "Liderança e Gestão 3.0 (27/05/2024)",
        description: "A liderança e gestão 3.0 é uma abordagem moderna que enfatiza a colaboração, a motivação e a inovação nas organizações. Diferente dos modelos tradicionais, onde o foco está na hierarquia e no controle, a gestão 3.0 valoriza a autonomia das equipes, promovendo um ambiente onde os colaboradores são incentivados a contribuir com suas ideias e a assumir responsabilidades.<br><br>Esse modelo se baseia em princípios como a auto-organização, onde as equipes têm liberdade para tomar decisões, e o feedback contínuo, que permite um aprendizado constante. A liderança 3.0 também prioriza o desenvolvimento das pessoas, reconhecendo que equipes engajadas e satisfeitas são essenciais para o sucesso do negócio. Essa abordagem não só melhora a produtividade, mas também cria uma cultura organizacional mais saudável e inovadora.<br><br></br>"
    },
    {
        title: "Homelabs (18/06/2024)",
        description: "Explorar um homelab é uma maneira poderosa de impulsionar sua carreira em TI. Criar seu próprio ambiente de desenvolvimento permite experimentar novas tecnologias, testar conceitos e desenvolver habilidades práticas sem as limitações de um ambiente corporativo.<br>Com um homelab, você pode configurar servidores, implementar redes, trabalhar com virtualização e automação, e até simular cenários de segurança. Essa prática proporciona uma compreensão mais profunda das ferramentas e processos, além de ser uma excelente oportunidade para construir um portfólio sólido. Ao compartilhar suas experiências e projetos, você pode se destacar no mercado, demonstrando iniciativa e capacidade técnica para potenciais empregadores.<br>"
    },
    {
        title: "Hacker do bem e a segurança digital no dia-a-dia (31/07/2024)",
        description: "Um hacker do bem, também chamado de hacker ético, é um especialista em segurança digital que usa suas habilidades para encontrar e corrigir vulnerabilidades em sistemas, prevenindo ataques maliciosos. Esses profissionais ajudam a proteger redes, dados e aplicativos, garantindo que empresas e usuários estejam mais seguros.<br>No dia a dia, a segurança digital é crucial. Práticas como usar senhas fortes, autenticação em dois fatores, atualizar softwares e desconfiar de links suspeitos são medidas simples, mas eficazes, para se proteger contra ameaças cibernéticas. Hackers éticos trabalham para antecipar essas ameaças e tornar a internet um ambiente mais seguro para todos.<br>"
    },
    {
        title: "Você é uma pessoa organizado(a)? (28/08/2024)",
        description: "Ser uma pessoa organizada envolve planejar e priorizar suas tarefas, mantendo um equilíbrio entre suas responsabilidades. Métodos que ajudam incluem o uso de listas de tarefas (to-do lists), calendários para agendar compromissos e prazos, além da técnica Pomodoro, que divide o tempo em blocos de trabalho e pausas. Outra abordagem eficaz é o método de priorização, como a Matriz de Eisenhower, que separa o que é urgente do que é importante.<br><br>Esses hábitos, quando incorporados ao dia a dia, ajudam a manter o foco, evitar o acúmulo de tarefas e melhorar a produtividade de maneira organizada e eficiente. Para quem estiver buscando inspiração, recomendo o livro \"Roube como um Artista: 10 Dicas sobre Criatividade\", de Austin Kleon, que traz insights valiosos sobre como fomentar a criatividade em sua rotina."
    },
    {
        title: "(28/08/2024)",
        description: ""
    },
    {
        title: "(05/09/2024)",
        description: ""
    },
    {
        title: "(19/09/2024)",
        description: ""
    },
    {
        title: "(24/09/2024)",
        description: ""
    },
    {
        title: "(10/10/2024)",
        description: ""
    },
    {
        title: "(11/10/2024)",
        description: ""
    },
    {
        title: "(17/10/2024)",
        description: ""
    },
   
];

document.getElementById("projectCarousel").addEventListener('slide.bs.carousel', function (e) {
    const nextIndex = e.to;
    projectTitle.innerHTML = projectData[nextIndex].title;
    projectDetails.innerHTML = projectData[nextIndex].description; 
});