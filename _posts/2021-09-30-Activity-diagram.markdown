---
layout: post
title: Activity diagram
subtitle: Activity diagram
cover-img: /assets/img/01.jpg
thumbnail-img: /assets/img/actiaaa.png
share-img: /assets/img/01.jpg
tags: [Activity diagram]
---
## Activity diagram là gì?

•Là một sơ đồ dung để mô hình hóa các hoạt động trong một quy trình nghiệp vụ.

•Biểu diễn mối liên hệ giữa các đối tượng theo trình tự.

•Được sử dụng để biểu diễn cho hoạt động của một use case.

•Làm rõ quy trình xử lý nghiệp vụ.

•Làm rõ sự luân chuyển dữ liệu trong hệ thống.

•Mô tả thuật toán

Các thành phần:

* Điểm bắt đầu( Start node): Thể hiện cho 1 việc bắt  đầu luồng chạy. Trong activity diagram chỉ được phép có 1 Start node duy nhất. Trước Start node không được xuất hiện bất kì một node nào.

![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/Activity/1.png)  

* Điểm kết thúc(End node): Thể hiện cho việc kết thúc luồng chạy . Trong 1 actitvy diagram chỉ có 1 End node. Sau End node sẽ không được xuất hiện bất kì một node nào.

![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/Activity/2.png)

* Action node: Đại diện cho 1 thao tác cần thực hiện.

![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/Activity/3.png)

* Object node: Đại diện cho 1 đối tượng trong luồn xử lý.

![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/Activity/4.png)

* Control flow: Thể hiện cho luồng chạy của Activity.

![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/Activity/5.png)

* Decision node: Thể hiện cho điều kiện, rẽ nhánh. Đảm bảo luồng hoạt động theo 1 nhánh duy nhất.

![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/Activity/6.png)

\*Merge node: Chiều ngược lại của Decision node. Gộp các nhánh con của Decision node thành 1 luồng duy nhất.

![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/Activity/7.png)

\*Fork node: Tách luồng xử lý thành nhiều nhánh con chạy song song. Thể hiện cho việc đồng thời xảy ra.

![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/Activity/8.png)

\*Join node: Chiều ngược lại của Fork node. Sau khi hành động song song kết thúc, gom các luồng xử lí về 1 luồng chính.

![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/Activity/9.png)

\*Swimlane: Phân làn trong biểu đồ sử dụng. Phần kí hiệu này thường được sử dụng để làm rõ luồng hoạt động của các đối tượng riêng biệt.

![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/Activity/10.png)



## Cách xây dựng Actitvity diagram

**Bước 1: Xác định các nghiệp vụ cần mô tả**

Xem xét bản vẽ Use Case  để xác định nghiệp vụ nào bạn cần mô tả.

**Bước 2: Xác định trạng thái đầu tiên và trạng thái kết thúc**

**Bước 3: Xác định các hoạt động tiếp theo**

Xuất phát từ điểm bắt đầu, phân tích để xác định các hoạt động tiếp theo cho đến khi gặp điểm kết thúc để hoàn tất bản vẽ này.

Ví dụ 1:Sơ đồ đổi mật khẩu đơn giản ta phân tích như sau:
* Bước 1: Người dùng chọn chức năng đổi mật khẩu.

![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/Activity/vidu1/1.png)

* Bước 2: Hệ thống sẽ hiển thị form đổi mật khẩu cho người nhập dữ liệu.

![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/Activity/vidu1/2.png)

* Bước 3: Người dùng nhập đầy đủ thông tin

![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/Activity/vidu1/3.png)

* Bước 4: Người dùng có thể chọn xác nhận hoặc huỷ( kết thúc)

![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/Activity/vidu1/4.png)
- Nếu người dùng chọn xác nhận hệ thống sẽ kiểm tra thông tin mật khẩu mới và xác nhận mật khẩu có trùng khớp và hợp lệ
    ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/Activity/vidu1/5.png)
    - Nếu sai sẽ thông báo lỗi

        ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/Activity/vidu1/6.png)  

        Tiếp sẽ chuyển về hiển thị form

        ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/Activity/vidu1/7.png)

    - Nếu đúng sẽ thay đổi mật khẩu người dùng        
        ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/Activity/vidu1/8.png)            

        Thông báo thay đổi thành công            

        ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/Activity/vidu1/9.png)            

        Chuyển đến merge node rồi kết thúc   
                 
        ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/Activity/vidu1/10.png)         
- Nếu người dùng chọn huỷ sẽ chuyển đến merge node rồi kết thúc. 
    ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/Activity/vidu1/11.png)

Ví dụ 2:Sơ đồ mô tả quá trình của hoạt động hệ thống đăng nhập đơn giản:
* Bắt đầu người dùng sẽ phải nhập tài khoản, mật khẩu.

![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/Activity/vidu2/1.png)

* Hệ thống sẽ kiểm tra tài khoản có tồn tại không.

![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/Activity/vidu2/2.png)

- Nếu không tồn tại thông báo sai tên đăng nhập        
    ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/Activity/vidu2/3.png)         
    Rồi quay lại yêu cầu người dùng đăng nhập                
    ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/Activity/vidu2/4.png)           
-Nếu tồn tại hệ thống sẽ kiểm tra mật khẩu có trùng khớp với dữ liệu trong database không        
![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/Activity/vidu2/5.png)       
    - Nếu không khớp sẽ thông báo sai mật khẩu                
        ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/Activity/vidu2/6.png)             
        Rồi quay lại yêu cầu người dùng đăng nhập                        
        ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/Activity/vidu2/7.png)               
    - Nếu khớp thông báo đăng nhập thành công rồi kết thúc        
        
    ![](https://raw.githubusercontent.com/anhquan02/anhquan02.github.io/anhquan02/docs/img/Activity/vidu2/9.png)

Link tham khảo: [What is Activity Diagram? (visual-paradigm.com)](https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-activity-diagram/)
