---
layout: post
title: Giới thiệu Github
subtitle: Các khái niệm trong Github
cover-img: /assets/img/path.jpg
thumbnail-img: /assets/img/github.png
share-img: /assets/img/path.jpg
tags: [Giới thiệu Github]
---

* Git là gì? Git là hệ thống kiểm soát phiên bản phân tán mà nguồn mở ( Open Source Distributed Version Control System). Các dự án thực tế thường có nhiều nhà phát triển làm việc song song. Vì vậy, một hệ thống kiểm soát phiên bản như Git là cần thiết để đảm bảo không có xung đột mã giữa các nhà phát triển. Ngoài ra, các yêu cầu trong dự án thay đổi thường xuyên. Vì vậy, cần một hệ thống cho phép nhà phát triển quay lại phiên bản cũ hơn của mã.

* ## Thế nào là repository, branch?

* ## Repository là gì ?

Repository hay còn gọi là Repo, dịch ra tiếng Việt có nghĩa là kho, đây chính là nơi chứa tất cả mã nguồn cho một dự án được tạo bởi Git. Bạn có thể hiểu một cách khác là Repository chính khai báo thư mục chứa dự án của bạn trên local hoặc remote. Một repo sẽ có hai cấu trúc dữ liệu chính đó là Object store và Index được lưu trữ ẩn trong thư mục .git .

* ## Có hai loại repository là local repository và remote repository:

Local repository: là repo được cài đặt trên máy tính của lập trình viên, repo này sẽ đồng bộ hóa với remote bằng các lệnh của Git.
Remote repository: là repo được cài đặt trên server chuyên dụng, điển hình hiện nay là Github.

* ## Branch là gì ?

Đối với những dự án có nhiều thành viên tham gia thì mỗi thành viên sẽ nhận được nhiều task từ leader, vì vậy việc xử lý task này trên cùng một thời gian là rất khó vì dễ bị đụng code. Để giải quyết vấn đề này thì chúng ta sẽ sử dụng branch của Git, tương ứng với mỗi nhiệm vụ chúng ta sẽ tạo một branh và làm việc trên đó, các branch này sẽ hoạt động riêng lẻ và không anh hưởng lẫn nhau.
Vậy branch là những phân nhánh ghi lại luồng thay đổi của lịch sử, các hoạt động trên mỗi branch sẽ không ảnh hưởng lên các branch khác nên có thể tiến hành nhiều thay đổi đồng thời trên một repository giúp giải quyết nhiều nhiệm vụ cùng lúc.
Khi bạn tạo một repository thì Git sẽ thiết lập branch mặc định là master, nghĩa là nó sẽ tự tạo một branch master và mọi hoạt động của ban lúc này đều nằm trên branch master.

* ## Github là gì? (Phân biệt Git và Github)

Chúng ta đã nghe tới Git và có thể đã dùng GitHub nhưng chúng ta đa phần vẫn nhầm lẫn Git vs GitHub là một bởi vì cứ nói đến Git là nghĩ tới GitHub. Đó là một sự hiểu lầm vì Git như đã giải thích ở trên đó là tên gọi của một mô hình hệ thống, các máy tính có thể clone lại mã nguồn từ một repository , còn GitHub là tên của một công ty cũng cấp dịch vụ máy chủ repository công cộng, mỗi người có thể truy cập vào website trang chủ để tạo tài khoản trên đó và tạo ra kho chứa source của riêng mình khi làm việc.

* ## Tại sao nên sử dụng Git?

+ Git mang đến nhiều lợi thế cho công việc lập trình:
+ Git dễ sử dụng, an toàn và nhanh chóng.
+ Quản lý source code dễ dàng chuyên nghiệp
+ Có thể giúp quy trình làm việc code theo nhóm đơn giản hơn rất nhiều bằng việc kết hợp các phân nhánh (branch).
+ Hạn chế được lỗi xảy ra trong quá trình code trong 1 team
+ Khi gặp lỗi có thể dễ dàng Backup lại phiên bản trước
+ Code không giới hạn khoảng cách giữa các thành viên trong team, bạn có thể làm việc ở bất cứ đâu vì chỉ cần 
+ clone mã nguồn từ kho chứa hoặc clone một phiên bản thay đổi nào đó từ kho chứa, hoặc một nhánh nào đó từ kho chứa.
+ Dễ dàng trong việc deployment sản phẩm.

