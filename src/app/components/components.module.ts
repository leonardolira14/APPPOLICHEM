import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {CustomPaginationComponent} from './custom-pagination/custom-pagination.component';
import {CustomSlidesComponent} from './custom-slides/custom-slides.component';
import {CustomSideMenuComponent} from './custom-side-menu/custom-side-menu.component';
import {RouterModule} from '@angular/router';
import {CustomHeaderComponent} from './custom-header/custom-header.component';
import {CustomFullSlidesComponent} from './custom-full-slides/custom-full-slides.component';
import {CustomCardComponent} from './custom-card/custom-card.component';
import {CustomCardLayoutComponent} from './custom-card-layout/custom-card-layout.component';
import {CustomCardLayout2Component} from './custom-card-layout2/custom-card-layout2.component';
import {CustomCardLayout3Component} from './custom-card-layout3/custom-card-layout3.component';
import {CustomCardLayout4Component} from './custom-card-layout4/custom-card-layout4.component';
import {CustomCardGalleryLayoutComponent} from './custom-card-gallery-layout/custom-card-gallery-layout.component';
import {CustomMapComponent} from './custom-map/custom-map.component';
import {AgmCoreModule} from '@agm/core';
import {CustomProfileWrapperComponent} from './custom-profile-wrapper/custom-profile-wrapper.component';
import {CustomSlidesAnimationComponent} from './custom-slides-animation/custom-slides-animation.component';
import {CustomGalleryLayoutComponent} from './custom-gallery-layout/custom-gallery-layout.component';
import {CustomGalleryLayout2Component} from './custom-gallery-layout2/custom-gallery-layout2.component';
import {CustomCheckboxLayoutComponent} from './custom-checkbox-layout/custom-checkbox-layout.component';
import {FormsModule} from '@angular/forms';
import {CustomCheckboxLayout2Component} from './custom-checkbox-layout2/custom-checkbox-layout2.component';
import {CustomRadioLayoutComponent} from './custom-radio-layout/custom-radio-layout.component';
import {CustomCardReserveComponent} from './custom-card-reserve/custom-card-reserve.component';
import {CustomSkeletonComponent} from './custom-skeleton/custom-skeleton.component';
import {CustomSkeletonImgComponent} from './custom-skeleton-img/custom-skeleton-img.component';
import {CustomSkeletonListComponent} from './custom-skeleton-list/custom-skeleton-list.component';
import {CustomToggleAvatarComponent} from './custom-toggle-avatar/custom-toggle-avatar.component';
import {CustomSelectBasicComponent} from './custom-select-basic/custom-select-basic.component';
import {CustomSelectPopoverComponent} from './custom-select-popover/custom-select-popover.component';
import {CustomSelectSheetComponent} from './custom-select-sheet/custom-select-sheet.component';
import {CustomSelectMultComponent} from './custom-select-mult/custom-select-mult.component';
import {CustomProfileAvatarComponent} from './custom-profile-avatar/custom-profile-avatar.component';
import {CustomProfileSlideComponent} from './custom-profile-slide/custom-profile-slide.component';
import {CustomProfileBasicComponent} from './custom-profile-basic/custom-profile-basic.component';
import {CustomProfileSlide2Component} from './custom-profile-slide2/custom-profile-slide2.component';
import {CustomProfileImgListComponent} from './custom-profile-img-list/custom-profile-img-list.component';
import {CustomListCommentComponent} from './custom-list-comment/custom-list-comment.component';
import {CustomListCommentTimelineComponent} from './custom-list-comment-timeline/custom-list-comment-timeline.component';
import {CustomSlidesNewsCardComponent} from './custom-slides-news-card/custom-slides-news-card.component';
import {CustomSlidesRowComponent} from './custom-slides-row/custom-slides-row.component';
import {CustomCardListProductComponent} from './custom-card-list-product/custom-card-list-product.component';
import {CustomProductListComponent} from './custom-product-list/custom-product-list.component';
import {CustomAnimationListComponent} from './custom-animation-list/custom-animation-list.component';
import {CustomAnimationList2Component} from './custom-animation-list2/custom-animation-list2.component';
import {CustomGoogleCardLeftComponent} from './custom-google-card-left/custom-google-card-left.component';
import {CustomGoogleCardTopComponent} from './custom-google-card-top/custom-google-card-top.component';
import {CustomGoogleCardBottomComponent} from './custom-google-card-bottom/custom-google-card-bottom.component';
import {CustomListDragProductComponent} from './custom-list-drag-product/custom-list-drag-product.component';
import {CustomListSlidingProductComponent} from './custom-list-sliding-product/custom-list-sliding-product.component';
import {CustomCardBlogComponent} from './custom-card-blog/custom-card-blog.component';
import {CustomProfileListComponent} from './custom-profile-list/custom-profile-list.component';
import {CustomProfileGridComponent} from './custom-profile-grid/custom-profile-grid.component';
import {CustomProfileList2Component} from './custom-profile-list2/custom-profile-list2.component';


