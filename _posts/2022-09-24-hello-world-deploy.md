---
layout: post
title: Deploy Java Servlet Tomcat bằng Docker
subtitle: Deploy Java Servlet Tomcat bằng Docker
cover-img: /assets/img/03.jpg
thumbnail-img: /assets/img/deploy.jpg
share-img: /assets/img/03.jpg
tags: [Deploy Java Servlet Tomcat bằng Docker]
---
# Demo: Deploy Java Servlet Tomcat bằng Docker

1. Cấu trúc Dynamic Web Project theo MVC như sau:
   - Tree Map:\
    ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/demo-deploy/1.png)
   - Yêu cầu:\
     - Project configure: Convert to Maven Project.\
        ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/demo-deploy/2.png)
        ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/demo-deploy/3.png)
      - Project configure: Convert to JPA Project.
        ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/demo-deploy/4.png)
        ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/demo-deploy/5.png)

2. Tạo Servlet.\
- Các bạn có thể tham khảo [tại đây](https://anhquan02.github.io/jekyll/update/2021/11/03/Hello-world-servlet.html).
- Tạo thư mục theo cấu trúc MVC:

![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/demo-deploy/6.png)


Tại folder META-INF bạn hay copy file persistence.xml đã cấu hình theo theo hướng dẫn.\
( nếu các bạn deploy project JPA thì làm bước này)\
![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/demo-deploy/7.png)

- Config file pom.xml:
  - Phần build:

            <plugins>
            <plugin>            
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.8.1</version>
                <configuration>
                    <release>16</release>
                </configuration>
            </plugin>
            <plugin>
                <artifactId>maven-war-plugin</artifactId>
                <version>3.2.3</version>            
            </plugin>
            <plugin>
                <groupId>org.apache.tomcat.maven</groupId>
                <artifactId>tomcat7-maven-plugin</artifactId>
                <version>2.2</version>
                <configuration>
                    <url>http://[IP_ADDRESS]:[PORT]/manager/text</url>
                    <username>YOUR_USERNAME</username>
                    <password>YOUR_PASSWORD</password>
                    <server>TomcatServer</server>
                    <path>YOUR_PATH</path>
                    <encoding>UTF-8</encoding>
                    <update>true</update>
                </configuration>
            </plugin>
            </plugins>  

  - Phần Dependences sẽ phụ thuộc vào project của các bạn nó sẽ được cài đặt tại 1 vài mục sau( đây là 1 vài dependences của mình).

            <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>javax.servlet-api</artifactId>
            <version>4.0.1</version>
            <scope>provided</scope>
            </dependency>
            <dependency>
            <groupId>org.hibernate</groupId>
            <artifactId>hibernate-core</artifactId>
            <version>5.4.27.Final</version>
            </dependency>
            <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>jstl</artifactId>
            <version>1.2</version>
            </dependency>
            <dependency>
            <groupId>commons-beanutils</groupId>
            <artifactId>commons-beanutils</artifactId>
            <version>1.9.4</version>
            </dependency>
            <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.27</version>
            </dependency>


Tạo thêm thưc mục .docker và các file như hình( Chi tiết file mình sẽ để [ở đây](https://github.com/anhquan02/hello-world) ):

3. Deploy.
- Yêu cầu: 
  - Cài đặt docker.
  - Cài đặt docker-compose.

- Mở terminal visual studio code( hoặc sử dụng terminal ubuntu trỏ đến project):

  - Sử dụng lệnh ‘docker-compose up’.\
    ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/demo-deploy/8.png)
    ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/demo-deploy/9.png)
  - Mở thêm 1 terminal nữa, dùng lệnh ‘docker exec -it  helloworld_webapp_1 /bin/bash’.
  - Dùng lệnh ‘cd var/www/app/’.
  - Dùng lệnh ‘mvn clean'.
  - Dùng lệnh ‘mvn tomcat7:deploy -e’.
  - Truy cập http://127.0.0.1:8080/HelloServlet/HelloServlet để kiểm tra.

### Chúc bạn thành công
