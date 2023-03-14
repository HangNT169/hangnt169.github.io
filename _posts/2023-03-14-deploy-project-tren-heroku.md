---
layout: post
title: Deploy Project
subtitle: Cách deploy project trên heroku
cover-img: /assets/img/deploy-project-heroku/DeploySpringBootOnHeroku.jpg
thumbnail-img: /assets/img/deploy-project-heroku/DeploySpringBootOnHeroku.jpg
share-img: /assets/img/deploy-project-heroku/DeploySpringBootOnHeroku.jpg
tags: [Cách deploy project trên heroku]
---

# Cách deploy project trên heroku

## Tạo tài khoản

Đầu tiên các bạn hãy lên trang chủ https://www.heroku.com/ để tạo một tài khoản.


## Cài đặt Heroku CLI

Sau khi đã tạo tài khoản xong thì các bạn lên đây để cài Heroku CLI. Heroku CLI cần Git để có thể cài đặt nên hay chắc chắn rắng máy tính của bạn đã có sẵn Git k thì bạn có thể tiến hành cài đặt Git theo hướng dẫn ở đây.

Sau khi đã cài đặt xong rồi thì các bạn tiến hành đăng nhập vào Heroku ở terminal:

```
heroku login
heroku: Press any key to open up the browser to login or q to exit
 ›   Warning: If browser does not open, visit
 ›   https://cli-auth.heroku.com/auth/browser/***
heroku: Waiting for login...
Logging in... done
Logged in as me@example.com
```

## Tạo project spring boot 

```
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.*;

@Controller
@SpringBootApplication
public class DemoApplication {

    @RequestMapping("/")
    @ResponseBody
    String home() {
      return "Hello World!";
    }

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
```

## Deploy

### Bước 1: Tạo một project trên Heroku

Ở màn dashbaord các bạn chọn New->Create a new app\
Sau đó tiến hành điền tên app và chọn region (các bạn chọn US hoặc Europe)