* ## Các thuật ngữ quan trọng trong Git

* ### Kho lưu trữ (Repository)

Kho lưu trữ (thường được gọi là repo) là một tập hợp các mã nguồn. Repo chứa các commit của dự án hoặc một tập hợp các tham chiếu đến các commit (ví dụ như heads).

* ### Commit

Một commit ghi lại một thay đổi hoặc một loạt các thay đổi mà bạn đã thực hiện đối với một file trong repo. Một commit có hash SHA1 duy nhất được sử dụng để theo dõi các file đã thay đổi trong quá khứ. Git History là danh sách một loạt các commit. Sử dụng lệnh commit kết hợp với lệnh git add để cho git biết những thay đổi của bạn và lưu vào kho lưu trữ repositoty.

* ### Branch

Một branch về cơ bản là một tập hợp các mã thay đổi duy nhất với một tên duy nhất. Mỗi repo có thể có một hoặc nhiều branch. Branch chính – branch mà tất cả các thay đổi cuối cùng được merge vào – được gọi là branch master. Đây là phiên bản làm việc chính thức cho dự án của bạn và là phiên bản mà bạn sẽ thấy khi truy cập kho dự án tại github.com/yourname/projectname.

* ### Checkout

Bạn có thể sử dụng lệnh git checkout để chuyển các branch. Bằng cách nhập git checkout sao tên branch mà bạn muốn chuyển đến hoặc nhập git master để trở về branch chính (master branch).

* ### Fork

Fork là một bản sao của kho lưu trữ (repository). Bạn có thể tận dụng các lợi ích của fork để chạy thử nghiệm các thay đổi mà không ảnh hưởng đến kết quả của dự án.

* ### Fetch

Sử dụng lệnh git fetchđể tìm nạp các bản sao và tải xuống các tệp branch vào máy tính của bạn. Có thể sử dụng nó lưu các thay đổi mới nhất vào repository và có thể tìm nạp branch cùng một lúc.

* ### Head

Head đại diện cho commit mới nhất của repository mà bạn đang làm việc và commit ở đầu của một branch được gọi là head.

* ### Index

Khi sử dụng mà bạn thêm, xóa hoặc thay đổi file thì nó vẫn nằm trong mục index cho đến khi bạn sẵn sàng commit các thay đổi. Bạn dùng lệnh git status để xem nội dung index của bạn.

* ### Merge

Lệnh git kết hợp với các yêu cầu kéo (pull request) để thêm các thay đổi từ nhánh này sang nhánh khác.

* ### Origin

Là phiên bản mặc định của repository và origin đóng vai trò đặc biệt để liên lạc với nhánh chính. Lệnh git push origin master để đẩy các thay đổi cục bộ đến nhánh chính.

* ### Master

Master là nhánh chính của tất cả các repository, nó bao gồm cả những thay đổi gần đây nhất.

* ### Pull

Pull request thể hiện cho banjc ác đề xuất thay đổi trong nhánh chính. Khi bạn làm việc với một nhóm, bạn có thể tạo các pull request để yêu cầu người bảo trì kho lưu trữ xem xét các thay đổi và hợp nhất chúng.

* ### Push

Lệnh git push dùng để cập nhật các nhánh từ xa với những thay đổi mới nhất mà bạn mới commit. 

* ### Remote

Remote (kho lưu trữ từ xa) là một bản sao của một chi nhánh. Remote có thể giao tiếp ngược lại với nhánh gốc (origin branch) của chúng và các remote khác trong kho lưu trữ.

* ### Rebase

