import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Definindo o Stack Navigator
const Stack = createStackNavigator();

const places = [
  {
    id: '1',
    name: 'Pontos Turísticos',
    description: 'Brasília, a capital do Brasil, é uma cidade repleta de marcos arquitetônicos e culturais que a tornam única. Projetada por Oscar Niemeyer e Lúcio Costa, a cidade é um verdadeiro museu a céu aberto, com suas imponentes construções modernistas, como o Congresso Nacional, a Catedral de Brasília e o Palácio da Alvorada.  Brasília é também um centro de cultura e história, com museus como o Museu Nacional e o Memorial JK, que celebram o legado da cidade e de seus fundadores. A cidade, tombada como Patrimônio Cultural da Humanidade, é um destino imperdível para quem aprecia arquitetura, arte e história.',
    image: 'https://i0.wp.com/meugodrive.wpcomstaging.com/wp-content/uploads/2023/11/Visao-aerea-do-Eixo-Monumentla-em-Brasilia.png?fit=800%2C400&ssl=1',
    imagesWithInfo: [
      { 
        url: 'https://media.istockphoto.com/id/526718786/pt/foto/catedral-de-bras%C3%ADlia-capital-do-brasil.jpg?s=612x612&w=0&k=20&c=EyDuw7eR_KrcdC4AliZWiiObOPUSlaTJeOlo2W4r5yI=', 
        info: 'Catedral Metropolitana Nossa Senhora Aparecida', 
        extraInfo: {
          hours: 'Terça a sexta, das 8h às 16h45 e Domingo, das 7h às 17h30',
          address: 'Esplanada dos Ministérios – Lote 12',
          history: 'Projetada pelo arquiteto Oscar Niemeyer, foi o primeiro monumento a ser criado em Brasília. Foi inaugurada em 31 de maio de 1970. O batistério em forma ovoide teve em suas paredes o painel em lajotas cerâmicas pintadas em 1977 por Athos Bulcão. A via sacra é uma obra de Di Cavalcanti. Na entrada da catedral, encontra-se um pilar com passagens da vida de Maria, mãe de Jesus, pintados por Athos Bulcão.A Catedral de Brasília é um dos ícones da arquitetura moderna e um exemplo de liberdade da forma. Para os interessados, a Catedral também celebra Missas em horários específicos. Um belo lugar com lindos vitrais, vale muito a pena conhecer.'
        }
      },
      { 
        url: 'https://www.hplus.com.br/wp-content/uploads/2024/07/53334075135_723b6399a0_k.jpg', 
        info: 'Torre de TV',
        extraInfo: {
          hours: 'Terça a domingo, das 9h às 18h45',
          address: 'Torre de TV de Brasília - Esplanada da Torre - Plano Piloto, Brasília - DF, 70070-300',
          history: 'Projetada pelo arquiteto e urbanista Lúcio Costa e inaugurada em 1967, a Torre de Tv é um ponto bem procurado pelos turistas. É a segunda estrutura mais alta do Brasil, com 230 metros de altura, sendo um marco visual do quadradinho. Athos Bulcão, na maioria das vezes presente com sua arte, foi responsável pela pintura de um painel de azulejos no interior da torre. Ela possui um primeiro piso, o mezanino que se apresenta como um amplo espaço para eventos com 360º de vista para a cidade. A torre também possui um mirante, que possui 75 metros de altura que é indispensável conhecer. Nos arredores da Torre de TV acontece uma feira de quinta a domingo, também é bem interessante dar uma olhada. A visita a Torre é orbigatória para os turistas que vão pela primeira vez à capital.'
        }
      },
      { 
        url: 'https://acrosstheuniverse.blog.br/wp-content/uploads/2020/08/Esta%CC%81tua-Memorial-JK.jpg', 
        info: 'Memorial JK',
        extraInfo: {
          hours: 'Terça a domingo, das 9h às 18h',
          address: 'Eixo Monumental - Lado Oeste - Praça do Cruzeiro, Brasília - DF, 70070-300',
          history: 'É um lindo museu, construído para manter viva a memória daquele que ousou construir uma cidade no meio do nada: o ex-presidente Juscelino Kubitschek. Localizado em um dos pontos mais altos e icônicos da capital, o monumento reúne acervo obrigatório para quem pretende conhecer os bastidores da construção da capital. No memorial se encontra o túmulo onde JK descansa está no centro de um ambiente com paredes esculpidas por Athos Bulcão e um vitral feito por Marianne Peretti. O espaço recebe luz natural que varia de tom de acordo com a posição do Sol. O projeto arquitetônico do Memorial JK foi inaugurado em 1981. Trata-se de uma homenagem de Dona Sarah Kubitschek para manter viva a memória do marido após sua morte. Um espaço muito interessante de conhcer e bem emocionante.'
        }
      },
      { 
        url: 'https://www.politize.com.br/wp-content/uploads/2024/07/image-1.png', 
        info: 'Congresso Nacional',
        extraInfo: {
          hours: 'Quinta a segunda, das 9h às 17h',
          address: 'Palácio do Congresso Nacional - Praça dos 3 Poderes, Brasília - DF, 70160-900',
          history: 'O Palácio do Congresso Nacional é um dos pilares da arquitetura monumental de Niemeyer que dão forma à capital inaugurada em 1960. Está erguido na Praça dos Três Poderes, que tem este nome por também abrigar o Palácio do Planalto (sede do Poder Executivo) e o Palácio do Supremo Tribunal Federal (instância máxima do Poder Judiciário). Construído em terreno elevado, é visto de longe como culminância da avenida Eixo Monumental, que abriga a Esplanada dos Ministérios e atravessa a cidade de norte a sul. Sede das duas Casas do Poder Legislativo e um dos mais famosos cartões postais do Brasil, o Palácio do Congresso Nacional é composto por duas cúpulas e duas torres de 28 andares, que abrigam a Câmara dos Deputados e o Senado Federal. O Congresso possui visitação guiada que conta sobre a história política do Brasil e passa por lindos salões e corredores com obras de arte de valor inestimável. Muito interessante conhecer esse espaço tão importante para o Brasil.'
        }
      },
      { 
        url: 'https://vejasp.abril.com.br/wp-content/uploads/2020/02/241761_191586517641487_1366774401_o.jpg?quality=70&strip=info&crop=1&resize=1080,565', 
        info: 'Museu Nacional da República',
        extraInfo: {
          hours: 'Terça a domingo, das 9h às 18h30',
          address: 'Setor Cultural Sul, Lote 2 próximo à Rodoviária do Plano Piloto, Brasília - DF, 70070-150',
          history: 'O Museu Nacional da República (MuN) faz parte do Conjunto Cultural da República, juntamente com a Biblioteca Nacional de Brasília, e foi inaugurado em 15 de dezembro de 2006. O Museu Nacional da República é um equipamento cultural sob gestão da Secretaria de Cultura e Economia Criativa do Distrito Federal, sem fins lucrativos, à serviço da comunidade e do seu desenvolvimento. O Museu tem como missão promover as artes visuais para todos os públicos, de forma dialógica, e ser um espaço de incentivo à curiosidade, sensibilização do olhar e produção de conhecimento, por meio de ações de formação do acervo, salvaguarda, pesquisa, comunicação e educação. É bem interessante reservar um tempo para conhcer esse monumento e visitar as exposições que estão presentes lá. No site do museu tem a agenda das exposições que sempre muda, então é imporante se manter atualizado.'
        }
      }
    ]
  },
  {
    id: '2',
    name: 'Lazer',
    description: 'Brasília oferece uma variedade de opções de lazer que agradam a todos os gostos. Com seus amplos espaços ao ar livre, como o Parque da Cidade, o Jardim Botânico e o Lago Paranoá, a cidade é ideal para quem busca atividades ao ar livre, caminhadas, passeios de bicicleta e esportes aquáticos.',
    image: 'https://blog.maxmilhas.com.br/wp-content/uploads/2020/09/4afc95844fd121eda33d2dc4e58cb8fe-1024x512.jpg',
    imagesWithInfo: [
      { 
        url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/dc/5a/1f/vista-geral-do-pontao.jpg?w=1200&h=1200&s=1', 
        info: 'Pontão Lago Sul',
        extraInfo: {
          hours: 'Diariamente, das 7h às 01h',
          address: 'SHIS Ql 10, 1/30 - Lago Sul, Brasília - DF, 71630-115',
          history: 'Para quem visita Brasília o Pontão do Lago Sul é um local obrigatório. Atrativos não faltam ao maior centro de lazer e entretenimento da capital federal: cenário de cartão-postal, gastronomia variada, programação cultural e esportiva, amplo estacionamento e inúmeros serviços, além do seu clima quase praiano e do pôr-do-sol mais belo da cidade. Um centro completo de lazer cercado por muito verde e segurança que contribuíram para torná-lo um dos pontos turísticos mais visitados de Brasília e integrá-lo ao cotidiano dos moradores da cidade.  Seu freqüentador pode optar, ainda, por chegar ao Pontão de lancha, onde terá quatro opções de píer para facilitar o seu acesso. Das margens pode se observar um verdadeiro espetáculo de manobras radicais de esportes náuticos no Lago Paranoá, praticados por amadores e profissionais - de wakeboard e de windsurfe.'
        }
      },
      { 
        url: 'https://visitebrasilia.com.br/images/2022/05/20220503155157_l_Parquedacidade.jpg', 
        info: 'Parque da Cidade Dona Sarah Kubitschek',
        extraInfo: {
          hours: 'Diariamente, 24 horas',
          address: 'Srps - Asa Sul, Brasília - DF, 70635-815',
          history: 'Parque da Cidade Dona Sara Kubitschek, popularmente conhecido como Parque da Cidade, é um local idealizado para o cidadão que dispõe os mais variados tipos de atrações como: Shows, Exposições, Piqueniques, Saraus, Corridas, Caminhadas, ótimo lugar para fazer Churrascos, Aniversários e até Casamentos. Cientes de que o Parque da Cidade é o coração de Brasília e um dos pontos turísticos mais belos e frequentados da Capital Federal, conhecido por ser o maior parque da América Latina e um dos maiores parques do mundo, possuindo 420 hectares, contendo árvores nativas e não nativas do Cerrado, além da natureza, que faz com que os visitantes se sintam bem relaxados, com aves de várias espécies e animais diversos, possui infraestrutura bem planejada e elaborada; O Parque é um lugar aberto, para algumas atividades é gratuito; O Parque oferece atividades para todos os gostos e idades é um lugar único e especial, contém muita história e tradição. Um lindo lugar para praticar atividade física e esporte, com muitas quadras esportivas e ótimos quisques para tomar uma água de coco refrescante e muito mais. Lá também possui um parque de diversões, o Nicolândia, vale muito a pena conhecer.'
        }
      },
      { 
        url: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/11/ccbb-brasilia.png?w=1200&h=675&crop=1', 
        info: 'CCBB Brasília',
        extraInfo: {
          hours: 'Terça a domingo, das 9h às 21h',
          address: 'SCES, Trecho 2 - Brasília, DF',
          history: 'Inaugurado em 12 de outubro de 2000, o CCBB Brasília está sediado no Edifício Tancredo Neves, uma obra arquitetônica de Oscar Niemeyer, e tem o objetivo de reunir, em um só lugar, todas as formas de arte e criatividade possíveis. Com projeto paisagístico assinado por Alda Rabello Cunha, o CCBB Brasília dispõe de amplos espaços de convivência, bistrô, galerias de artes, sala de cinema, teatro, praça central e jardins, onde são realizados exposições, shows musicais, espetáculos, exibições de filmes e performances. Além disso, oferece o Programa Educativo CCBB Brasília, programa contínuo de arte-educação patrocinado pelo Banco do Brasil que desenvolve ações educativas e culturais para aproximar o visitante da programação em cartaz no Centro Cultural Banco do Brasil (CCBB), acolhendo o público espontâneo e, especialmente, milhares de estudantes de escolas públicas e particulares, universitários e instituições, ao longo do ano, por meio de visitas mediadas agendadas, além de oferecer atividades de arte e educação aos fins de semana. No site do CCBB possui todas as programações da semana atualizadas, fique de olho e não perca a oportunidade de conhecer.'
        }
      },
      { 
        url: 'https://nautica.com.br/wp-content/uploads/2024/07/brasilia-boat-show-4.jpg', 
        info: 'Centro de Lazer Beira Lago',
        extraInfo: {
          hours: 'Diariamente, mais aos fins de semana e feriados',
          address: '70, St. de Clubes Esportivos Sul Trecho 2, Brasília - DF, 70297-400',
          history: 'O Centro de Lazer Beira Lago, localizado às margens do Lago Paranoá em Brasília, é um dos destinos mais populares para quem busca diversão e relaxamento na cidade. O local oferece uma infraestrutura completa para atividades ao ar livre, com diversas opções para toda a família. Entre as atrações, destacam-se as áreas para caminhadas e ciclismo, além de espaços para piqueniques e relaxamento, com vista deslumbrante para o lago. O centro também conta com opções de esportes aquáticos, como aluguel de caiaques e stand-up paddle, permitindo que os visitantes aproveitem o Lago Paranoá de maneira mais ativa. Para quem prefere atividades mais tranquilas, há áreas para leitura e descanso, além de quiosques e lanchonetes que oferecem petiscos e bebidas. Além disso, o Beira Lago é um ótimo ponto para admirar o pôr do sol, proporcionando uma experiência única em contato com a natureza, dentro da cidade. Esse espaço é perfeito para quem busca lazer, atividades ao ar livre e momentos de descontração.'
        }
      },
      { 
        url: 'https://static.poder360.com.br/2024/09/eixao-lazer-brasilia-6-set-2024-848x477.jpg', 
        info: 'Eixão do Lazer',
        extraInfo: {
          hours: 'Domingo, das 6h às 18h',
          address: 'Asa Norte/Asa Sul',
          history: 'Com eventos culturais que movimentam as Asas Sul e Norte, o Eixão do Lazer atrai ainda pessoas que gostam de praticar exercícios ao ar livre. Catorze quilômetros. Essa é a extensão do Eixão do Lazer, projeto que fecha as vias principais dos Eixos Sul e Norte para carros, das 6h às 18h, todos os domingos desde 1991. E se a ideia é antiga, a ocupação das ruas ainda é nova e crescente. Eventos culturais se espalham pelas áreas verdes ao redor do eixão e aparecem como uma opção gratuita para quem busca diversão nos finais de semana em Brasília.'
        }
      }
    ]
  },
  {
    id: '3',
    name: 'Gastronomia',
    description: 'Brasília é um destino gastronômico vibrante, que mistura influências regionais e internacionais, oferecendo opções para todos os gostos. A cidade conta com uma ampla variedade de restaurantes, desde os mais sofisticados, com culinária internacional, até os tradicionais, que celebram os sabores típicos do Brasil. A região da Asa Sul é famosa por sua diversidade de restaurantes, enquanto o Mercado Municipal e a Feirinha de Brasília proporcionam uma imersão nos sabores locais e na cultura de rua. Além disso, a cidade conta com diversas opções de cafés, food trucks e bares que garantem uma experiência completa para quem busca apreciar pratos autênticos ou explorar novas tendências gastronômicas. Seja para um almoço casual, um jantar sofisticado ou um happy hour descontraído, Brasília oferece opções para todos os paladares.',
    image: 'https://www.viajali.com.br/wp-content/uploads/2023/07/restaurantes-brasilia-00.png',
    imagesWithInfo: [
      { 
        url: 'https://uploads.metroimg.com/wp-content/uploads/2017/07/26151840/250717-FM-Gostoso-e-acessivel-BSB-Grill-024_.jpg', 
        info: 'BSB Grill', 
        extraInfo: {
          hours: 'Terça a sábado, das 12h às 00h e Domingo, das 12h às 17h',
          address: 'Asa Sul Comércio Local Sul 413 BL D - Asa Sul, Brasília - DF, 70296-540 // Asa Norte CLN 304 BL B - Lj, Brasília - DF, 70736-520',
          history: 'O BSB Grill Sul foi pioneiro ao trazer cortes especiais para Brasília. As carnes das raças Aberdeen Angus e Wagyu, duas das mais suculentas oferecidas no mercado, estão no cardápio do restaurante desde a inauguração da marca, na Asa Norte, em 1998. Como prato principal, entre os queridinhos que mais saem, está a picanha e o bife de tira acompanhados de arroz com brócolis, farofa de ovo e batata suflê. Outra pedida são as tábuas de carne com um pouquinho de cada corte: chorizo, picanha, bife ancho, maminha e fraldinha. É possível escolher entre dois, três e quatro tipos de carne nas opções de tábuas. Além do churrasco, o estabelecimento é famoso pela culinária árabe, como a esfiha folhada, um dos carros-chefes do local. Também compõem o cardápio árabe quibe (frito, assado e cru), homus, babaganuche, chancliche e kafta. Ótimas opções para entradas. O restaurante é reconhecido pela qualidade dos pratos e conquistou diversas premiações gastronômicas promovidas pela Veja, Roteiro e Gula. Outra paixão que vem de casa é pelo automobilismo. Na unidade da Asa Sul, localizada na comercial da quadra 413, é possível ver logo na entrada um carro de corrida pendurado no teto. O veículo foi utilizado pelo piloto Hoover Orsi e venceu três provas da Stock Car. Junto com ele, o espaço possui itens de colecionador do mundo das corridas como miniaturas de veículos de competição e macacões originais de pilotos. Serve pratos para happy hour · Serve ótimos coquetéis · Bom para assistir a esportes'
        }
      },
      { 
        url: 'https://jornalcapitalfederal.com.br/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-17-at-09.28.28-1-706x1024.jpeg', 
        info: 'Boteco Caju Limão',
        extraInfo: {
          hours: 'Segunda a Quinta - 11h30 às 00h Sexta e Sábado - 11h30 às 01h00 Domingo - 11h30 às 22h30',
          address: 'Quadra 202, Bloco A, Loja 3 – Asa Norte, em Brasília (DF)',
          history: 'Um petisco frito na hora, aquela cerveja gelada e assuntos que rendem horas. Do que lembrou? Certamente de um bom boteco. E essa é a essência do novo point de Brasília, o Boteco Caju Limão, que celebra a tradição dos bares clássicos da cidade; da localização até o cardápio. Um dos chamariz do Caju Limão é o chopp cremoso servido na tulipa ou na caneca congelada, que vai bem sozinho ou acompanhado de petiscos dos mais variados tipos. O Caju Limão tem um espaço ao ar livre, tranquilo e acolhedor, com capacidade para receber até 500 pessoas. Além do espaço, o bar contempla um cardápio de petiscos típicos de boteco assinados pela renomada chef Babi Frazão, que tem vasta experiência em restaurantes pelo mundo. O novo point também apresenta uma carta de drinks elaborada pelo mixologista Bruno Machado, com drinks autorais, clássicos e releituras, entre elas o outro carro-chefe que deu nome ao boteco: a caipi de Caju Limão.'
        }
      },
      { 
        url: 'https://uploads.metropoles.com/wp-content/uploads/2022/07/05132127/BC199B59-A053-4C3A-8A65-CADA3227CFED.jpeg', 
        info: 'Dog da Igrejinha',
        extraInfo: {
          hours: 'Diariamente, das 18h às 00h30',
          address: 'Asa Sul Superquadra Sul 307 - Brasília, DF, 70360-510',
          history: 'A exemplo de sua população, que conta com pessoas de várias regiões do Brasil, a capital federal reúne algumas das mais diversas receitas de hot-dogs. Mais que isso: Brasília conta com uma receita de cachorro-quente que pode chamar de "sua". No "dog" do Distrito Federal, não podem faltar ingredientes como queijo, bacon e as famosas pastas de alho, consideradas praticamente obrigatórias na versão brasiliense. .No centro de Brasília, mais exatamente na quadra 307 sul, o Dog da Igrejinha praticamente consolidou a receita clássica do hot-dog brasiliense. Criado em 1995 pelos irmãos Raimundo e Francisco Sousa, o antigo Raimundo Hot-Dog ganhou o coração dos brasilienses e é considerado uma referência na gastronomia local.'
        }
      },
      { 
        url: 'https://uploads.metroimg.com/wp-content/uploads/2017/02/11162024/ernesto2.jpg', 
        info: 'Ernesto Café Especiais',
        extraInfo: {
          hours: 'Diarimente, das 7h às 22h',
          address: 'Asa Sul CLS 115 BL C - Asa Sul, Brasília - DF, 70385-530 // Asa Norte Comércio Local Norte 108 BLoco A Loja 48 - Asa Norte, Brasília - DF, 70788-510',
          history: 'É o primeiro nome que vem à cabeça de muita gente quando se fala a palavra “café” em Brasília. O Ernesto é a perfeita combinação de ambiente bacana, comidinhas deliciosas — tem bolos irresistíveis e até uma famosa pamonha assada aos fins de semana — e café em diferentes blends e formas de extração. A vizinhança com a Urban Arts reforça o aspecto cool do lugar. Além de ser um verdadeiro ícone no cenário café de Brasília, o Ernesto Café conquista pela sua atmosfera acolhedora e descomplicada, onde cada detalhe reflete o carinho e a paixão pelo que faz. Seja para um café rápido no intervalo do dia ou para um encontro mais descontraído com amigos, o ambiente é perfeito para se perder entre conversas e risadas. O aroma inconfundível do café, aliado à vibe descontraída do local, faz do Ernesto um lugar onde os momentos ganham sabor e memória. E, claro, é impossível não se deixar levar pela variedade de opções irresistíveis no cardápio, que vão muito além do café, criando uma experiência completa para todos os sentidos.'
        }
      },
      { 
        url: 'https://http2.mlstatic.com/D_NQ_NP_679402-MLA74140244916_012024-OO.jpg', 
        info: 'Deboche! Bar',
        extraInfo: {
          hours: 'Terça a quarta, das 18h às 00h - Quinta, das 18h às 01h - Sexta a sábado, das 16h às 1h- Domingo, das 16h00 às 00h',
          address: 'Asa Norte CLN 201 BL A Loja 61 - Asa Norte, Brasília - DF, 70832-510',
          history: 'Comida de boteco, bebida gelada e música animada. Os prazeres que os brasileiros tanto adoram está presente nop Deboche! Bar. O menu assinado pela chef Luiza Pinheiro aposta em porções de bolinhos fritos como, por exemplo, o Feijuca (R$ 24,99, seis unidades), com massa feita de carne e feijão batidos e engrossada com farinha de mandioca. O preparo é acompanhado pela maionese de caipirinha da casa. Os produtos veganos e sem glúten também estão entre as opções do cardápio. O bolinho Fala, Rafael (R$ 24,99, seis unidades) será feito de grão-de-bico batido com uma combinação de temperos especiais. Além disso, a casa terá receitas como a Batata frita debochada (R$ 24,99, com 500g). A batata crocante é coberta com carne de porco desfiada cozida no molho de churrasco da casa e finalizada com requeijão cremoso e cebolinha. Para acompanhar, um molho à escolha do cliente. Quem passar pelo Deboche! Bar terá a chance de provar drinques refrescantes e clássicos. Na carta assinada pelo mixologista Gustavo Guedes estão bebidas como o Antiquado (R$ 27). O drinque é uma releitura do Old Fashioned feita com cachaça envelhecida e calda de café com castanha do Pará. Quem também ganhou uma nova versão foi o queridinho, moscow mule. No espaço, a bebida ganha o nome de Axé Mule (R$ 25) e novos sabores com a troca da clássica espuma de gengibre por uma espuma de cupuaçu. A carta leva em consideração insumos bem brasileiros, sem deixar de lado as tendências da coquetelaria mundial. É uma proposta divertida, com mixologia de qualidade.'
        }
      }
    ]
  }
];

