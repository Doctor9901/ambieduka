import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-glossario',
  templateUrl: './glossario.page.html',
  styleUrls: ['./glossario.page.scss'],
  standalone: false,
})
export class GlossarioPage implements OnInit {
   
  async clusiaAlert() {
    const alert = await this.alertController.create({
      header: 'Clúsia',
      message: "A planta, que pertence à família das Clusiaceae, possui flores pequenas e de fácil cultivo. Por possuir também folhas muito bonitas e brilhantes, a árvore é uma queridinha no mundo do paisagismo. Elas possuem um formato de gota e chamam muita atenção onde quer que elas estejam. Com flores pequenas, a planta pode chegar a medir até seis metros caso não recebam poda.",
       subHeader:'Como Cuidar: As variedades de clúsia resistem muito bem às podas e crescem de forma muito rápida. Quando a adubação acontece de forma correta, as folhas podem se apresentar mais vistosas e lisinhas.Esses cuidados podem evitar que essas folhas atraiam a atenção de pragas, já que possuem grandes quantidades de tanino, um componente que protege a planta do ataque de espécies trepadeiras e outras plantas que podem “consumir” a energia da clúsia. É também esse componente que garante que as folhas das plantas tenham um gosto amargo, característica essa que é essencial para a proteção de pragas ou roedores.',
      buttons: ['fechar'],
    });

    await alert.present();
  }

  async orquideaAlert() {
    const alert = await this.alertController.create({
      header: 'Orquídea',
      message: 'A Cattleya labiata é uma orquídea que ocorre exclusivamente no Brasil, sendo típica de vários estados da região nordeste do país. Devido ao seu habitat de origem, é conhecida como a rainha do sertão ou a rainha do nordeste. Esta orquídea especial é encontrada na caatinga nordestina, único bioma exclusivamente brasileiro, em brejos de altitude, como planta de hábito epífito (vegetando sobre árvores) ou rupícola (vivendo sobre pedras).',
      subHeader: 'Como Cuidar: Trata-se de uma orquídea que aprecia altos níveis de luminosidade, podendo inclusive tolerar algumas horas de sol direto, principalmente no início da manhã e no final da tarde. Durante os meses mais quentes do ano, e nos horários mais quentes do dia, convém proteger a Cattleya labiata do sol pleno com telas de sombreamento, que podem ter a gradação de filtrar 50% da luminosidade. Desta forma, evitamos a ocorrência de queimaduras em suas folhas, que podem provocar lesões que servem como porta de entrada para infecções ocasionadas por fungos e bactérias.',
      buttons: ['fechar'],
    });

    await alert.present();
  }

  async abricoAlert() {
    const alert = await this.alertController.create({
      header: 'Abricó-do-pará',
      message: 'O abricó da Amazônia (Mammea americana), também conhecido como abricoteiro, abricó-de-são-domingos e abricó-selvagem, é uma árvore da família Calophyllaceae ou da família Clusiaceae, natural da Amazônia, das Antilhas e do México. A árvore atinge os 18–21 metros de altura; seu tronco é curto e chega a 1,9-2,2 metros de diâmetro. A madeira é usada em construção interna. O fruto, que é uma baga muito maior que a do abricó comum, é usado em compotas, xaropes e refrescos.',
      subHeader:'Como Cuidar: Deve ser cultivada sob sol pleno ou meia sombra, em solo fértil, profundo, drenável, enriquecido com matéria orgânica e irrigado regularmente, principalmente nos primeiros anos de implantação. Aprecia o calor e a umidade tropicais, se desenvolvendo melhor em regiões com índices pluviométricos anuais acima de 1500 milímetros.Em outros locais é recomendada uma irrigação suplementar. O abricó-do-pará não tolera frio intenso, geadas ou mesmo períodos de estiagem. Adubações orgânicas regulares, assim como uma boa cobertura morta mantida sobre o solo são importantes para o abricó-do-pará. Multiplica-se por sementes ou preferencialmente por garfagem (uma forma de estaquia). As sementes tem uma germinação lenta e desuniforme, levando de 60 a 260 dias para se completar.',
      buttons: ['fechar'],
    });

    await alert.present();
  }
  
  async indisponivel1() {
    const alert = await this.alertController.create({
      header: 'Indisponível',
      message: 'Não Encotrado',
      buttons: ['fechar'],
    });

    await alert.present();
  }

  async indisponivel2() {
    const alert = await this.alertController.create({
      header: 'Indisponível',
      message: 'Não Encotrado',
      buttons: ['fechar'],
    });

    await alert.present();
  }

  async indisponivel() {
    const alert = await this.alertController.create({
      header: 'Indisponível',
      message: 'Não Encotrado',
      buttons: ['fechar'],
    });

    await alert.present();
  }

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
  voltar() {
    window.history.back();
}
}
