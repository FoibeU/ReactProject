# books/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('book/', views.ProjectCreateView.as_view(), name='project-list-create'),
    path('books/', views.ProjectListCreateView.as_view(), name='ProjectListCreateView'),
    path('book/<int:pk>/', views.ProjectDetailView.as_view(), name='project-detail'),
]
