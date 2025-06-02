import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'vidas',
    loadChildren: () => import('./vidas/vidas.module').then( m => m.VidasPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'amigos',
    loadChildren: () => import('./amigos/amigos.module').then( m => m.AmigosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'encotrar',
    loadChildren: () => import('./encotrar/encotrar.module').then( m => m.EncotrarPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'suporte',
    loadChildren: () => import('./suporte/suporte.module').then( m => m.SuportePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'ferramentas',
    loadChildren: () => import('./ferramentas/ferramentas.module').then( m => m.FerramentasPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'edicao',
    loadChildren: () => import('./edicao/edicao.module').then( m => m.EdicaoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'diaria',
    loadChildren: () => import('./diaria/diaria.module').then( m => m.DiariaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'herois',
    loadChildren: () => import('./herois/herois.module').then( m => m.HeroisPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'loja',
    loadChildren: () => import('./loja/loja.module').then( m => m.LojaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'jogar',
    loadChildren: () => import('./jogar/jogar.module').then( m => m.JogarPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'glossario',
    loadChildren: () => import('./glossario/glossario.module').then( m => m.GlossarioPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'historico',
    loadChildren: () => import('./historico/historico.module').then( m => m.HistoricoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'perguntas',
    loadChildren: () => import('./perguntas/perguntas.module').then( m => m.PerguntasPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'imagens',
    loadChildren: () => import('./imagens/imagens.module').then( m => m.ImagensPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'curupira',
    loadChildren: () => import('./curupira/curupira.module').then( m => m.CurupiraPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'caipora',
    loadChildren: () => import('./caipora/caipora.module').then( m => m.CaiporaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'boitata',
    loadChildren: () => import('./boitata/boitata.module').then( m => m.BoitataPageModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
