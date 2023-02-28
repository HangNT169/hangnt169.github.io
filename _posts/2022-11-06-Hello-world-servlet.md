---
layout: post
title: Java web demo
subtitle: Java web demo
cover-img: /assets/img/02.jpg
thumbnail-img: /assets/img/servlet-demo/ademo.png
share-img: /assets/img/02.jpg
tags: [Java web demo]
---
# Demo: Servlet hello-world

## Yêu cầu cài đặt:
* Eclipse.
* Apache tomcat( hiện tomcat v10.0 đang lỗi ko khuyến khích dùng).

## Hello-world demo:

- Tạo 1 server tomcat trên IDE eclipse: 
  - File --> New --> Other.\
    ![](/assets/img/servlet-demo/1.png)
  - Chọn server:\
    ![](/assets/img/servlet-demo/2.png)
  - Chọn phiên bản tomcat( khác v10.0 vì nó đang lỗi) --> Next.
  - Chọn tải và cài đặt --> chọn thư mục mà bạn muốn lưu file tomcat sẽ tải.\
( nếu như bạn đã tải tomcat trên Apache Tomcat® - Welcome! thì browser đến thư mục đã giải nén)\
    ![](/assets/img/servlet-demo/3.png)
  - Finsh bạn sẽ có 1 foder như sau là thành công:\
    ![](/assets/img/servlet-demo/4.png)
- Chọn trình duyệt mặc định khi chạy server:
  - Window --> Web browser --> Tùy chọn( trừ 0 Internal Web Browser bởi nó sau làm việc với nó dễ bị vỡ form)\
    ![](/assets/img/servlet-demo/5.png)
- Tạo project ( project mình sẽ dùng tomcat v9 mọi người có thể tham khảo):
  - File --> New --> Other --> Dynamic Web.\
    ![](/assets/img/servlet-demo/6.png)
  - Đặt tên project( tùy ý đặt tên nhé!) --> Finish.\
    ![](/assets/img/servlet-demo/7.png)
  - Tạo Servlet trong src/main/java:\
    ![](/assets/img/servlet-demo/8.png)
  - Đặt tên tùy ý --> Finish.\
    ![](/assets/img/servlet-demo/9.png)
  - Có thể chạy luôn để kiểm tra mọi thứ có hoạt động bình thường không:\
    ![](/assets/img/servlet-demo/10.png)
    ![](/assets/img/servlet-demo/11.png)
    
      Sau khi Finish sẽ xuất hiện 1 trang web như sau:\
    ![](/assets/img/servlet-demo/12.png)
    
      Lên được đến đây thì mọi thứ vẫn bình thường.
  - Tạo folder views cho project. Project sẽ theo mô hình MVC.\
    ![](/assets/img/servlet-demo/13.png)
  - Tạo file .jsp trong views mình sẽ đặt là index.jsp cho quen thuộc với index.html\
    ![](/assets/img/servlet-demo/14.png)
  - Nội dung phần body của mình đơn giản sẽ chỉ hiện chữ “Hello World”:\
    ![](/assets/img/servlet-demo/15.png)
  - Thay đổi code phần doGet bên servlet --> Run as --> Run on server:\
    ![](/assets/img/servlet-demo/16.png)
    ![](/assets/img/servlet-demo/17.png)
    
Kết thúc. 
Chúc các bạn thành công!
