# Django Templates

## 1. Create Vertual Invironments

#### Windows 
```bash
py -m venv env
```
#### Linux
```bash
python3 -m venv env
```


## 2. Activate Virtual Invironments

#### Windows 
```bash
env\Scripts\activate
```

#### Linux
```bash
source env/bin/activate
```



## 3. Deactivate Virtual Invironments

```bash
deactivate
```


## 4. Upgrade PIP

```bash
python.exe -m pip install --upgrade pip
```



## 5. Install Requirement Txt Files
```bash
pip install -r requirements.txt
```


## 6. Create and Copy .env file
```bash
copy .env.example .env
```


## 7. Makemigration
```bash
python manage.py makemigrations
```



## 8. Migrate
```bash
python manage.py migrate
```



## 9. Create Superuser
```bash
python manage.py createsuperuser
```
#### Email:
```bash
admin@test.com
```
#### Phone Number:
```bash
01500000001
```
#### Password:
```bash
admin
```


## 10. Now can run the Django server
```bash
python manage.py runserver
```


## 11. Django production mode এ গেলে, তোমাকে collectstatic চালাতে হবে:
```bash
python manage.py collectstatic
```