@NgModule({
    imports: [
        CommonModule,
        IonicModule.forRoot(),
        RouterModule,
        AgmCoreModule,
        FormsModule
    ],
    declarations: [
        CustomPaginationComponent,
        CustomSlidesComponent,
        CustomSideMenuComponent,
        CustomHeaderComponent,
        CustomFullSlidesComponent,
        CustomCardComponent,
        CustomCardLayoutComponent,
        CustomCardLayout2Component,
        CustomCardLayout3Component,
        CustomCardLayout4Component,
        CustomCardGalleryLayoutComponent,
        CustomMapComponent,
        CustomProfileWrapperComponent,
        CustomSlidesAnimationComponent,
        CustomGalleryLayoutComponent,
        CustomGalleryLayout2Component,
        CustomCheckboxLayoutComponent,
        CustomCheckboxLayout2Component,
        CustomRadioLayoutComponent,
        CustomCardReserveComponent,
        CustomSkeletonComponent,
        CustomSkeletonImgComponent,
        CustomSkeletonListComponent,
        CustomToggleAvatarComponent,
        CustomSelectBasicComponent,
        CustomSelectPopoverComponent,
        CustomSelectSheetComponent,
        CustomSelectMultComponent,
        CustomProfileAvatarComponent,
        CustomProfileSlideComponent,
        CustomProfileBasicComponent,
        CustomProfileSlide2Component,
        CustomProfileImgListComponent,
        CustomListCommentComponent,
        CustomListCommentTimelineComponent,
        CustomSlidesNewsCardComponent,
        CustomSlidesRowComponent,
        CustomCardListProductComponent,
        CustomProductListComponent,
        CustomAnimationListComponent,
        CustomAnimationList2Component,
        CustomGoogleCardLeftComponent,
        CustomGoogleCardTopComponent,
        CustomGoogleCardBottomComponent,
        CustomListDragProductComponent,
        CustomListSlidingProductComponent,
        CustomCardBlogComponent,
        CustomProfileListComponent,
        CustomProfileGridComponent,
        CustomProfileList2Component
    ],
    exports: [
        CustomPaginationComponent,
        CustomSlidesComponent,
        CustomSideMenuComponent,
        CustomHeaderComponent,
        CustomFullSlidesComponent,
        CustomCardComponent,
        CustomCardLayoutComponent,
        CustomCardLayout2Component,
        CustomCardLayout3Component,
        CustomCardLayout4Component,
        CustomCardGalleryLayoutComponent,
        CustomMapComponent,
        CustomProfileWrapperComponent,
        CustomSlidesAnimationComponent,
        CustomGalleryLayoutComponent,
        CustomGalleryLayout2Component,
        CustomCheckboxLayoutComponent,
        CustomCheckboxLayout2Component,
        CustomRadioLayoutComponent,
        CustomCardReserveComponent,
        CustomSkeletonComponent,
        CustomSkeletonImgComponent,
        CustomSkeletonListComponent,
        CustomToggleAvatarComponent,
        CustomSelectBasicComponent,
        CustomSelectPopoverComponent,
        CustomSelectSheetComponent,
        CustomSelectMultComponent,
        CustomProfileAvatarComponent,
        CustomProfileSlideComponent,
        CustomProfileBasicComponent,
        CustomProfileSlide2Component,
        CustomProfileImgListComponent,
        CustomListCommentComponent,
        CustomListCommentTimelineComponent,
        CustomSlidesNewsCardComponent,
        CustomSlidesRowComponent,
        CustomCardListProductComponent,
        CustomProductListComponent,
        CustomAnimationListComponent,
        CustomAnimationList2Component,
        CustomGoogleCardLeftComponent,
        CustomGoogleCardTopComponent,
        CustomGoogleCardBottomComponent,
        CustomListDragProductComponent,
        CustomListSlidingProductComponent,
        CustomCardBlogComponent,
        CustomProfileListComponent,
        CustomProfileGridComponent,
        CustomProfileList2Component
    ],
    entryComponents: [],
})
export class ComponentsModule {
}
