---
layout: post
title: Deploy Project On Ngrok
subtitle: Cách thiết lập và triển khai ứng dụng Java Spring Boot trên Ngrok
cover-img: /assets/img/deploy-project-ngrok/deploy-ngrok.png
thumbnail-img: /assets/img/deploy-project-ngrok/deploy-ngrok.png
share-img: /assets/img/deploy-project-ngrok/deploy-ngrok.png
tags: [Cách thiết lập và triển khai ứng dụng Java Spring Boot trên Ngrok]
---

# Cách thiết lập và triển khai ứng dụng Java Spring Boot trên Ngrok
Việc xây dựng các dự án bằng Java có vẻ đáng sợ, đặc biệt là khi có vẻ khó hiểu để biết cách bắt đầu và thiết lập. May mắn thay, việc sử dụng các công cụ Spring Boot và ngrok sẽ đảm bảo với bạn rằng việc viết mã cho các ứng dụng Java có thể nhanh chóng và liền mạch.

Spring Boot giảm bớt vấn đề tìm ra cách cấu trúc phân cấp dự án và cung cấp đầy đủ tài liệu cho các nhà phát triển để tạo các ứng dụng độc lập mà không cần dựa vào các máy chủ web bên ngoài.

Nhiều bài viết trên blog Twilio sử dụng ngrok , một công cụ tạo đường hầm trên máy chủ cục bộ hiển thị các webhook trên các URL công khai mà Twilio có thể truy cập. Công cụ ngrok tuyệt vời cũng được sử dụng để tạo các URL công khai tạm thời cho máy chủ web phát triển của bạn.

Trong bài viết này, bạn sẽ tìm hiểu cách thiết lập ứng dụng Java Spring Boot và tạo đường hầm từ một URL trên miền ngrok.io đến ứng dụng cục bộ đang chạy trên máy tính của bạn.

## đăng ký tài khoản [ngrok](https://ngrok.com/)
sau khi đăng khý thành công màn hình sẽ hiển thị như sau 

![image](https://user-images.githubusercontent.com/109157942/224470353-03ac3d9e-9b6e-4379-9114-8f1b5e7db513.png)

## download ngrok về máy và cài đặt 

sau khi cài đặt thành công mở ngrox trên máy tính 
![image](https://user-images.githubusercontent.com/109157942/224470424-a486670f-d896-482a-b1ab-6baabde122b4.png)

Tiếp theo cài đặt auth trên máy tính 

![image](https://user-images.githubusercontent.com/109157942/224470487-232a947f-1b25-4cbb-b4e5-73b3636f5775.png)

copy:  ngrok config add-authtoken 2HMQ............ và paste lên ngrox 
![image](https://user-images.githubusercontent.com/109157942/224470527-62feab5c-8428-4452-bcde-2f19dc7d4611.png)

# chạy câu lệnh sau: ngrok http 8080

![image](https://user-images.githubusercontent.com/109157942/224472723-b46309bd-99da-4e67-add9-2ebe84071d1d.png)

bạn có thể kiểm tra các yêu cầu được giử lên tại http://localhost:4040 (Web Interface                 http://127.0.0.1:4040  )
![image](https://user-images.githubusercontent.com/109157942/224470677-1034a65e-e5df-4999-8abd-25e2805243b4.png)

## Tạo dự án spring boot 

![image](https://user-images.githubusercontent.com/109157942/224469962-6e725166-e33c-4247-93c8-bdb422d93809.png)
![image](https://user-images.githubusercontent.com/109157942/224469973-37faae6b-5889-4f7d-a577-867d3050e7b7.png)

Nhấn nút cretae 

## Cấu trúc tập tin 
![image](https://user-images.githubusercontent.com/109157942/224470063-9d37b051-17c0-401b-b85c-a52f5e59c0d2.png)


Mở rộng com.example.dem để hiển thị tệp lớp có tên Demo2Application. Lớp này tồn tại để biên dịch và thực thi mã sau này trong bài viết.

Lưu ý rằng pom.xmlthư mục cũng được tạo để thuận tiện cho bạn với thông tin liên quan đến phụ thuộc "Spring boot". Tệp này pom.xmllà viết tắt của Project Object Model , rất cần thiết cho các dự án Maven vì nó bao gồm các chi tiết được sử dụng để xây dựng dự án. Nếu bạn đã thêm nhiều phụ thuộc hơn, chúng cũng sẽ được liệt kê trong tệp này.

## Thêm phụ thuộc 
> pom.xml 

```
 <dependency>
            <groupId>com.github.alexdlaird</groupId>
            <artifactId>java-ngrok</artifactId>
            <version>1.6.2</version>
        </dependency>
```

## xây dựng hello word đơn giản

```
@Controller
@RequestMapping
public class helloController {
    @GetMapping
    public String hello(){
        return "hello-word";
    }
}
```

> hello-word.html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
hello word
</body>
</html>
```

## Open ngrox

Sau khi xác định bộ điều khiển web, máy khách ngrok và đường hầm cần được khởi tạo.

Như đã đề cập, ngrok là một tiện ích hữu ích để kết nối phiên bản phát triển của ứng dụng Java đang chạy trên hệ thống của bạn với một URL công khai mà Twilio có thể kết nối.

Thật không may, ngrok không còn cho phép người dùng cung cấp ẩn danh nội dung HTML bằng URL ngrok nữa. Do đó, bạn bắt buộc phải đăng ký tài khoản ngrok để tạo authtoken. Tải ngrok xuống máy của bạn và đọc hướng dẫn để định cấu hình ngrok authtoken .


> Demo2Application.java

```
@SpringBootApplication
public class Demo2Application {

    public static void main(String[] args) {
        SpringApplication.run(Demo2Application.class, args);
        final NgrokClient ngrokClient = new NgrokClient.Builder().build();
        final CreateTunnel createTunnel = new CreateTunnel.Builder()
                .withAddr(4041)
                .build();
        final Tunnel tunnel = ngrokClient.connect(createTunnel);
    }

}

```

## chạy project 
 truy cập Forwarding trênn ngrok  https://009e-2001-ee0-4181-48ce-1cfb-2bf0-96d9-9737.ap.ngrok.io (Forwarding   https://009e-2001-ee0-4181-48ce-1cfb-2bf0-96d9-9737.ap.ngrok.io )

![image](https://user-images.githubusercontent.com/109157942/224472717-c1bd41e5-8603-4323-96bb-8c77c00f32a7.png)

Kết quả:
![image](https://user-images.githubusercontent.com/109157942/224472684-7d02e83b-0811-415d-be94-f828654cd769.png)

## The End