![image](https://user-images.githubusercontent.com/109157942/224484658-16dcf012-a7fc-4f51-af33-9215dfdcb643.png)

### Bước 2: Tạo Procfile có nội dung như sau. FIle này ta sẽ để ở thư mục root (cùng cấp với thư mục app)

 chạy tạo file Procfile nhằm config đường dẫn tới file index trong folder laravel của chúng ta bằng terminal. Bạn nào dùng window thì cmd hoặc Power Shell.
 
 ```
 echo web: vendor/bin/heroku-php-apache2 public/ > Procfile
 ```
 Sau khi thực hiện lệnh trên sẽ tạo cho chúng ta 1 file có tên là Procfile với nội dung như sau:
```
web: vendor/bin/heroku-php-apache2 public/
```

### Bước 3: Đưa project lên Heroku. Ở đây mình dùng Heroku CLI đã cài đặt trước đó

Trước khi bạn có thể triển khai ứng dụng lên Heroku, bạn cần tạo một kho lưu trữ Git cho ứng dụng và thêm tất cả mã vào đó bằng cách chạy các lệnh sau:

```
git init
git add .
git commit -m "first commit"
```
Bạn sẽ triển khai ứng dụng bằng cách đẩy repo Git này lên Heroku. Cũng có thể triển khai bằng plugin Heroku Maven nhưng hướng dẫn này sẽ tập trung vào việc sử dụng Git và Heroku CLI.

Để triển khai lên Heroku, trước tiên bạn cần cung cấp một ứng dụng Heroku mới. Chạy lệnh này:

```
heroku create
Creating app... done, tranquil-mountain-19785
https://tranquil-mountain-19785.herokuapp.com/ | https://git.heroku.com/tranquil-mountain-19785.git
```
heroku git:remote -a heorku-app-deploy (heroku-app-deploy đây là tên project mình vừa tạo trên heroku)

```
heroku git:remote -a heorku-app-deploy
› Warning: heroku update available from 7.52.0 to 7.54.0.
set git remote heroku to https://git.heroku.com/heorku-app-deploy.git
```


git remote -v để kiểm tra xem đã add thành công hay chưa.
```
heroku  https://git.heroku.com/heorku-app-deploy.git (fetch)
heroku  https://git.heroku.com/heorku-app-deploy.git (push)
```
Thực hiện triển khai mã của bạn 

```
git push heroku master
```


Sau khi đã push xong các bạn lên heroku để kiểm tra xem đã thành công hay chưa

 Bạn có thể truy cập URL của ứng dụng bằng cách chạy lệnh này:
 
 ```
 heroku open
 ```
Bạn có thể xem nhật ký của ứng dụng bằng cách chạy lệnh này:
```
heroku logs --tail
2020-05-20T09:18:00.899237+00:00 app[web.1]: 2020-05-20 09:18:00.899  INFO 4 --- [           main] com.example.demo.DemoApplication         : No active profile set, falling back to default profiles: default
2020-05-20T09:18:02.348822+00:00 app[web.1]: 2020-05-20 09:18:02.348  INFO 4 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 40371 (http)
2020-05-20T09:18:02.365045+00:00 app[web.1]: 2020-05-20 09:18:02.364  INFO 4 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2020-05-20T09:18:02.365316+00:00 app[web.1]: 2020-05-20 09:18:02.365  INFO 4 --- [           main] org.apache.catalina.core.StandardEngine  : Starting Servlet engine: [Apache Tomcat/9.0.35]
2020-05-20T09:18:02.457002+00:00 app[web.1]: 2020-05-20 09:18:02.456  INFO 4 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2020-05-20T09:18:02.457162+00:00 app[web.1]: 2020-05-20 09:18:02.457  INFO 4 --- [           main] o.s.web.context.ContextLoader            : Root WebApplicationContext: initialization completed in 1486 ms
2020-05-20T09:18:02.692238+00:00 app[web.1]: 2020-05-20 09:18:02.691  INFO 4 --- [           main] o.s.s.concurrent.ThreadPoolTaskExecutor  : Initializing ExecutorService 'applicationTaskExecutor'
2020-05-20T09:18:02.891409+00:00 app[web.1]: 2020-05-20 09:18:02.891  INFO 4 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 40371 (http) with context path ''
2020-05-20T09:18:02.903573+00:00 app[web.1]: 2020-05-20 09:18:02.903  INFO 4 --- [           main] com.example.demo.DemoApplication         : Started DemoApplication in 2.739 seconds (JVM running for 3.302)
2020-05-20T09:18:03.300746+00:00 heroku[web.1]: State changed from starting to up
```

###  Bước 4: Tạo biến môi trường cho app. Cũng giống như project ở local thì bạn có file .env thì app trên heroku cũng phải có những biến môi trường tương tự như vậy. Các bạn có thể dễ dàng cái đặt biến môi trường trong phần Settings. Ở đây mình sẽ tiến hành thêm các config bằng terminal.

heroku config:add <name-config> dùng câu lệnh này để add. Ở đây mình sẽ thêm một số config sau:
APP_NAME
APP_ENV
APP_KEY
APP_DEBUG=true (cái này để các bạn có thể debug trên production =))) sau khi debug xong ta nên tắt nó đi nhé 😃)))
APP_URL (cái này các bạn điền URL của app trên heroku)
Sau khi đã thêm các key như ở bên trên thì các bạn truy cập đến URL của project ta có thể thấy ứng dụng đã chạy được rồi.

### Bước 5: Ứng dụng thì phải có database chứ đúng không =))) Chứ chả lẽ cái app Laravel của bạn chỉ là một cái Landing Page (lol).

Trong phần Resources các bạn tiến hành tìm Add-ons Heroku Postgres và tiến hành cài đặt.

Sau khi đã thêm Add-ons xong các bạn có thể kiểm tra credentials của nó
heroku pg:credentials:url

Connection info string:
   "dbname=****** port=*** user=*** password=*** sslmode=require"
Connection URL:
   postgres:***

Sau đó ta sẽ tiến hành thêm config cho database theo dữ liệu mà ta vừa xem
DB_CONNECTION=pgsql
DB_HOST= như bên trên
DB_PORT=như bên trên
DB_DATABASE=như bên trên
DB_USERNAME=như bên trên
DB_PASSWORD=như bên trên
Sau khi đã thêm các config ta sẽ tiến hành migrate: heroku run php artisan migrate (hoặc có thể heroku run bash để vào server)
Vì ứng dụng mình đưa lên chỉ có chức năng đăng nhập và đăng ký nên mình sẽ test các chức năng đó xem đã ổn chưa. Còn tùy ứng dụng của các bạn xem có chức năng gì rồi tiến hành test xem database đã hoạt động hay chưa :v.

## The End