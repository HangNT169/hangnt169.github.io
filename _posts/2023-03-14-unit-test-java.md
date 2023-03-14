---
layout: post
title: Unit Test
subtitle: Unittest là gì và cách viết unittest trong java
cover-img: /assets/img/unit-test-java/Unit-Testing.png
thumbnail-img: /assets/img/unit-test-java/Unit-Testing.png
share-img: /assets/img/unit-test-java/Unit-Testing.png
tags: [Unittest là gì và cách viết unittest trong java]
---

<p align="center">
 <img width="100px" src="https://res.cloudinary.com/anuraghazra/image/upload/v1594908242/logo_ccswme.svg" align="center" alt="GitHub Readme Stats" />
 <h2 align="center">Unittest là gì và cách viết unittest trong java</h2>
</p>

unittest rất quan trọng vì các nhà phát triển phần mềm đôi khi cố gắng tiết kiệm thời gian thực hiện kiểm thử đơn vị tối thiểu và điều này là sai lầm vì kiểm thử đơn vị không phù hợp dẫn đến chi phí cao Sửa lỗi trong quá trình Kiểm tra hệ thống , Kiểm tra tích hợp và thậm chí là Kiểm thử Beta sau khi ứng dụng được xây dựng. Nếu thử nghiệm đơn vị thích hợp được thực hiện trong quá trình phát triển sớm, thì cuối cùng nó sẽ tiết kiệm thời gian và tiền bạc.

<div align="center">
 <table >
  <theader>
  <th>
   Nội Dung 
   </th>
   </theader>
  <tbody>
  <td>
   <p>1:Unittest là gì?</p>
   <p>2: cách viết unittest trong java?</p>
   </td>
   </tbody>
   </table>
</div>

# Unittest là gì?

- là một loại kiểm thử phần mềm trong đó các đơn vị hoặc thành phần riêng lẻ của phần mềm được kiểm tra. Mục đích là để xác nhận rằng mỗi đơn vị của mã phần mềm hoạt động như mong đợi. Kiểm thử đơn vị được thực hiện trong quá trình phát triển (giai đoạn mã hóa) của một ứng dụng bởi các nhà phát triển. Unit Test tách một phần mã và xác minh tính đúng đắn của nó. Một đơn vị có thể là một chức năng, phương pháp, thủ tục, mô-đun hoặc đối tượng riêng lẻ.\
- Unit test là mức độ kiểm thử nhỏ nhất trong quy trình kiểm thử phần mềm. Unit test kiểm thử các đơn vị nhỏ nhất trong mã nguồn như method, class, module...Do đó Unit test nhằm kiểm tra mã nguồn của các chương trình, các chức năng riêng rẽ hoạt động đúng hay không.\
- Unit testing được thực hiện bởi lập trình viên.

Dưới đây là những lý do chính để thực hiện kiểm thử đơn vị trong công nghệ phần mềm:

![image](https://user-images.githubusercontent.com/109157942/224485935-42aba72f-11f3-45ce-b1ee-2258c9d0d34c.png)

1 Các bài kiểm tra đơn vị giúp sửa lỗi sớm trong chu kỳ phát triển và tiết kiệm chi phí.\
2 Nó giúp các nhà phát triển hiểu cơ sở mã thử nghiệm và cho phép họ thực hiện các thay đổi một cách nhanh chóng\
3 Các bài kiểm tra đơn vị tốt đóng vai trò là tài liệu dự án\
4 Các bài kiểm tra đơn vị giúp sử dụng lại mã. Di chuyển cả mã và thử nghiệm của bạn sang dự án mới của bạn. Tinh chỉnh mã cho đến khi các bài kiểm tra chạy lại.

# cách viết unittest trong java

Hôm nay mình sẽ hướng dẫn các bạn sử dụng Junit để làm test case cho Java. Trước tiên chúng ta cần chuẩn bị vài thứ:

IntelliJ
Maven
Junit 5
JDK 8 -> 17

## Tạo project

![image](https://user-images.githubusercontent.com/109157942/224486183-203b8a9f-82de-4f66-966d-df80b95582fb.png)
![image](https://user-images.githubusercontent.com/109157942/224486199-6a478cb9-075d-40e4-a2f8-c63eacf4ccb6.png)

## pom.xml

Sau khi tạo xong project, các bạn thấy file pom.xml.

File pom.xml là nơi khai báo tất cả những gì liên quan đến dự án được cấu hình qua maven, như khai báo các dependency, version của dự án, tên dự án, repossitory …

```
 <dependencies>
        <dependency>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.8.1</version>
        </dependency>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-engine</artifactId>
            <version>5.6.2</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-params</artifactId>
            <version>5.6.2</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-api</artifactId>
            <version>5.6.2</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
```

## Viết vài dòng code để có chuyện mà test nè

Tạo một class MathUtil ở ..\src\main\java

MathUtil

```
public class MathUtil {
    public int sum(int a, int b){
        return a+b;
    }
}
```

## 3. Tạo testcase version đơn giản

Chúng ta viết vài test case nhẹ nhàng thông qua Annotation @Test và hàm assertEquals().

```
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class MathUtilTest {
    MathUtil util = new MathUtil();

    @Test
    void test1(){
        assertEquals(util.sum(1,1),2);
    }
    @Test
    void test2(){
        assertEquals(util.sum(1,1),3);
    }
    @Test
    void test3(){
        assertEquals(util.sum(1,2),3);
    }
}
```

IntelliJ hỗ trợ các bạn chạy từng test case hoặc cả class test thông qua các nút hiện kế bên số dòng luôn nhé :D xịn xò chưa, các bạn cũng có thể assert nhiều lần trong một hàm test().

Khi chạy test, nó sẽ kiểm tra tất cả các Expected và Actual, nó chỉ cho bạn pass khi tất cả đều thành công, chỉ cần có 1 test sai xem như test fail. (Giống như toán tử and vậy đó).

Khi có sai sót xảy ra, nó sẽ hiện thông báo lên màn hình là test nào sai và sai cái gì.

tham khảo thêm về junit [tại đây](https://junit.org/junit5/docs/current/user-guide/)

## The End
