import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const technologies = [
  {
    id: '1',
    name: 'Catedral Metropolitana Nossa Senhora Aparecidal',
    description: 'Projetada pelo arquiteto Oscar Niemeyer, foi o primeiro monumento a ser criado em Brasília. Foi inaugurada em 31 de maio de 1970. Athos Bulcão foi responsável por pintutras na catedral. Para os interessados, a Catedral também celebra Missas em horários especifícos, para uma mais informações só acessar o site da Catedral. Um belo lugar com lindos vitrais, vale muito a pena conhecer.',
    image: 'https://media.istockphoto.com/id/526718786/pt/foto/catedral-de-bras%C3%ADlia-capital-do-brasil.jpg?s=612x612&w=0&k=20&c=EyDuw7eR_KrcdC4AliZWiiObOPUSlaTJeOlo2W4r5yI=',
  },
  {
    id: '2',
    name: 'Torre de TV',
    description: 'Projetada pelo arquiteto e urbanista Lúcio Costa e inaugurada em 1967, a Torre de Tv é um ponto bem procurado pelos turistas. É a segunda estrutura mais alta do Brasil, com 230 metros de altura, sendo um marco visual do quadradinho. Athos Bulcão, na maioria das vezes presente com sua arte, foi responsável pela pintura de um painel de azulejos no interior da torre. Ela possui um primeiro piso, o mezanino que se apresenta como um amplo espaço para eventos com 360º de vista para a cidade. A torre também possui um mirante, que possui 75 metros de altura que é indispensável conhecer. Nos arredores da Torre de TV acontece uma feira de quinta a domingo, também é bem interessante dar uma olhada. A visita a Torre é orbigatória para os turistas que vão pela primeira vez à capital.',
    image: 'https://www.hplus.com.br/wp-content/uploads/2024/07/53334075135_723b6399a0_k.jpg',
  },
  {
    id: '3',
    name: 'Memorial JK',
    description: 'É um lindo museu, construído para manter viva a memória daquele que ousou construir uma cidade no meio do nada: o ex-presidente Juscelino Kubitschek. Localizado em um dos pontos mais altos e icônicos da capital, o monumento reúne acervo obrigatório para quem pretende conhecer os bastidores da construção da capital. No memorial se encontra o túmulo onde JK descansa está no centro de um ambiente com paredes esculpidas por Athos Bulcão e um vitral feito por Marianne Peretti. O espaço recebe luz natural que varia de tom de acordo com a posição do Sol. O projeto arquitetônico do Memorial JK foi inaugurado em 1981. Trata-se de uma homenagem de Dona Sarah Kubitschek para manter viva a memória do marido após sua morte. Um espaço muito interessante de conhcer e bem emocionante.  ',
    image: 'https://acrosstheuniverse.blog.br/wp-content/uploads/2020/08/Esta%CC%81tua-Memorial-JK.jpg',
  },
  {
    id: '4',
    name: 'Congresso Nacional',
    description: 'O Palácio do Congresso Nacional é um dos pilares da arquitetura monumental de Niemeyer que dão forma à capital inaugurada em 1960. Está erguido na Praça dos Três Poderes, que tem este nome por também abrigar o Palácio do Planalto (sede do Poder Executivo) e o Palácio do Supremo Tribunal Federal (instância máxima do Poder Judiciário). Construído em terreno elevado, é visto de longe como culminância da avenida Eixo Monumental, que abriga a Esplanada dos Ministérios e atravessa a cidade de norte a sul. Sede das duas Casas do Poder Legislativo e um dos mais famosos cartões postais do Brasil, o Palácio do Congresso Nacional é composto por duas cúpulas e duas torres de 28 andares, que abrigam a Câmara dos Deputados e o Senado Federal. O Congresso possui visitação guiada que conta sobre a história política do Brasil e passa por lindos salões e corredores com obras de arte de valor inestimável. Muito interessante conhecer esse espaço tão importante para o Brasil. ',
    image: 'https://www.politize.com.br/wp-content/uploads/2024/07/image-1.png',
  },
  {
    id: '5',
    name: 'Pontão Lago Sul',
    description: 'Para quem visita Brasília o Pontão do Lago Sul é um local obrigatório. Atrativos não faltam ao maior centro de lazer e entretenimento da capital federal: cenário de cartão-postal, gastronomia variada, programação cultural e esportiva, amplo estacionamento e inúmeros serviços, além do seu clima quase praiano e do pôr-do-sol mais belo da cidade. Um centro completo de lazer cercado por muito verde e segurança que contribuíram para torná-lo um dos pontos turísticos mais visitados de Brasília e integrá-lo ao cotidiano dos moradores da cidade.  Seu freqüentador pode optar, ainda, por chegar ao Pontão de lancha, onde terá quatro opções de píer para facilitar o seu acesso. Das margens pode se observar um verdadeiro espetáculo de manobras radicais de esportes náuticos no Lago Paranoá, praticados por amadores e profissionais - de wakeboard e de windsurfe.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/dc/5a/1f/vista-geral-do-pontao.jpg?w=1200&h=1200&s=1',
  },
  {
    id: '6',
    name: 'Museu Nacional da República',
    description: 'O Museu Nacional da República (MuN) faz parte do Conjunto Cultural da República, juntamente com a Biblioteca Nacional de Brasília, e foi inaugurado em 15 de dezembro de 2006. O Museu Nacional da República é um equipamento cultural sob gestão da Secretaria de Cultura e Economia Criativa do Distrito Federal, sem fins lucrativos, à serviço da comunidade e do seu desenvolvimento. O Museu tem como missão promover as artes visuais para todos os públicos, de forma dialógica, e ser um espaço de incentivo à curiosidade, sensibilização do olhar e produção de conhecimento, por meio de ações de formação do acervo, salvaguarda, pesquisa, comunicação e educação. É bem interessante reservar um tempo para conhcer esse monumento e visitar as exposições que estão presentes lá. No site do museu tem a agenda das exposições que sempre muda, então é imporante se manter atualizado. ',
    image: 'https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2022/10/04115005/20042021-RF-_-Museu-Nacional-da-Republica-_-cenas-da-cidade_-004.jpg',
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <Image 
      source={{uri:'https://especiais.g1.globo.com/distrito-federal/2018/desenho-de-brasilia-inspirado-em-aviao-mito-ou-verdade/data/mapa%20original%20brasilia%203_src.jpg'}}
      style = {{width: '100%', height: 200}}
      />
      <Text style={styles.titulo}>Pontos turísticos de BSB</Text>
      <FlatList
        data={technologies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
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
    padding: 30,
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
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default App;
