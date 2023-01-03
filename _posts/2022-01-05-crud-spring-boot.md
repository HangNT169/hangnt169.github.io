---
layout: post
title: Hướng dẫn tạo 1 project spring boot - jsp
subtitle: Hướng dẫn tạo 1 project spring boot - jsp
cover-img: /assets/img/path.jpg
thumbnail-img: /assets/img/taoproject.jpg
share-img: /assets/img/path.jpg
tags: [Hướng dẫn tạo 1 project spring boot - jsp]
---

Trước khi thực hiện bất kỳ thao tác nào trên dữ liệu, bạn cần tạo bảng cần thiết. Đương nhiên, tôi sẽ tạo một bảng có tênsinh_vienvien và chèn dữ liệu.

Để kiểm tra ứng dụng ngay lập tức, bạn cần có một số dữ liệu trong bảng. Bạn cũng có thể chạy một số thử nghiệm bằng cách tạo thông tin sinh viên mới từ giao diện người dùng nếu ban đầu bảng của bạn không có bất kỳ dữ liệu nào.

![#######](/assets/img/anh74.png)

- ## Cấu trúc dự án
  Cây thư mục dự án như sau:

![#######](/assets/img/anh75.png)

- ## Thiết lập dự án
  Bạn có thể tạo một dự án dựa trên maven trong IDE hoặc công cụ yêu thích của bạn.

Bạn cần bao gồm các phụ thuộc bắt buộc trong tập lệnh pom.xml để làm việc trên ứng dụng này bằng Spring Boot JPA.

> <dependency>

            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-tomcat</artifactId>
            <scope>provided</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <!-- https://mvnrepository.com/artifact/org.apache.tomcat.embed/tomcat-embed-jasper -->
        <dependency>
            <groupId>org.apache.tomcat.embed</groupId>
            <artifactId>tomcat-embed-jasper</artifactId>
        </dependency>
        <!-- https://mvnrepository.com/artifact/org.hibernate.validator/hibernate-validator -->
        <dependency>
            <groupId>org.hibernate.validator</groupId>
            <artifactId>hibernate-validator</artifactId>
        </dependency>
        <dependency>
            <groupId>org.glassfish.web</groupId>
            <artifactId>jakarta.servlet.jsp.jstl</artifactId>
            <version>3.0.1</version>
        </dependency>
        <!-- https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-data-jpa -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        <!-- https://mvnrepository.com/artifact/mysql/mysql-connector-java -->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
        </dependency>
        <!-- https://mvnrepository.com/artifact/org.projectlombok/lombok-maven-plugin -->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>1.18.24</version>
            <scope>provided</scope>
        </dependency>
        <dependency>
            <groupId>org.glassfish.web</groupId>
            <artifactId>jakarta.servlet.jsp.jstl</artifactId>
            <version>2.0.0</version>
        </dependency>
        <!-- taglibs-standard-spec-*.jar -->
        <!-- http://mvnrepository.com/artifact/org.apache.taglibs/taglibs-standard-spec -->
        <dependency>
            <groupId>org.apache.taglibs</groupId>
            <artifactId>taglibs-standard-spec</artifactId>
            <version>1.2.5</version>
        </dependency>

        <!-- taglibs-standard-impl-*.jar -->
        <!-- http://mvnrepository.com/artifact/org.apache.taglibs/taglibs-standard-impl -->
        <dependency>
            <groupId>org.apache.taglibs</groupId>
            <artifactId>taglibs-standard-impl</artifactId>
            <version>1.2.5</version>
        </dependency>
        <!-- https://mvnrepository.com/artifact/jstl/jstl -->
        <dependency>
            <groupId>javax.servlet.jsp.jstl</groupId>
            <artifactId>jstl-api</artifactId>
            <version>1.2</version>
        </dependency>

} 

## The End
