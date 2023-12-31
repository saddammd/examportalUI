import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonsComponent } from 'src/app/layout/lessons/lessons/lessons.component';

const routes: Routes = [
  {path:'', component: LessonsComponent,
  children:[
    {
      path:'vocabulary/:id', 
      loadChildren:()=>import('../vocabulary/vocabulary.module').then(m=>m.VocabularyModule)
    },
    {
      path:'video/:id', 
      loadChildren:()=>import('../video/video.module').then(m=>m.VideoModule)
    },
    {
      path:'reading/:id', 
      loadChildren:()=>import('../reading/reading.module').then(m=>m.ReadingModule)
    },
    {
      path:'choose/:id', 
      loadChildren:()=>import('../choose/choose.module').then(m=>m.ChooseModule)
    },
    {
      path:'vocabularyetoj/:id',
      loadChildren:()=>import('../vocabularyetoj/vocabularyetoj.module').then(m=>m.VocabularyetojModule)
    },
    {
      path:'result/:id',
      loadChildren:()=>import('../result/result.module').then(m=>m.ResultModule)
    },
    {
      path:'resultdetail/:id', 
      loadChildren:()=>import('../resultdetail/resultdetail.module').then(m=>m.ResultdetailModule)
    },
    {
      path:'chapters', 
      loadChildren:()=>import('../chapters/chapters-routing.module' ).then(m=>m.ChaptersRoutingModule)
    }

   
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonsRoutingModule { }
