# ENSF609-WebDevProject
This is the repository of ENSF 607 + 609 + 610 cross-course web-development project.  
Group Member: (Tommy) Peiyun Zhao, (Scott) Tianhan Jiang, Sonia Islam

## Sub-projects and PM files contained in this repo
This GitHub repo contains 3 projects:
- Django pre-project exercise, in folder `api`.
- React pre-project exercise, in folder `fancy-counter`.
- The actual web development project, in folder `webapp`.,
  - Frontend React project is in subfolder `fe`
  - Backend Django project is in subfolder `be`

Project management files are stored with the structure:
- Folder `ProjectManagement`.
- 3 sprint meetings are schduled on date Dec 14, 2020, Dec 30, 2020 and Jan 10, 2020. Each sprint meeting are stored in subfolder of `ProjectManagement` separately.
- Scrum activities are scheduled to take place every 2-3 days, all scrum activities will be summarized and stored in each sprint subfolder.

## Backend development Note
### Relational Data Scheme
https://lucid.app/lucidchart/invitations/accept/aff3c9a7-a178-4e08-9b43-20a7944f57a7
### 3rd Party Library Installed
pip install django
pip install djangorestframework  
pip install django-cors-headers  
pip install django-composite-foreignkey  
### Steps to Run Backend
- cd into ENSF609-WebDevProject folder
- start virtual env
  - command on Mac: source bin/activate
  - command on Windows: .\env\Scripts\activate
- cd into webapp/be/WebappApi
- python manage.py makemigrations
- python manage.py migrate
- python manage.py createsuperuser
  - Only set user and password, omit setting other fields
- python manage.py runserver
Now the backend should be fully functional at http://127.0.0.1:8000/admin

## Frontend development Note
### 3rd Party Library Installed
yarn add @react-pdf/renderer
### Steps to Run Frontend
- cd into ENSF609-WebDevProject/webapp/fe
- yarn start
