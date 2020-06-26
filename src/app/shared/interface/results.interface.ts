export interface Results {
  id: number;
  title: string;
  content: string;
  imagemResposta: string;
}


export function returnResults(): Array<Results> {

  const listOfResults = new Array<Results>();

  const result1: Results = {
    id: 1,
    title: 'TEMPO DE QUALIDADE',
    content: 'A sua linguagem do amor primária é Tempo de Qualidade. Você adora passar tempo junto com o seu amor, mas quando eu digo junto, \n '+ 
    'não é sobre estar fisicamente próximos, mas sim sobre fazer algo juntos de verdade, é sobre focalizar atenção em você, nada de atenção dividida.\n '+ 
    'Se for sair para jantar que sejam os dois e não com o celular ou outra distração como a TV. Se for para conversar, que seja com qualidade,\n '+  
    'profundidade e interesse. Você se sente apreciado quando é notado. \n '+ 
    
    'Tempo de qualidade significa dedicação de atenção, não importa a atividade em si, mas importa \n '+ 
    'totalmente o que acontece no nível emocional. Para você, quando seu par decide investir tempo em uma atividade junto com você, significa que ele se importa com você e isso enche se tanque do amor. ',

    imagemResposta: 'assets/tempo_qualidade.jpeg'
  };
  listOfResults.push(result1);

  const result2: Results = {
    id: 2,
    title: 'ATOS DE SERVIÇO',
    content: 'A sua linguagem de amor primária é atos de serviço. Isso significa que o ato de lavar a louça,\n'+ 
    'passar um pano na casa, cortar a grama do jardim, não são simples ações, para você, são as maiores e \n'+
    'mais incríveis provas de amor quando feitas adequadamente. \n'+
    
    'Você valoriza o tempo e esforço investido em realizar “atos de serviço”.\n '+
    'Você se sente amado(a) por seu amor ter realizado aquela tarefa para você. Pode ser algo simples como forrar a cama, retirar o lixo ou guardar as compras, por exemplo.\n '+ 
    'Mas o sentimento de amor vem quando essas ações são feitas espontaneamente pelo outro, não quando é necessário um pedido/ordem, neste caso, há muito mais um gigantesco \n '+ 
    'sentimento de insatisfação do que o mais profundo e sincero sentir-se amado(a). \n '+ 

    'Observação: Importa sim o ato em si, não é qualquer serviço que encherá o seu tanque do amor. \n '+ 
    'Por isso é importante você se aprofundar em seu autoconhecimento e identificar exatamente quais \n '+ 
    'ações do seu cônjuge realmente são consideradas efetivas para você se sentir amado(a). ',
    imagemResposta: 'assets/atos_servico.jpeg'
      
  };
  listOfResults.push(result2);

  const result3: Results = {
    id: 3,
    title: 'PRESENTES',
    content: 'A sua linguagem do amor primária é presentes. Mas não confunda isso com materialismo. Para você um presente representa amor, representa que a pessoa querida lembrou de você. Ganhar presente significa ser cuidado, ser valorizado acima do que foi sacrificado (tempo, dinheiro, dedicação).\n' +
      'Você valoriza o esforço e a dedicação seja na compra ou na confecção do presente. Sente-se verdadeiramente apreciado quando recebe uma surpresa de presente, principalmente fora de datas comemorativas. Para você presentes são representações físicas e visuais da manifestação do amor.\n' +
      'Ah! Nem preciso dizer que na datas comemorativas os presentes precisam ser caprichados, não é mesmo?!',
      imagemResposta: 'assets/presentes.jpeg'
  };
  listOfResults.push(result3);

  const result4: Results = {
    id: 4,
    title: 'PALAVRAS DE AFIRMAÇÃO',
    content: 'A sua linguagem do amor primária é palavras de afirmação. Para você é extremamente importante que seu parceiro escolha com cuidados as palavras e que carinhosamente dedique tempo para declará-las mesmo em ocasiões simples. Em datas comemorativas, é natural que você espere um bilhete ou um cartão com afirmações positivas sobre você, sobre a sua importância e sobre o relacionamento de vocês. Um presente sem cartão simplesmente não faz sentido! \n' +
      'Sente-se extremamente apreciado quando faz algo sem esperar nada em troca e acaba por receber um lindo elogio pela sua ação. Por exemplo: “Muito obrigada por ter feito um jantar tão saboroso. Ninguém faz um purê como você!”\n' +
      'O que é completamente diferente de ouvir apenas um “Obrigada!”.\n' +
      'Você valoriza as palavras, valoriza o carinho e cuidado dedicado a escolha de cada uma delas e costuma ser extremamente rigoroso(a) para declara-las. \n',
      imagemResposta: 'assets/palavras_afirmacao.jpeg'
  };
  listOfResults.push(result4);

  const result5: Results = {
    id: 5,
    title: 'TOQUE FÍSICO',
    content: 'A sua linguagem de amor é toque físico. Provavelmente, nada é mais acolhedor do que o colo do seu amado(a), é o seu porto seguro e você se enche de segurança e amor. Você adora andar de mãos dadas pois sente que essa atitude é uma prova de amor. Sente-se especial e apreciado quando seu cônjuge te abraça seja em casa a sós ou em locais públicos diversos, o abraço espontâneo dele(a) comunica para você intensa consideração e amor, é o mesmo que dizer “estou aqui por você, eu te amo, pode confiar em mim”. Mas isso não acontece com qualquer toque, sua pele é sensível, por tanto, você é totalmente capaz de sentir amor ou repulsa, o toque precisa ser amigável e amoroso.\n' +
      'Essa linguagem exige uma atenção especial, o corpo é muito extenso e nem todo mundo gosta de ser tocado da mesma maneira. Por tanto, é importante que você aprofunde o seu autoconhecimento, permita-se experimentar e se conhecer cada vez mais.\n',
      imagemResposta: 'assets/toque_fisico.jpeg'
  };
  listOfResults.push(result5);

  return listOfResults;
}