// Tela de detalhes 
const DetailsScreen = ({ route }) => {
  const { name, description, image, imagesWithInfo } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: image }} style={styles.mainImage} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>

      <Text style={styles.sectionTitle}>Opções para visitar:</Text>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.imageScroll}>
        {imagesWithInfo.map((item, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={{ uri: item.url }} style={styles.additionalImage} />
            <View style={styles.infoContainer}>
              <Text style={styles.imageInfo}>{item.info}</Text>
              <Text style={styles.extraInfo}>Horário: {item.extraInfo.hours}</Text>
              <Text style={styles.extraInfo}>Endereço: {item.extraInfo.address}</Text>
              <Text style={styles.extraInfo}>Sobre: {item.extraInfo.history}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

// Tela principal com a lista 
const HomeScreen = ({ navigation }) => {
  const handleButtonClick = (name, description, image, imagesWithInfo) => {
    navigation.navigate('Details', { name, description, image, imagesWithInfo });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>O que fazer em BSB?</Text>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Button
                title="Ver Detalhes"
                onPress={() => handleButtonClick(item.name, item.description, item.image, item.imagesWithInfo)}
                color="#1CC4A8" // Cor para o botão
                style={styles.button}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  titulo: {
    fontSize: 40,
    backgroundColor: '#1CC4A8',
    textAlign: 'center',
    marginBottom: 20,
    borderRadius: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginRight: 15,
  },
  mainImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  additionalImage: {
    width: '100%',
    height: 250,
    marginBottom: 10,
    borderRadius: 10,
  },
  imageContainer: {
    marginBottom: 20,
  },
  infoContainer: {
    marginTop: 10,
  },
  imageScroll: {
    marginVertical: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  extraInfo: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  imageInfo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  }
});

export default App;