git rebase cho phép bạn phân tách, di chuyển và thoát commit. Và cũng có thể sử dụng nó để kết hợp hai nhánh lại với nhau.

* ### Tags

Đối với tags, thì nó sẽ cung cấp cho bạn một cách để theo dõi commit quan trọng.

* ### Upstream

Upstream đề cập đến nơi bạn push các thay đổi của mình và thường là các nhánh chính (master branch).

* ### Working directory, staging area và local repo

Với mỗi local repo có ba virtual zone khác nhau. Đó là:

Working Directory
Staging area
commit area
Working directory là nơi các file mới được tạo, file cũ bị xóa hoặc nơi thực hiện các thay đổi đối với các file đã có. Sau khi thay đổi được thực hiện, chúng sẽ được thêm vào staging area. Do đó, staging area đôi khi còn được gọi là index.

Sau khi các thay đổi hoàn tất, staging area sẽ chứa một hoặc nhiều file cần được commit. Việc tạo một commit sẽ khiến Git lấy mã mới từ staging area và đưa commit vào repo chính. Sau đó commit này sau đó được chuyển đến commit area.

![#######](/assets/img/addcommit.png)

* ### Pull Request

**Pull request** được tạo ra để đưa những file source code của bạn lên 1 host chung nơi mọi người có quyền truy cập sẽ truy cập vào và cùng review, để lại comment trên những file source code đó.

* ### Conflict trong Git là gì?

Conflict nghĩa là xung đột. Trong một hệ thống kiểm soát nguồn như Git, xung đột có thể xảy ra khi hai hoặc nhiều người thay đổi cùng một tệp. Các xung đột có thể xuất hiện tại kho lưu trữ cục bộ của thành viên hoặc kho lưu trữ từ xa Github.

* ### Giải quyết conflict

Trong lúc làm dữ án sẽ xảy ra trường hợp nhiều người làm chung 1 file nên sẽ xảy ra conflict và cách giải quyết là sẽ họp với nhau và thống nhất giữ lại phần nào và bỏ những đi phần thừa (chủ yếu là thư viện)

* ## Cách Clone project từ Remote về Local

* Cần phải **Dowload Git** về máy

* Copy đường link Github của dự án cần **Clone**

![#######](/assets/img/copylink.png)

* Tạo một folder để chứa project chuẩn bị clone, sau đó click chuột phải chọn **Git Bash Here**

![#######](/assets/img/opengitbash.png)

* Thực hiện lệnh: **git clone + tên đường link Github** của dự án cần **Clone**

![#######](/assets/img/opened.png)

* Và chúng ta sẽ có 1 project được lấy từ Remote về

* ## Cách tạo 1 Pull Request 

* B1: Sau khi code xong nhiệm vụ của mình các bạn cần phải push code lên branch riêng của mình, và công việc tiếp theo cần làm đó là merge code từ branch của mình vào branch chính.

* B2: Click vào phần pull request -> Click vào **New pull request**

![#######](/assets/img/pullrequest.png)

* B3: Chọn branch mà bạn muốn, bên trái là branch chính, bên phải là branch riêng của bạn

![#######](/assets/img/newpullrequest.png)

* B4: Sau khi chọn branch xong -> Click chọn **Create pull request** 

![#######](/assets/img/createpullrequest.png)

* B5: Đặt tên cho pull request (tên công việc bạn đã làm) -> Click chọn **Create pull request** 

![#######](/assets/img/datten.png)

* B6: Click vào mục File Change để xem những file đã thay đổi (**Lưu ý chỉ nên chỉnh sửa những file có liên quan đến công việc code của mình, nếu thay đổi nhưng file không liên quan, khi merge code sẽ gây ra conflict**)
-> Thực hiện review code (**convention, requirement ...**), kiểm tra và sửa hết các vấn đề trước khi thực hiện **Merge pull request**

![#######](/assets/img/filechange.png)

* B7: Sau khi kiểm tra xong thì click vào **Merge pull request**

![#######](/assets/img/mergepull.png)

## The end





