import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'vidas',
    loadChildren: () => import('./vidas/vidas.module').then( m => m.VidasPageModule)
  },
  {
    path: 'amigos',
    loadChildren: () => import('./amigos/amigos.module').then( m => m.AmigosPageModule)
  },
  {
    path: 'encotrar',
    loadChildren: () => import('./encotrar/encotrar.module').then( m => m.EncotrarPageModule)
  },
  {
    path: 'suporte',
    loadChildren: () => import('./suporte/suporte.module').then( m => m.SuportePageModule)
  },
  {
    path: 'ferramentas',
    loadChildren: () => import('./ferramentas/ferramentas.module').then( m => m.FerramentasPageModule)
  },
  {
    path: 'edicao',
    loadChildren: () => import('./edicao/edicao.module').then( m => m.EdicaoPageModule)
  },
  {
    path: 'diaria',
    loadChildren: () => import('./diaria/diaria.module').then( m => m.DiariaPageModule)
  },
  {
    path: 'herois',
    loadChildren: () => import('./herois/herois.module').then( m => m.HeroisPageModule)
  },
  {
    path: 'loja',
    loadChildren: () => import('./loja/loja.module').then( m => m.LojaPageModule)
  },
  {
    path: 'jogar',
    loadChildren: () => import('./jogar/jogar.module').then( m => m.JogarPageModule)
  },
  {
    path: 'glossario',
    loadChildren: () => import('./glossario/glossario.module').then( m => m.GlossarioPageModule)
  },
  {
    path: 'historico',
    loadChildren: () => import('./historico/historico.module').then( m => m.HistoricoPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
  {
    path: 'perguntas',
    loadChildren: () => import('./perguntas/perguntas.module').then( m => m.PerguntasPageModule)
  },
  {
    path: 'imagens',
    loadChildren: () => import('./imagens/imagens.module').then( m => m.ImagensPageModule)
  },
  {
    path: 'curupira',
    loadChildren: () => import('./curupira/curupira.module').then( m => m.CurupiraPageModule)
  },
  {
    path: 'caipora',
    loadChildren: () => import('./caipora/caipora.module').then( m => m.CaiporaPageModule)
  },
  {
    path: 'boitata',
    loadChildren: () => import('./boitata/boitata.module').then( m => m.BoitataPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz.module').then( m => m.QuizPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
