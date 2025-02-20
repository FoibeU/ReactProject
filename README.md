# Django Books API

This is a Django REST framework (DRF) project for managing books. It allows users to create, retrieve, update, and delete book records, with cover image uploads supported via Cloudinary.

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/django-books-api.git
cd backend
```

### 2. Create a Virtual Environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Configure Cloudinary
Create a `.env` file in the project root and add:
```env
CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME
```

Also, update `settings.py`:
```python
import cloudinary
import cloudinary.uploader
import cloudinary.api

INSTALLED_APPS = [
    'rest_framework',
    'cloudinary',
    'your_app_name',
]
```

### 5. Run Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

### 6. Create a Superuser
```bash
python manage.py createsuperuser
```

### 7. Start the Server
```bash
python manage.py runserver
```

## Project Structure
```
backend/
│── backend/            # Main project folder
│   ├── settings.py     # Django settings
│   ├── urls.py         # Project URLs
│   ├── wsgi.py         # WSGI configuration
│── books/              # Books app
│   ├── models.py       # Database models
│   ├── views.py        # API views
│   ├── serializers.py  # DRF serializers
│   ├── urls.py         # App URLs
│── accounts/           # User authentication
│── media/              # Uploaded media files
│── static/             # Static files
│── requirements.txt    # Dependencies
│── manage.py           # Django CLI
```

## API Endpoints

### 1. Get All Books
```http
GET /api/books/
```
Response:
```json
[
    {
        "id": 1,
        "title": "Book Title",
        "author": "Author Name",
        "genre": "Fiction",
        "rating": 4.5,
        "publication_date": "2024-01-01",
        "cover_image": "https://res.cloudinary.com/.../image.jpg"
    }
]
```

### 2. Get Single Book by ID
```http
GET /api/books/{id}/
```

### 3. Create a New Book
```http
POST /api/books/
Content-Type: application/json
```
Request Body:
```json
{
    "title": "New Book",
    "author": "Author Name",
    "genre": "Non-fiction",
    "rating": 4.0,
    "publication_date": "2024-02-01"
}
```

### 4. Update a Book
```http
PUT /api/books/{id}/
Content-Type: application/json
```
Request Body:
```json
{
    "title": "Updated Book Title"
}
```

### 5. Delete a Book
```http
DELETE /api/books/{id}/
```

## Running Tests
```bash
python manage.py test
```

## License
This project is licensed under the MIT License.

