import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login1',
        pathMatch: 'full'
    },
    {
        path: 'alerta',
        loadChildren: () =>import('./pages/alerta/alerta.module').then(m=>m.AlertaModule)
    },
    {
        path: 'inicio',
        loadChildren: () =>import('./pages/inicio/inicio.module').then(m=>m.InicioModule)
    },
    {
        path: 'buscar',
        loadChildren: () =>import('./pages/buscar/buscar.module').then(m=>m.BuscarModule)
    },
    {
        path: 'margen',
        loadChildren: () =>import('./pages/margen/margen.module').then(m=>m.MargenModule)
    },
    {
        path: 'volumenvsmargen',
        loadChildren: () =>import('./pages/margervolumen/margervolumen.module').then(m=>m.MargervolumenModule)
    },
    {
        path: 'productos',
        loadChildren: () =>import('./pages/productos/productos.module').then(m=>m.ProductosModule)
    },
    {
        path: 'unidadedescliente',
        loadChildren: () =>import('./pages/unidadescliente/unidadescliente.module').then(m=>m.UnidadesclienteModule)
    },
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'home-portfolio',
        loadChildren: () => import('./pages/home/home-portfolio/home-portfolio.module').then(m => m.HomePortfolioPageModule)
    },
    {
        path: 'home-shop',
        loadChildren: () => import('./pages/home/home-shop/home-shop.module').then(m => m.HomeShopPageModule)
    },
    {
        path: 'home-blog',
        loadChildren: () => import('./pages/home/home-blog/home-blog.module').then(m => m.HomeBlogPageModule)
    },
    {
        path: 'detail',
        loadChildren: () => import('./pages/list/detail/detail.module').then(m => m.DetailPageModule)
    },
    {path: 'login', loadChildren: './pages/login/login/login.module#LoginPageModule'},
    {path: 'full-slides', loadChildren: './pages/slides/full-slides/full-slides.module#FullSlidesPageModule'},
    {path: 'list-image', loadChildren: './pages/list/list-image/list-image.module#ListImagePageModule'},
    {path: 'list-full-img', loadChildren: './pages/list/list-full-img/list-full-img.module#ListFullImgPageModule'},
    {path: 'list-checkbox', loadChildren: './pages/list/list-checkbox/list-checkbox.module#ListCheckboxPageModule'},
    {path: 'list-drag', loadChildren: './pages/list/list-drag/list-drag.module#ListDragPageModule'},
    {path: 'list-drag-product', loadChildren: './pages/list/list-drag-product/list-drag-product.module#ListDragProductPageModule'},
    {path: 'list-drag-friend', loadChildren: './pages/list/list-drag-friend/list-drag-friend.module#ListDragFriendPageModule'},
    {path: 'list-sliding', loadChildren: './pages/list/list-sliding/list-sliding.module#ListSlidingPageModule'},
    {
        path: 'list-sliding-product',
        loadChildren: './pages/list/list-sliding-product/list-sliding-product.module#ListSlidingProductPageModule'
    },
    {path: 'list-sliding-left', loadChildren: './pages/list/list-sliding-left/list-sliding-left.module#ListSlidingLeftPageModule'},
    {path: 'card', loadChildren: './pages/google-card/card/card.module#CardPageModule'},
    {path: 'card2', loadChildren: './pages/google-card/card2/card2.module#Card2PageModule'},
    {path: 'card3', loadChildren: './pages/google-card/card3/card3.module#Card3PageModule'},
    {path: 'card4', loadChildren: './pages/google-card/card4/card4.module#Card4PageModule'},
    {path: 'profile', loadChildren: './pages/profile/profile/profile.module#ProfilePageModule'},
    {path: 'profile2', loadChildren: './pages/profile/profile2/profile2.module#Profile2PageModule'},
    {path: 'profile3', loadChildren: './pages/profile/profile3/profile3.module#Profile3PageModule'},
    {path: 'profile-wrapper', loadChildren: './pages/profile/profile-wrapper/profile-wrapper.module#ProfileWrapperPageModule'},
    {path: 'login1', loadChildren: './pages/login/login1/login1.module#Login1PageModule'},
    {path: 'sign-up', loadChildren: './pages/sign/sign-up/sign-up.module#SignUpPageModule'},
    {path: 'sign-up1', loadChildren: './pages/sign/sign-up1/sign-up1.module#SignUp1PageModule'},
    {
        path: 'slides-animation-coverflow',
        loadChildren: './pages/slides/slides-animation-coverflow/slides-animation-coverflow.module#SlidesAnimationCoverflowPageModule'
    },
    {path: 'slides-cube', loadChildren: './pages/slides/slides-cube/slides-cube.module#SlidesCubePageModule'},
    {path: 'slides-fade', loadChildren: './pages/slides/slides-fade/slides-fade.module#SlidesFadePageModule'},
    {path: 'slides-flip', loadChildren: './pages/slides/slides-flip/slides-flip.module#SlidesFlipPageModule'},
    {
        path: 'gallery',
        loadChildren: () => import('./pages/gallery/gallery.module').then(m => m.GalleryPageModule)
    },
    {path: 'login-video', loadChildren: './pages/login/login-video/login-video.module#LoginVideoPageModule'},
    {path: 'splash-screen', loadChildren: './pages/splash/splash-screen/splash-screen.module#SplashScreenPageModule'},
    {path: 'checkbox1', loadChildren: './pages/checkbox/checkbox1/checkbox1.module#Checkbox1PageModule'},
    {path: 'checkbox2', loadChildren: './pages/checkbox/checkbox2/checkbox2.module#Checkbox2PageModule'},
    {path: 'checkbox3', loadChildren: './pages/checkbox/checkbox3/checkbox3.module#Checkbox3PageModule'},
    {path: 'radio', loadChildren: './pages/checkbox/radio/radio.module#RadioPageModule'},
    {path: 'search', loadChildren: './pages/search/search/search.module#SearchPageModule'},
    {path: 'search2', loadChildren: './pages/search/search2/search2.module#Search2PageModule'},
    {path: 'profile4', loadChildren: './pages/profile/profile4/profile4.module#Profile4PageModule'},
    {path: 'loading', loadChildren: './pages/progress/loading/loading.module#LoadingPageModule'},
    {path: 'progress', loadChildren: './pages/progress/progress/progress.module#ProgressPageModule'},
    {path: 'skeleton', loadChildren: './pages/progress/skeleton/skeleton.module#SkeletonPageModule'},
    {path: 'skeleton-list', loadChildren: './pages/progress/skeleton-list/skeleton-list.module#SkeletonListPageModule'},
    {path: 'skeleton-text', loadChildren: './pages/progress/skeleton-text/skeleton-text.module#SkeletonTextPageModule'},
    {path: 'spinner', loadChildren: './pages/progress/spinner/spinner.module#SpinnerPageModule'},
    {path: 'custom-spinner', loadChildren: './pages/progress/custom-spinner/custom-spinner.module#CustomSpinnerPageModule'},
    {path: 'tabs-default', loadChildren: './pages/tabs/tabs-default/tabs-default.module#TabsDefaultPageModule'},
    {path: 'tabs-custom', loadChildren: './pages/tabs/tabs-custom/tabs-custom.module#TabsCustomPageModule'},
    {path: 'tabs-top', loadChildren: './pages/tabs/tabs-top/tabs-top.module#TabsTopPageModule'},
    {path: 'tabs-bottom', loadChildren: './pages/tabs/tabs-bottom/tabs-bottom.module#TabsBottomPageModule'},
    {path: 'form-comment', loadChildren: './pages/form/form-comment/form-comment.module#FormCommentPageModule'},
    {path: 'form-validator', loadChildren: './pages/form/form-validator/form-validator.module#FormValidatorPageModule'},
    {path: 'form-richtext', loadChildren: './pages/form/form-richtext/form-richtext.module#FormRichtextPageModule'},
    {path: 'skeleton-list2', loadChildren: './pages/progress/skeleton-list2/skeleton-list2.module#SkeletonList2PageModule'},
    {path: 'form-rich-custom', loadChildren: './pages/form/form-rich-custom/form-rich-custom.module#FormRichCustomPageModule'},
    {path: 'toggle-avatar', loadChildren: './pages/toggle/toggle-avatar/toggle-avatar.module#ToggleAvatarPageModule'},
    {path: 'toggle-left', loadChildren: './pages/toggle/toggle-left/toggle-left.module#ToggleLeftPageModule'},
    {path: 'select', loadChildren: './pages/toggle/select/select.module#SelectPageModule'},
    {path: 'profile-avatar', loadChildren: './pages/profile/profile-avatar/profile-avatar.module#ProfileAvatarPageModule'},
    {path: 'profile-slide', loadChildren: './pages/profile/profile-slide/profile-slide.module#ProfileSlidePageModule'},
    {path: 'profile-basic', loadChildren: './pages/profile/profile-basic/profile-basic.module#ProfileBasicPageModule'},
    {path: 'profile-slide2', loadChildren: './pages/profile/profile-slide2/profile-slide2.module#ProfileSlide2PageModule'},
    {path: 'profile-img-list', loadChildren: './pages/profile/profile-img-list/profile-img-list.module#ProfileImgListPageModule'},
    {path: 'list-comment', loadChildren: './pages/list/list-comment/list-comment.module#ListCommentPageModule'},
    {
        path: 'list-comment-timeline',
        loadChildren: './pages/list/list-comment-timeline/list-comment-timeline.module#ListCommentTimelinePageModule'
    },
    {path: 'list-news', loadChildren: './pages/list/list-news/list-news.module#ListNewsPageModule'},
    {path: 'list-card', loadChildren: './pages/product-list/list-card/list-card.module#ListCardPageModule'},
    {path: 'list', loadChildren: './pages/product-list/list/list.module#ListPageModule'},
    {path: 'flip-list', loadChildren: './pages/animation-list/flip-list/flip-list.module#FlipListPageModule'},
    {path: 'slide-list', loadChildren: './pages/animation-list/slide-list/slide-list.module#SlideListPageModule'},
    {path: 'slide-list-left', loadChildren: './pages/animation-list/slide-list-left/slide-list-left.module#SlideListLeftPageModule'},
    {
        path: 'slide-list-rotate',
        loadChildren: './pages/animation-list/slide-list-rotate/slide-list-rotate.module#SlideListRotatePageModule'
    },
    {path: 'list-rotate', loadChildren: './pages/animation-list/list-rotate/list-rotate.module#ListRotatePageModule'},
    {path: 'list-swirl', loadChildren: './pages/animation-list/list-swirl/list-swirl.module#ListSwirlPageModule'},
    {path: 'fade-list', loadChildren: './pages/animation-list/fade-list/fade-list.module#FadeListPageModule'},
    {path: 'fade-list2', loadChildren: './pages/animation-list/fade-list2/fade-list2.module#FadeList2PageModule'},
    {path: 'card-top', loadChildren: './pages/google-card/card-top/card-top.module#CardTopPageModule'},
    {path: 'card-bottom', loadChildren: './pages/google-card/card-bottom/card-bottom.module#CardBottomPageModule'},
    {path: 'card-left', loadChildren: './pages/google-card/card-left/card-left.module#CardLeftPageModule'},
    {path: 'segment-list', loadChildren: './pages/segment/segment-list/segment-list.module#SegmentListPageModule'},
    {path: 'alert', loadChildren: './pages/alert/alert.module#AlertPageModule'},
    {path: 'segment-card', loadChildren: './pages/segment/segment-card/segment-card.module#SegmentCardPageModule'},
    {path: 'go-top', loadChildren: './pages/scroll/go-top/go-top.module#GoTopPageModule'},
    {path: 'go-bottom', loadChildren: './pages/scroll/go-bottom/go-bottom.module#GoBottomPageModule'},
    {path: 'go-position', loadChildren: './pages/scroll/go-position/go-position.module#GoPositionPageModule'},
    {path: 'about', loadChildren: './pages/about/about.module#AboutPageModule'},
    {path: 'profile-list', loadChildren: './pages/profile/profile-list/profile-list.module#ProfileListPageModule'},
    {path: 'profile-list2', loadChildren: './pages/profile/profile-list2/profile-list2.module#ProfileList2PageModule'},
    {path: 'profile-list3', loadChildren: './pages/profile/profile-list3/profile-list3.module#ProfileList3PageModule'},


];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
