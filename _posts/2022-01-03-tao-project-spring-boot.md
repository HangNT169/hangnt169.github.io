---
layout: post
title: Hướng dẫn tạo 1 project spring boot - jsp
subtitle: Hướng dẫn tạo 1 project spring boot - jsp
cover-img: /assets/img/path.jpg
thumbnail-img: /assets/img/taoproject.jpg
share-img: /assets/img/path.jpg
tags: [Hướng dẫn tạo 1 project spring boot - jsp]
---

Spring Data JPA, một phần của Spring Data , giúp dễ dàng triển khai các kho lưu trữ dựa trên JPA. Mô-đun này liên quan đến hỗ trợ nâng cao cho các lớp truy cập dữ liệu dựa trên JPA. Nó giúp việc xây dựng các ứng dụng dựa trên Spring sử dụng các công nghệ truy cập dữ liệu trở nên dễ dàng hơn.

- ## JPA là gì?

  Spring Boot JPA là một bản ghi chi tiết của Java để quản lý dữ liệu quan hệ trong các ứng dụng Java. JPA tuân theo Object-Relation Mapping (ORM). JPA cung cấp một API EntityManager runtime để xử lý các câu query và giao dịch trên các object dựa trên database. Nó sử dụng ngôn ngữ truy vấn hướng đối tượng độc lập nền tảng JPQL (Java Persistent Query Language).

- ## Tại sao chúng ta nên sử dụng JPA?

* JPA tránh viết Ngôn Ngữ Định Nghĩa Dữ Liệu (DDL) bằng phương ngữ SQL dành riêng cho database. Thay vào đó nó cho phép ánh xạ trong XML hoặc sử dụng các annotation Java.
* JPA cho phép chúng ta tránh viết Ngôn Ngữ Thao Tác Dữ Liệu (DML) bằng phương ngữ SQL dành riêng cho database.
* JPA cho phép chúng ta save và load các object và đồ thị Java mà không cần bất kỳ ngôn ngữ DML nào.
* Khi chúng ta cần thực hiện các truy vấn JPQL, nó cho phép chúng ta viết các truy vấn dưới dạng các entity Java mà không phải là bảng và cột SQL.

- ## Ví dụ

Tạo project

- B1: Chọn new project -> next -> create

![#######](/assets/img/anh67.png) 

![#######](/assets/img/anh68.png) 

Cấu trúc thư mục

![#######](/assets/img/anh69.png) 

* ## File pom.xml

Thực hiện dependency để chạy dự án

![#######](/assets/img/anh70.png) 

Để cập nhật lại file pom nhấn chuột phải -> maven -> reload project

* ## Tạo class với file hello trong package controller

Đánh dấu class là controller bằng cách sử dụng annotation @Controller

![#######](/assets/img/anh71.png) 

* ## Hello.Jsp

![#######](/assets/img/anh72.png) 

* ## Cấu hình application.properties

![#######](/assets/img/anh73.png) 

Nhấn http://localhost:8080/ trong trình duyệt, kết quả sau sẽ xuất hiện.

* ## Kết bài

Trong bài viết này, chúng ta đã học cách tạo 1 project spring boot - jsp.
Tất cả các mẫu mã hiển thị trong bài viết đều có sẵn trên github.

## The End
