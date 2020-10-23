from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    VendorViewSet,
    LocationViewSet,
    FavoritesViewSet,
    VendorDetailViewSet,
    CategoryViewSet,
    FaqViewSet,
    PresenterViewSet,
    ScheduleViewSet,
    MyScheduleViewSet,
    SponsorViewSet,
)

router = DefaultRouter()
router.register("faq", FaqViewSet)
router.register("vendor", VendorViewSet)
router.register("schedule", ScheduleViewSet)
router.register("myschedule", MyScheduleViewSet)
router.register("category", CategoryViewSet)
router.register("presenter", PresenterViewSet)
router.register("favorites", FavoritesViewSet)
router.register("vendordetail", VendorDetailViewSet)
router.register("location", LocationViewSet)
router.register("sponsor", SponsorViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
