export interface Questions {
  id: number;
  title: string;
  answers: Array<Answer>;
  isValid: boolean;
}

export interface Answer {
  content: string;
  value: number;
}

export interface FinalAnswer {
  id: number;
  value: number;
  isValid: boolean;
}


export function createQuestions(): Array<Questions> {

  const listOfQuestions: Array<Questions> = new Array<Questions>();

  const question1: Questions = {
    id: 1,
    title: 'Eu sei que ele(a) me ama quando:',
    answers: [
      {
        content: 'Planeja um final de semana inteiro para aproveitarmos juntos',
        value: 1
      },
      {
        content: 'Inesperadamente faz uma declaração romântica belíssima de maneira inteligente, emocionante e muito sincera',
        value: 4
      },
      {
        content: 'Chega com um presente especial em um momento não esperado',
        value: 3
      },
      {
        content: 'Me faz carinho ou massagem espontaneamente sem que eu peça',
        value: 5
      },
      {
        content: 'Percebe meu estado de humor e faz tudo para me animar',
        value: 2
      }
    ],
    isValid: true
  };
  listOfQuestions.push(question1);

  const question2: Questions = {
    id: 2,
    title: 'O que te conquistou no início do relacionamento? ',
    answers: [
      {
        content: 'Ele/a sempre esteve por perto, mesmo distante, havia ligações sem motivo.',
        value: 1
      },
      {
        content: 'Ele/a estava sempre a postos para me ajudar no que fosse preciso.',
        value: 2
      },
      {
        content: 'Cartões, flores e todos os outros presentes surpresas. ',
        value: 3
      },
      {
        content: 'A maneira que falava de mim me encantou.',
        value: 4
      },
      {
        content: 'Beijos e abraços calorosos.',
        value: 5
      }
    ],
    isValid: false
  };
  listOfQuestions.push(question2);

  const question3: Questions = {
    id: 3,
    title: 'Quando você ganha um presente..',
    answers: [
      {
        content: 'Gosto, mas se não tiver um abraço e um beijo depois, melhor nem entregar. ',
        value: 5
      },
      {
        content: 'Gosta, mas prefere que demonstre com atitudes e ações práticas. ',
        value: 2
      },
      {
        content: 'É legal, mas gosto mais quando tem um cartão com belas palavras de declaração.  ',
        value: 4
      },
      {
        content: 'Eu amo! É muito importante demonstrar que se importa com o outro. ',
        value: 3
      },
      {
        content: 'Não fica totalmente satisfeito se a pessoa não estiver presencialmente. ',
        value: 1
      }
    ],
    isValid: true
  };
  listOfQuestions.push(question3);

  const question4: Questions = {
    id: 4,
    title: 'O par perfeito é aquele que...',
    answers: [
      {
        content: 'Faça chuva ou faça sol está sempre ao meu lado. ',
        value: 1
      },
      {
        content: 'Está sempre disposto a resolver qualquer problema. ',
        value: 2
      },
      {
        content: 'É generoso e dá presentes de qualidade. ',
        value: 3
      },
      {
        content: 'Sabe usar as palavras certas para me apoiar no que eu preciso.',
        value: 4
      },
      {
        content: 'Tem o melhor e mais acolhedor abraço.',
        value: 5
      }
    ],
    isValid: true
  };
  listOfQuestions.push(question4);

  const question5: Questions = {
    id: 5,
    title: 'Em um dia comum você...',
    answers: [
      {
        content: 'Passou um tempo pensando: qual será o próximo presente que eu vou dar a ele(a)?',
        value: 3
      },
      {
        content: 'Deu atenção plena para ele(a) durante o café da manhã e/ou almoço e/ou jantar. ',
        value: 1
      },
      {
        content: 'Certamente aproveitou todas as oportunidades para fazer elogios.',
        value: 4
      },
      {
        content: 'Fez almoço, arrumou a casa e lavou louças para ele(a).',
        value: 2
      },
      {
        content: 'Acordou dando um longo abraço no seu amor. ',
        value: 5
      }
    ],
    isValid: true
  };
  listOfQuestions.push(question5);

  const question6: Questions = {
    id: 6,
    title: 'O presente perfeito para você é...',
    answers: [
      {
        content: 'Uma noite romântica com massagem.',
        value: 5
      },
      {
        content: 'Uma declaração de amor com palavras escolhidas a dedo. ',
        value: 4
      },
      {
        content: 'Ser liberado das tarefas domésticas por um dia, apenas para descansar.',
        value: 2
      },
      {
        content: 'Uma viagem juntos. ',
        value: 1
      },
      {
        content: 'Aquele bem material que eu desejo há tempos.',
        value: 3
      }
    ],
    isValid: true
  };
  listOfQuestions.push(question6);

  const question7: Questions = {
    id: 7,
    title: 'Eu fico comovido quando a outra pessoa...',
    answers: [
      {
        content: 'Me dá uma lembrancinha fora de datas comemorativas. ',
        value: 3
      },
      {
        content: 'Me ajuda nos afazeres domésticos sem eu pedir.',
        value: 2
      },
      {
        content: 'Me faz um carinho gostoso inesperado. ',
        value: 5
      },
      {
        content: 'Me incentiva com palavras positivas sobre mim e sobre meus sonhos. ',
        value: 4
      },
      {
        content: 'Me liga sem motivos aparentes. ',
        value: 1
      }
    ],
    isValid: true
  };
  listOfQuestions.push(question7);

  const question8: Questions = {
    id: 8,
    title: 'Quando seu parceiro te convida para uma viagem de final de semana...',
    answers: [
      {
        content: 'Fico contente, mas quero que ele organize tudo para nós dois. ',
        value: 2
      },
      {
        content: 'Fico super animada, não vejo a hora de andarmos pela cidade de mãos dadas. ',
        value: 5
      },
      {
        content: 'Fico muito feliz, é um super presente! ',
        value: 3
      },
      {
        content: 'Acho ótimo, se ele me elogiar durante a viagem, então, perfeito. ',
        value: 4
      },
      {
        content: 'Fico animada e me sinto a pessoa mais amada do mundo, afinal passaremos muito tempo juntos. ',
        value: 1
      }
    ],
    isValid: true
  };
  listOfQuestions.push(question8);

  const question9: Questions = {
    id: 9,
    title: 'No dia a dia você demonstra amor...',
    answers: [
      {
        content: 'Comprando presentes especiais. ',
        value: 3
      },
      {
        content: 'Ficando disponível para passarmos tempo juntos. ',
        value: 1
      },
      {
        content: 'Fazendo declarações verbais de quanto eu aprecio meu amor. ',
        value: 4
      },
      {
        content: 'Com ações práticas, atos de serviço. ',
        value: 2
      },
      {
        content: 'Fazendo massagem. ',
        value: 5
      }
    ],
    isValid: true
  };
  listOfQuestions.push(question9);

  const question10: Questions = {
    id: 10,
    title: 'Finalmente você atingiu aquela meta, está em puro êxtase e deseja comemorar, o que você espera que seu parceiro(a) faça?',
    answers: [
      {
        content: 'Prepare uma noite incrível em casa com jantar e outros mimos.',
        value: 2
      },
      {
        content: 'A emoção é tão grande que primeiro você daria um beijo cinematográfico, depois abraçaria ele(a) e pulariam juntos para comemorar, depois pensariam em outras coisas. ',
        value: 5
      },
      {
        content: 'Compre um presente incrível para tornar inesquecível esse momento. ',
        value: 3
      },
      {
        content: 'Você pode não admitir, mas adoraria ver ele(a) se gabando na frente dos amigos e familiares sobre sua conquista. ',
        value: 4
      },
      {
        content: 'Te leve para jantar, assim poderão ter muito tempo somente para os dois. ',
        value: 1
      }
    ],
    isValid: true
  };
  listOfQuestions.push(question10);

  const question11: Questions = {
    id: 11,
    title: 'Quando seu parceiro prepara o café da manhã pra você e lava as louças você...',
    answers: [
      {
        content: 'Fico animada e me sinto a pessoa mais amada do mundo, afinal ele fez algo por mim. ',
        value: 2
      },
      {
        content: 'Acho legal, mas preferia passar mais tempo com ele mesmo que fosse lavando louça junto, se pudéssemos preparar o café da manhã juntos, então, seria perfeito! ',
        value: 1
      },
      {
        content: 'Ótimo, mas ficarei sentida se ele não reparar que eu pintei as unhas e fiz o cabelo.',
        value: 4
      },
      {
        content: 'Oba!!! Vou encher ele de abraços e cafunés para agradecer.',
        value: 5
      },
      {
        content: 'Acho ótimo, melhor ainda se tiver uma rosa me presenteando.  ',
        value: 3
      }
    ],
    isValid: true
  };
  listOfQuestions.push(question11);

  const question12: Questions = {
    id: 12,
    title: 'Sem esforço como você naturalmente demonstra o seu amor?',
    answers: [
      {
        content: 'Preparo almoço ou jantar, cuido dos afazeres de casa, faço tudo que está ao meu alcance para deixar o dia dele(a) mais leve. ',
        value: 2
      },
      {
        content: 'Reservo o final de semana para fazer coisas juntos.  ',
        value: 1
      },
      {
        content: 'Faça muito carinho, abraço, aperto... ',
        value: 5
      },
      {
        content: 'Compro um presente super especial para mostrar o quanto ele(a) é importante para mim. ',
        value: 3
      },
      {
        content: 'Escrevo um conto, um texto, um poema declarando o quanto o/a amo. ',
        value: 4
      }
    ],
    isValid: true
  };
  listOfQuestions.push(question12);

  const question13: Questions = {
    id: 13,
    title: 'Aconteceu algo que deixou você triste, o que você espera que seu parceiro(a) faça por você?',
    answers: [
      {
        content: 'Faça algo que você gosta para te fazer sorrir. ',
        value: 2
      },
      {
        content: 'Não diga nada, apenas te conforte com um abraço acolhedor.  ',
        value: 5
      },
      {
        content: 'Pergunte como você está, te escute e te anime com palavras positivas. ',
        value: 4
      },
      {
        content: 'Chegue em casa com um presente para te animar.',
        value: 3
      },
      {
        content: 'Fique comigo, não importa para que. ',
        value: 1
      }
    ],
    isValid: true
  };
  listOfQuestions.push(question13);

  const question14: Questions = {
    id: 14,
    title: 'Como a sua mãe (se for mulher) ou seu pai (se for homem) demonstra amor...',
    answers: [
      {
        content: 'Com muitos abraços e beijos. ',
        value: 5
      },
      {
        content: 'Estando disponível para a família. ',
        value: 1
      },
      {
        content: 'Comprando presentes especiais para todo mundo.  ',
        value: 3
      },
      {
        content: 'Com ações práticas, atos de serviço.  ',
        value: 2
      },
      {
        content: 'Fazendo elogios e incentivando todo mundo positivamente. ',
        value: 4
      }
    ],
    isValid: true
  };
  listOfQuestions.push(question14);

  const question15: Questions = {
    id: 15,
    title: 'Quando seu parceiro te elogia...',
    answers: [
      {
        content: 'Eu sorrio e agradeço, mas internamente me pergunto: cadê o presente?',
        value: 3
      },
      {
        content: 'Eu gosto, mas gosto muito mais quando ele passa um tempo assistindo filme comigo.  ',
        value: 1
      },
      {
        content: 'Meus olhos brilham, me empolgo e me sinto a pessoa mais feliz do mundo.  ',
        value: 4
      },
      {
        content: 'Fico meio sem jeito, prefiro que demonstre em ações.  ',
        value: 2
      },
      {
        content: 'Adoro, não me seguro e vou logo dando um abraço. ',
        value: 5
      }
    ],
    isValid: true
  };
  listOfQuestions.push(question15);

  const question16: Questions = {
    id: 16,
    title: 'No relacionamento você é a pessoa que naturalmente...',
    answers: [
      {
        content: 'Gosta de ficar perto e fazer coisas juntos',
        value: 1
      },
      {
        content: 'Sente-se útil e confortável fazendo as coisas (servindo o outro, antecipando demandas, executando tarefas, etc)   ',
        value: 2
      },
      {
        content: 'É apaixonado por palavras, escolhe cada uma com muito cuidado e aprecia muito fazer belas declarações poéticas  ',
        value: 4
      },
      {
        content: 'Abraça e beija o tempo todo ',
        value: 5
      },
      {
        content: 'Adora dedicar tempo prestando atenção nos detalhes para dar o presente ideal para o seu par ',
        value: 3
      }
    ],
    isValid: true
  };
  listOfQuestions.push(question16);

  const question17: Questions = {
    id: 17,
    title: 'Eu odeio quando ele...',
    answers: [
      {
        content: 'Nunca me ajuda com as atividades de casa. ',
        value: 2
      },
      {
        content: 'Me deixa de lado o tempo todo, vive dando atenção para o trabalho, futebol, cerveja e amigos, nunca tem tempo pra mim. ',
        value: 1
      },
      {
        content: 'Se afasta de mim enquanto eu tento me aproximar para ficarmos juntinhos. ',
        value: 5
      },
      {
        content: 'Parece que não me ama, nunca mais me deu nem uma flor. ',
        value: 3
      },
      {
        content: 'Me critica o tempo todo, vive apontando meus erros. ',
        value: 4
      }
    ],
    isValid: true
  };
  listOfQuestions.push(question17);

  const question18: Questions = {
    id: 18,
    title: 'Sem pensar, de forma natural, quando quer agradar seu par você...',
    answers: [
      {
        content: 'Levo o café da manhã na cama. ',
        value: 2
      },
      {
        content: 'Abraço e beijo. ',
        value: 5
      },
      {
        content: 'Dou algum presente.  ',
        value: 3
      },
      {
        content: 'Fico por perto e proponho fazer algo juntos ',
        value: 1
      },
      {
        content: 'Falo como ele é importante pra mim. ',
        value: 4
      }
    ],
    isValid: true
  };
  listOfQuestions.push(question18);

  const question19: Questions = {
    id: 19,
    title: ' Se eu pudesse escolher, eu nunca...  ',
    answers: [
      {
        content: 'Escolheria presentes para dar. ',
        value: 3
      },
      {
        content: 'Iria me expor usando palavras românticas. ',
        value: 4
      },
      {
        content: 'Gastaria tempo ouvindo, ouvindo, ouvindo... ',
        value: 1
      },
      {
        content: 'Lavaria a louça ou faria qualquer serviço de casa. ',
        value: 2
      },
      {
        content: 'Dormiria agarradinho. ',
        value: 5
      }
    ],
    isValid: false
  };
  listOfQuestions.push(question19);

  return listOfQuestions;
}
