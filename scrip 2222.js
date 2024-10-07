<VirtualHost *:80>
    ServerName your-public-ip

    WSGIDaemonProcess flaskapp python-path=/home/ubuntu/flaskapp
    WSGIScriptAlias / /home/ubuntu/flaskapp/flaskapp.wsgi

    <Directory /home/ubuntu/flaskapp>
        Require all granted
    </Directory>

    Alias /static /home/ubuntu/flaskapp/static
    <Directory /home/ubuntu/flaskapp/static/>
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>