---
layout: post
title: Convention Java
subtitle: Convention Java
cover-img: /assets/img/convention-java/codingconvention.png
thumbnail-img: /assets/img/convention-java/codingconvention.png
share-img: /assets/img/convention-java/codingconvention.png
tags: [Convention Java]
---

# General Rules — Naming Conventions
## 1. Chuẩn hình thức và chuẩn ngữ nghĩa
### 1.1 Chuẩn hình thức
* Là những quy định liên quan đến sự định dạng của mã nguồn:
* Thụt đầu dòng
* Sử dụng khoảng trắng<br/>
*  Đóng ngoặc, mở ngoặc<br/>
*  Đặt tên lớp, thuộc tính, phương thức<br/>
* ![chuan_dat_ten_hinh_thuc.jpg](..%2Fassets%2Fimg%2Fconvention%2Fchuan_dat_ten_hinh_thuc.jpg)
### 1.2 Chuẩn ngữ nghĩa
* Biểu thức so sánh
* Cấu trúc điều khiển : if, for, while
* Cài đặt phương thức
![hinhthuc.jpg](..%2Fassets%2Fimg%2Fconvention%2Fhinhthuc.jpg)
## 2. White Space
* Những quy định về sử dụng khoảng trắng (space), thụt đầu dòng, xuống dòng, dòng trống: giúp cho nội dung văn bản được tổ chức một cách có hệ thống để người đọc dễ dàng tiếp thu.
* 1 đơn vị thụt đầu dòng = 1 tab(*)
* Hai dòng code cách nhau một bậc thì sẽ cách nhau một đơn vị thụt đầu dòng.
* Hai block code thì cách nhau ít nhất một dòng trống.
* Đặt khoảng trắng sau dấu phẩy và dấu chấm phẩy.
* Đặt khoảng trắng xung quanh các toán tử.
## 3. Dấu ngoặc nhọn {}
* Theo tiêu chuẩn Java: dấu “{” phải được đặt cùng dòng với các câu if, for, while,… 
* Nếu bạn nào đã code với C# thì sẽ thấy ngược lại, dấu “{” phải được đặt ở dòng mới.
## 4. Comment
* Không viết các comment chỉ lặp code, comment thừa. Một số vấn đề gặp phải khi comment không tốt:
* Các comment chỉ mô tả là lặp code, chứ không cung cấp thêm thông tin gì cho người đọc.
* Người đọc tốn thời gian đọc nhiều hơn.
* Viết các comment không cầu kì; càng đơn giản càng tốt.
* Khi dùng nhiều endline comment trên các dòng code liên tiếp nhau thì các comment này phải được canh lề như nhau.
* Nên vừa code vừa viết comment. Tránh trường hợp viết code xong rồi mới viết comment.
* Không nên đụng chỗ nào cũng comment, chỉ viết comment khi bạn cảm nhận là đoạn code của mình quá phức tạp.
![comment.jpg](..%2Fassets%2Fimg%2Fconvention%2Fcomment.jpg)
## 5. Quy ước đặt tên
### 5.1 Các cách đặt tên trong lập trình 
* Pascal case
  * Các chữ cái đầu mỗi từ được viết hoa.Các chữ còn lại được viết thường.
      <br/> Ví dụ: MyProvider, StringBuilder
* Camel case
  * Giống với Pascal case nhưng chữ cái đầu của từ đầu tiên viết thường.
    <br/> Ví dụ: myProvider, stringBuilder

### 5.2 Đặt tên class,  interface, abstract class
* Sử dụng danh từ hay cụm danh từ : SinhVien, FormSinhVien,…
* Dùng Pascal case : SinhVien, FormSinhVien,…
* Hạn chế viết tắt gây khó hiểu :
  * Sai: FormSV
  * Đúng:FormSinhVien
* Không dùng tiền tố khi đặt tên lớp:
    * Sai : ISinhVien
    * Đúng: SinhVien
### 5.3 Phương thức
* Sử dụng Camel case để đặt tên phương thức. Ví dụ: xepLoai.
* Tên phương thức thể hiện được chức năng của phương thức đó. tinhDiemTrungBinh.
* Tránh đặt tên gây cảm giác mơ hồ, không rõ nghĩa. Ví dụ: hienThi, tinh.
* Không phân biệt tên các phương thức bằng số. Ví dụ: tinhDiem1, tinhDiem2.
### 5.4 Biến
* Sử dụng Camel case để đặt tên biến. Ví dụ: int diemTrungBinh, String hoTen
* Không dùng tiền tố. Ví dụ:
  * Đúng: String address
  * Sai: String strAddress
* Tên biến gợi nhớ, tránh viết tắt gây khó hiểu. Ví dụ:
  * Đúng: String address
  * Sai: String addr
* Không đặt tên biến chỉ bằng 1 chữ cái như x, y , z,… trừ trường hợp các biến đếm i, j, k.
* Không nên đặt tên biến quá dài, hay quá ngắn vì có thể làm rối chương trình hoặc cũng dẫn đến ý nghĩa biến mơ hồ(quá ngắn).
### 5.5 Biến static, enum
* Tất cả các từ được viết hoa và phân cách bằng dấu gạch dưới (_).
  * Ví dụ:
    ```
    static float PI = 3.14f
    static int MIN_WIDTH = 4
    1
    2
    3
    enum ShapeType{
    SQUARE, CIRCLE, RECTANGLE
    }
    ```
### 5.6 Biến final
* Đối với biến final toàn cục: đặt tên biết giống như biến static. Tất cả các từ được viết hoa và phân cách bằng dấu gạch dưới (_).
* Đối với biến fianl cục bộ: đặt tên biến giống như biến thông thường.
    ```
    public class HinhTron {
    // Biến toàn cục
    final float PI = 3.14f;
    
        public float tinhChuVi(int banKinh) {
            int duongKinh = banKinh * 2; // Biến cục bộ
            return duongKinh * PI;
        }
    }
    ```
### 5.7 Đặt tên package
* Tên package: tất cả đều là chữ thường.
  * Ví dụ:
     * Đúng: com.example.deepspace
     *  Sai: com.example.deepSpace hoặc com.example.deep_space
![package_class.jpg](..%2Fassets%2Fimg%2Fconvention%2Fpackage_class.jpg)
## 6. Import thư viện sử dụng
* Chỉ import thư viện sử dụng cần thiết. Không sử dụng import tất cả.
  * Ví dụ: sử dụng import java.util.List; thay cho import java.util.*;

## The End