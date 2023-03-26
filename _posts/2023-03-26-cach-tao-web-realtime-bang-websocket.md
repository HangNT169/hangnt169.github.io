---
layout: post
title: Cách tạo Websocket Basic
subtitle: Cách tạo Web realtime đơn giản bằng Websocket, Java Spring Boot, AngularJS
cover-img: /assets/img/cach-tao-web-realtime-bang-websocket/logo.jpg
thumbnail-img: /assets/img/cach-tao-web-realtime-bang-websocket/logo.jpg
share-img: /assets/img/cach-tao-web-realtime-bang-websocket/logo.jpg
tags: [Cách tạo Web realtime đơn giản bằng Websocket, Java Spring Boot, AngularJS]
---

## CÁCH TẠO MỘT WEB REALTIME BASIC BẰNG WEBSOCKET, JAVA SPRINGBOOT VÀ ANGULAR JS
- Trước tiên chúng ta cần biết websocket là gì? WebSocket là giao thức hỗ trợ giao tiếp hai chiều giữa client và server để tạo một kết nối trao đổi dữ liệu một cách mạnh mẽ.

###  Websocket giống HTTP ở điểm gì?
- Điểm giống nhau là cả WebSocket và HTTP đều là những giao thức hỗ trợ việc truyền tải thông tin giữa máy chủ và máy trạm.
- Mục đích của các nhà phát triển khi tạo ra WebSocket là nhằm để khắc phục được nhược điểm độ trễ cao của HTTP.
### Websocket khác HTTP ở điểm gì?
- HTTP là giao thức 1 chiều dựa theo giao thức TCP, bạn có thể tạo ra các kết nối dựa vào request HTTP, sau khi kết nối được thực hiện xong và được phản hồi lại, quá trình sẽ kết thúc và đóng lại.
- Trong khi đó, WebSocket là một giao thức truyền tải 2 chiều giữa máy chủ và máy khách. Dữ liệu có thể truyền 2 chiều giữa máy khách – máy chủ hoặc máy chủ – máy khách dựa trên những kết nối đã được thiết lập.
### Nên sử dụng WebSocket trong trường hợp nào?
- Ứng dụng theo thời gian thực
- Game Online
- Ứng dụng chat

Trên đó là những khái niệm về Websocket, sự giống và khác nhau giữa Websocket và HTTP, những ứng dụng của Websocket trong lập trình. Tiếp theo chúng ta cùng tìm hiểu cách tạo 1 web realtime đơn giản sử dụng Websocket, Java Spring Boot và AngularJs.

- Đầu tiên chúng ta sẽ tạo 1 project java spring boot bằng inteliij, sau đó sẽ thêm các thư viện cần thiết để sử dụng như: spring web, lombok, connect-mysql, websocket ... Ở đây mình sử dụng Gradle, các bạn cũng có thể tạo project spring bằng maven và thêm các thư viện tương ứng.

