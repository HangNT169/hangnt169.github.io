---
layout: post
title: Tạo web application JSP Servlet sử dụng JSTL với Tomcat10 
subtitle: Tạo web application JSP Servlet sử dụng JSTL với Tomcat10 
cover-img: /assets/img/01.jpg
thumbnail-img: /assets/img/tao-web-application/webapplication.jpg
share-img: /assets/img/01.jpg
tags: [Tạo web application JSP Servlet sử dụng JSTL với Tomcat10]
---

* ## Tạo project Java web application

* New project -> jakarta EE -> Template -> web application -> create

![#######](/assets/img/tao-web-application/anh76.png) 

![#######](/assets/img/tao-web-application/anh77.png) 

* Thêm tomcat

* Dowload tomcat 10 tại: https://tomcat.apache.org/download-10.cgi

* Core -> click dowload 32 hoặc 64 bit -> giải nén file

![#######](/assets/img/tao-web-application/anh78.png) 

* Thêm tomcat 10 vào Intellij

![#######](/assets/img/tao-web-application/anh79.png) 

* Chọn edit configuration -> add new run configuration (hoặc dấu cộng trên cùng bên trái) -> tomcat server -> local

![#######](/assets/img/tao-web-application/anh80.png) 

![#######](/assets/img/tao-web-application/anh81.png) 

![#######](/assets/img/tao-web-application/anh82.png) 

* Click chuột configuration-> click dấu cộng -> click tomcat home -> trỏ tới folder vừa tải tomcat 10 -> ok -> ok

![#######](/assets/img/tao-web-application/anh83.png) 

![#######](/assets/img/tao-web-application/anh84.png) 

* Tại Before launch -> click dấu cộng -> Buid Arifacts -> chọn tên folder:war exploded -> ok

![#######](/assets/img/tao-web-application/anh85.png) 

* Deployment -> dấu cộng -> Arifacts -> chọn tên folder:war exploded

![#######](/assets/img/tao-web-application/anh86.png) 

* Click OK
Thực hiện chạy file index.jsp

![#######](/assets/img/tao-web-application/anh87.png) 

![#######](/assets/img/tao-web-application/anh88.png) 

* ### Configura trong pom xml thêm dependency

```
<!-- taglibs-standard-spec-*.jar -->
        <!-- http://mvnrepository.com/artifact/org.apache.taglibs/taglibs-standard-spec -->
        <dependency>
            <groupId>org.apache.taglibs</groupId>
            <artifactId>taglibs-standard-spec</artifactId>
            <version>1.2.5</version>
        </dependency>
        <dependency>
            <groupId>javax.servlet.jsp.jstl</groupId>
            <artifactId>jstl-api</artifactId>
            <version>1.2</version>
        </dependency>
        <!-- taglibs-standard-impl-*.jar -->
        <!-- http://mvnrepository.com/artifact/org.apache.taglibs/taglibs-standard-impl -->
        <dependency>
            <groupId>org.apache.taglibs</groupId>
            <artifactId>taglibs-standard-impl</artifactId>
            <version>1.2.5</version>
        </dependency>
```

* ### Đăng ký thư viện JSP
Khai báo taglib tại đầu trang jsp

```
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
```

* ### Kiểm Thử

```
<body>
<c:set var = "stuff" value ="<%= new java.util.Date() %>" />
Time is ${stuff}
<h1><%= "Hello World!" %>
</h1>
<br/>
<a href="hello-servlet">Hello Servlet</a>
</body>
```

* Tham khảo thêm [tại đây](https://www.tutorialspoint.com/jsp/jsp_standard_tag_library.htm)

* ### Kết quả

![#######](/assets/img/tao-web-application/anh89.png) 

* Xem chi tiết code [tại đây](https://github.com/thangdtph27626/JSP_SERVLET.github.io)
 

## The End