![#######](/assets/img/cach-tao-web-realtime-bang-websocket/anh1.jpg)

- Sau khi tạo project và thêm các thư viện sẽ đến bước cấu hình Websocket.
- @Configuration: đánh dấu đây là một file cấu hình Spring.
- @EnableWebSocketMessageBroker: bật tính năng hỗ trợ WebSocket.
- WebSocketMessageBrokerConfigurer: Interface để cấu hình các thông số của WebSocket.

- Phương thức registerStompEndpoints() đăng ký một địa chỉ WebSocket endpoint và kích hoạt SockJS (một thư viện JavaScript để hỗ trợ WebSocket cho các trình duyệt không hỗ trợ WebSocket).

- "/my-websocket-endpoint" là địa chỉ WebSocket endpoint mà client kết nối đến.
- "setAllowedOrigins("http://127.0.0.1:5500")" chỉ cho phép kết nối đến từ domain "http://127.0.0.1:5500" (ở đây chính là live server).
- Phương thức configureMessageBroker() cấu hình message broker cho WebSocket.

- "enableSimpleBroker()" đăng ký các đường đi (path) cho message broker, đây là các đường đi mà server sẽ sử dụng để gửi tin nhắn đến client. "/topic" và "/queue/" là hai đường đi được đăng ký.
- "setApplicationDestinationPrefixes()" đăng ký tiền tố (prefix) cho các message mapping đến server. Với cấu hình này, tất cả các message mapping đến server phải có tiền tố "/app".

![#######](/assets/img/cach-tao-web-realtime-bang-websocket/anh2.jpg)

- Tiếp theo chúng ta tạo 1 class Product với các thuộc tính nhưu trên hình.
- Các chú thích (anotation) @Entity và @Table được sử dụng để chỉ định rằng lớp này là một thực thể và phải được ánh xạ vào một bảng trong cơ sở dữ liệu. Bảng tương ứng với lớp này sẽ có tên "product".
- Các chú thích @AllArgsConstructor và @NoArgsConstructor được sử dụng để tạo ra các hàm khởi tạo có tham số và không tham số cho đối tượng, giúp cho việc khởi tạo đối tượng trở nên thuận tiện hơn.

- Các chú thích @Getter và @Setter được sử dụng để tạo các phương thức getter và setter tự động cho các trường dữ liệu của đối tượng.
- @Id được sử dụng để chỉ định trường dữ liệu "id" của đối tượng là khóa chính trong bảng tương ứng.

- @GeneratedValue được sử dụng để chỉ định cách sinh khóa chính, ở đây là "GenerationType.IDENTITY" nghĩa là cơ sở dữ liệu sẽ tự động tạo giá trị khóa chính duy nhất (tự tăng) cho mỗi bản ghi được thêm vào bảng. 

![#######](/assets/img/cach-tao-web-realtime-bang-websocket/anh3.jpg)

- Đây là file cấu hình để kết nối đến cơ sở dữ liệu (ở đây mình sử dụng mysql, lưu ý các bạn phải tạo database tương ứng trước trong mysql).

![#######](/assets/img/cach-tao-web-realtime-bang-websocket/anh4.jpg)

- Tạo file repository, đây là tầng giao tiếp với cơ sở dữ liệu, thực hiện các câu truy vấn

![#######](/assets/img/cach-tao-web-realtime-bang-websocket/anh5.jpg)

- Ở tầng service, chúng ta tạo 2 phương thức getAll() và save(). Lưu ý phải có đánh dấu anotation @Service. Đánh dấu @Service ở trên một class trong Spring Framework để đánh dấu rằng class này là một service component. Nói cách khác, class này đóng vai trò là một business service trong ứng dụng, chứa các logic xử lý và tính toán trong ứng dụng.

![#######](/assets/img/cach-tao-web-realtime-bang-websocket/anh6.jpg)

- Phần cuối cùng của phía backend là file controller (ở đây mình dùng RESTful API).
@CrossOrigin("http://127.0.0.1:5500") được sử dụng để bật tính năng CORS (Cross-Origin Resource Sharing) cho phép request từ domain http://127.0.0.1:5500 (live server) được phép truy cập các resource từ server.
- @Autowired được sử dụng để inject ProductService vào trong ProductController.
- Phương thức đầu tiên là phương thức trả về danh sách các đối tượng Product dưới dạng JSON.
- @MessageMapping("/products") định nghĩa một endpoint "/products" dùng để xử lý message được gửi đến từ client thông qua kết nối WebSocket.
- @SendTo("/topic/product") được sử dụng để định nghĩa đường đi (destination) cho kết quả trả về từ message broker.

- Trong trường hợp này, khi server nhận được một message từ client thông qua đường dẫn "/products", nó sẽ xử lý message này và trả về một đối tượng Product. Đối tượng này sẽ được gửi đến một địa chỉ "/topic/product" thông qua message broker.

![#######](/assets/img/cach-tao-web-realtime-bang-websocket/anh7.jpg)

Tiếp theo là phần AngularJS, chúng ta cần thêm các thư viện như:
- angular.js
- angular-websocket.js ( là một thư viện hỗ trợ việc kết nối đến WebSocket server trên AngularJS, cung cấp một cách dễ dàng để theo dõi trạng thái kết nối và gửi/nhận message giữa client và server)
- sockjs.min.js (là một thư viện JavaScript cung cấp một giao thức tương thích với WebSocket)
- stomp.js (là một thư viện JavaScript hỗ trợ việc sử dụng giao thức STOMP (Simple Text Oriented Messaging Protocol) trên trình duyệt web. STOMP là một giao thức cho phép các ứng dụng trao đổi message thông qua một message broker trung gian).
Ngoài ra mình tạo thêm 1 table hiển thị danh sách product, 1 form để thêm mới product.

![#######](/assets/img/cach-tao-web-realtime-bang-websocket/anh8.jpg)

- Ở file main.js, chúng ta cần tạo myApp và đăng ký module "ngWebSocket" để hỗ trợ việc sử dụng WebSocket trong ứng dụng.
- Tiếp đến là tạo controller và chúng ta sẽ thực hiện viết code ở đây.
- Đầu tiên là phương thức http.get() call api từ bên backend để lấy dữ liệu trả ra danh sách product.

- Tiếp theo chúng ta sẽ cần tạo WebSocket client thông qua địa chỉ "http://localhost:8080/my-websocket-endpoint" bằng cách sử dụng thư viện SockJS.

- Sau khi tạo đối tượng Websocket client chúng ta sẽ kiểm tra xem ứng dụng của chúng ta đã kết nối được tới Websocket chưa thông qua hàm connect().

- Khi kết nối thành công, đoạn code sử dụng phương thức subscribe của đối tượng stompClient để đăng ký lắng nghe thông điệp từ địa chỉ "/topic/product". Mỗi khi nhận được một thông điệp mới, đoạn code sẽ xử lý dữ liệu thông điệp bằng cách chuyển đổi dữ liệu từ chuỗi JSON sang đối tượng JavaScript sử dụng phương thức JSON.parse() và đẩy đối tượng sản phẩm mới vào danh sách sản phẩm hiện tại của ứng dụng.

- Cuối cùng là phương thức addProduct() , phương thức này tạo ra một đối tượng chứa thông tin sản phẩm mới, sử dụng phương thức send() của đối tượng stompClient để gửi thông điệp này lên server tại địa chỉ "/app/products".

![#######](/assets/img/cach-tao-web-realtime-bang-websocket/anh9.jpg)

- Và chúng ta sẽ kiểm tra xem ứng dụng của chúng ta đã realtime hay chưa bằng cách mở 2 trình duyệt, thực hiện thêm mới Product ở 1 trình duyệt, sau khi ấn thêm mới Product nếu ở cả 2 trình duyệt đều hiển thị được sản phẩm vừa thêm mới thì chúc mừng bạn đã tạo 1 web realtime thành công!

![#######](/assets/img/cach-tao-web-realtime-bang-websocket/anh10.jpg)

Link git source code: [tại đây](https://github.com/nguyencongthang2509/demo-websocket-basic)

## THE END
