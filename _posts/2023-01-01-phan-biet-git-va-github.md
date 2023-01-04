---
layout: post
title: Git và Github
subtitle: Phân biệt Git và Github
cover-img: /assets/img/01.jpg
thumbnail-img: /assets/img/gitvagithub.jpg
share-img: /assets/img/01.jpg
tags: [Phân biệt Git và Github]
---

Tìm hiểu về Git và Github
Git và GitHub

(Đây là cách dùng git để làm việc cá nhân thôi nhé :v )

Giới thiệu về VCS - Git
Giới thiệu về VCS
Version Control System – VCS là gì?
+ VCS là viết tắt của Version Control System là hệ thống kiểm soát các phiên bản phân tán mã nguồn mở. Các VCS sẽ lưu trữ tất cả các file trong toàn bộ dự án và ghi lại toàn bộ lịch sử thay đổi của file. Mỗi sự thay đổi được lưu lại sẽ được và*** thành một version (phiên bản).

+ VCS nghĩa là hệ thống giúp lập trình viên có thể lưu trữ nhiều phiên bản khác nhau của một mã nguồn được nhân bản (clone) từ một kho chứa mã nguồn (repository), mỗi thay đổi vào mã nguồn trên local sẽ có thể ủy thác (commit) rồi đưa lên server nơi đặt kho chứa chính.

VCS là viết tắt của **Version Control System** là **hệ thống kiểm soát các phiên bản phân tán mã nguồn mở**. Các VCS sẽ lưu trữ tất cả các file trong toàn bộ dự án và ghi lại toàn bộ lịch sử thay đổi của file. Mỗi sự thay đổi được lưu lại sẽ được và thành một version (phiên bản).

VCS có tác dụng như thế nào?
+ Lưu lại lịch sử các version của bất kỳ thay đổi nào của dự án. Giúp xem lại các sự thay đổi hoặc khôi phục (revert) lại sau này

+ Việc chia sẻ code trên này dễ hơn, lập trình viên có thể để public cho bất kì ai, hoặc private chỉ cho một số người có thẩm quyền có thể truy cập và lấy code về.

* Git là một hệ thống quản lý phiên bản phân tán (Distributed Version Control System – DVCS), nó là một trong những hệ thống quản lý phiên bản phân tán phổ biến nhất hiện nay. Git cung cấp cho mỗi lập trình viên kho lưu trữ (repository) riêng chứa toàn bộ lịch sử thay đổi.
* Github là gì? Khác với git ở chỗ nào?
* GitHub là một dịch vụ lưu trữ trên web dành cho các dự án có sử dụng hệ thống kiểm soát Git revision.
Mọi người thường hay hiểu nhầm giữa Git và Github. Khi nhắc đến Git thường nghĩ ngay đến Github và thường coi chúng là một. Tuy nhiên 2 cái này khác hẳn nhau, trong khi Git là tên gọi của một mô hình hệ thống, các máy tính có thể clone lại mã nguồn từ một repository, còn GitHub là tên của một công ty cũng cấp dịch vụ máy chủ repository công cộng, mỗi người có thể truy cập vào website trang chủ để tạo tài khoản trên đó và tạo ra kho chứa source của riêng mình khi làm việc.
* Tại sao chúng ta lại cần dùng đến Git?
- Git đã mang đến rất nhiều lợi thế cho công việc lập trình:
- Git dễ sử dụng, an toàn và nhanh chóng.
- Quản lý source code dễ dàng chuyên nghiệp
- Có thể giúp quy trình làm việc code theo nhóm đơn giản hơn rất nhiều bằng việc kết hợp các phân nhánh(branch)
- Hạn chế được lỗi xảy ra trong quá trình code trong 1 team
- Khi gặp lỗi có thể dễ dàng Backup lại phiên bản trước
- Code không giới hạn khoảng cách giữa các thành viên trong team, bạn có thể làm việc ở bất cứ đâu vì chỉ cần clone mã nguồn từ kho chứa hoặc clone một phiên bản thay đổi nào đó từ kho chứa, hoặc một nhánh nào đó từ kho chứa.
- Dễ dàng trong việc deployment sản phẩm.
* Các trạng thái file trong git
- Committed: có nghĩa là dữ liệu đã được lưu trữ một cách an toàn trong cơ sở dữ liệu, tức là những gì bạn đã commit thành công.
- Staged: là bạn đã đánh dấu sẽ commit phiên bản hiện tại của một tập tin đã chỉnh sửa trong lần commit sắp tới. Trạng thái này xảy ra khi bạn sử dụng lệnh git add <file_name> nhưng chưa commit.
- Modified: có nghĩa là bạn đã thay đổi tập tin nhưng chưa commit vào cơ sở dữ liệu, tức là bạn chưa sử dụng lênh git add và git commit.
* Cài đặt – Cấu hình git
Tham khảo: https://openplanning.net/11707/cai-dat-git-tren-windows
- Cài đặt SSH lên máy tính window (local)
- SSH Key
+ Khi bạn đăng nhập vào 1 PVS nào đó thì bạn thường sẽ phải nhập user và password. Điều này sẽ không an toàn và có khả năng sẽ dễ bị tấn công bằng brute force. Đặc biệt hơn là nhiều khi sẽ gây khó chịu khi mỗi lần truy cập là lại phải nhập lại mật khẩu. Và khi quên mất pass là thôi xong luôn =)))
+ SSH Key là một cặp key được dùng để mã hóa bất đối xứng, gồm có public key và private key. SSH Key được dùng để xác minh quyền truy cập và mã hóa nội dung để tránh bị tấn công.
+ Nội dung giữa Private Key và Public Key hoàn toàn khác nhau, nhưng nó vẫn sẽ nhận diện được với nhau thông qua một thuật toán riêng của nó.
+ Bạn cứ hình dung Private Key là chìa khóa, còn Public Key là ổ khóa. Một khi chìa khóa mà vừa khít với ổ khóa thì cửa sẽ được mở, thế thôi.
- Cấu hình ssh-key:
* B1: Chạy GitBash. Mở 1 folder bất kỳ, click chuột phải -> Chọn Git Bash Here

![#######](/assets/img/anh1.png)

* B2: Thực hiện lần lượt các câu lệnh sau:
ssh-keygen, nhấn enter cho đến khi hiện ra được như hình dưới là đã tạo được các key (public key & private key) trên máy tính
Lưu ý đường dẫn của các file key được tạo (đã được git thông báo trong quá trình cài đặt – Hình dưới)

![#######](/assets/img/anh2.png)

eval $(ssh-agent)

![#######](/assets/img/anh3.png)

ssh-add path/to/id_rsa ( đường dẫn trong máy đến thư mục id_rsa)

![#######](/assets/img/anh4.png)

- Mở thư mục id_rsa.pub ra, copy toàn bộ dữ liệu trong đó và copy lên Github ( Nhấn chuột phải, chọn Open With- chọn Notepad)
- Truy cập vào Github trên web, mở Settings, Chọn SSH and GPG Keys.
- Trong phần SSH Key chọn New SSH Key. Tại đây nhập Title cho Key và paste dữ liệu ở trong id_rsa.pub vào phần Key.

![#######](/assets/img/anh5.png)

Sau khi tạo xong

![#######](/assets/img/anh6.png)

Kiểm tra cấu hình ssh lên trên máy và github: ssh-T git@github.com**

![#######](/assets/img/anh7.png)

Tạo Github Repository
Tạo 1 repository: Trên giao diện Github, Chọn New Repository
Lưu ý: Phần tên repository phải là duy nhất, không được trùng. Ở đây mình có demo thử một repo

![#######](/assets/img/anh8.png)

![#######](/assets/img/anh9.png)

Đây là giao diện khi bạn tạo xong 1 repo, lưu ý ở phần đường dẫn, chọn SSH nhé

![#######](/assets/img/anh10.png)
* ### Thao tác với Git
Để bắt đầu làm việc , ta vào đúng mục đó và chọn gitbash

![#######](/assets/img/anh11.png)

![#######](/assets/img/anh12.png)

- Đây sẽ là giao diện để chúng ta viết code để push dữ liệu lên trên github với những câu lệnh và luồng xử lý ở bên dưới
* Một số lệnh git cơ bản và luồng xử lý
Luồng hoạt động của git cơ bản (Hình dưới)

![#######](/assets/img/anh13.png)

* ### Các câu lệnh git cơ bản
* Init : Dùng để khởi tạo 1 git repository 1 project mới hoặc đã có. Đây là lệnh đầu tiên cần dùng trong git khi bắt đầu 1 project mới.
* Câu lệnh: git init
* Pull: Kéo các thay đổi từ remote (Github). Sử dụng để kéo code mới nhất từ 1 nhánh(branch) từ remote(Github) về máy (local).
* Câu lệnh: ***git pull ***
* Checkout: Sử dụng lệnh git checkout để chuyển giữa các branch. Chỉ cần nhập git checkout theo sau là tên của branch bạn muốn chuyển đến hoặc nhập git checkout master để trở về branch chính (master branch). Option -b chỉ định tạo 1 nhánh mới.
* Câu lệnh: git checkout –b <tên_nhánh>
* Add : Thêm sự thay đổi của các file/index trong thư mục làm việc. Để thêm toàn bộ các sự thay đổi vào, ta sử dụng ký tự “.”
* Câu lệnh :
- git add .
- git add –m
- git add –u - Commit: commit nghĩa là một action để Git lưu lại một snapshot của các sự thay đổi trong thư mục làm việc. Và các tập tin, thư mục được thay đổi đã phải nằm trong Staging Area. Mỗi lần commit nó sẽ được lưu lại lịch sử chỉnh sửa của code kèm theo tên và địa chỉ email của người commit. Ngoài ra trong Git bạn cũng có thể khôi phục lại tập tin trong lịch sử commit của nó để chia cho một branch khác, vì vậy bạn sẽ dễ dàng khôi phục lại các thay đổi trước đó. - Câu lệnh: git commit –m “message” - Push: được sử dụng để thêm các cam kết bạn đã thực hiện trên kho lưu cục bộ vào một kho lưu trữ từ xa - cùng với git pull, nó cho phép mọi người cộng tác - Câu lệnh: ***git push *** - **Branch**: Các **Branch** (nhánh) đại diện cho các **phiên bản cụ thể** của một kho lưu trữ tách ra từ project chính của bạn. Branch cho phép bạn theo dõi các thay đổi thử nghiệm bạn thực hiện đối với kho lưu trữ và có thể hoàn nguyên về các phiên bản cũ hơn. - Câu lệnh : ***git branch*** ( liệt kê toàn bộ các branch ) - **Status**: Để check trạng thái của những file bạn đã thay đổi trong thư mục làm việc. VD: Tất cả các thay đổi cuối cùng từ lần commit cuối cùng. - Câu lệnh : ***git status*** - Clone: Copy 1 git repository từ remote source. - Câu lệnh: ***git clone ***

* ### Ví dụ demo
* Demo nho nhỏ về git và github nhé. Sau đây mình sẽ push 1 file demo.html được tạo bằng VSCode lên trên Github.

- Đầu tiên chọn file cần push, sử dụng câu lệnh git init để khởi tạo ra file .git

![#######](/assets/img/anh14.png)

Sau đó chúng ta kiểm tra xem file đang ở trạng thái nào.
+ Màu đỏ là chưa sẵn sàng để commit, cần phải thực hiện câu lệnh git add

+ Màu xanh là đã sẵn sàng để commit

![#######](/assets/img/anh15.png)

- Sử dụng câu lệnh git add . để add toàn bộ dữ liệu file và chuyển chúng sang trạng thái có thể commit ( lưu ý là có dấu chấm nhaaaaa)

![#######](/assets/img/anh16.png)

- Khi file đã vào trạng thái để sẵn sang commit thì commit nó thôi :v . Sử dụng lệnh git commit –m “mess” – trong đó mess là lời nhắn của bạn cho cái lần commit đó để lần sau có xem lại thì hiểu được.

![#######](/assets/img/anh17.png) 

- Để kiểm tra những file đã commit sử dụng lệnh git log

![#######](/assets/img/anh18.png)  

- Tuy nhiên ở đây sẽ có vài bạn thắc mắc là sao commit đã thành công rồi mà ở trên mạng vẫn chưa có? Đó là do chúng ta chưa đồng bộ dữ liệu ở trên mạng với ở máy. Để đồng bộ sử dụng câu lệnh:
git remote add origin <git@github.com:phamlinh02/Demo1.git>

git push –u origin master

( Đây cũng là lần duy nhất được làm việc trực tiếp trên nhánh master vì ở trên web chúng ta vẫn chưa có dữ liệu)

![#######](/assets/img/anh19.png)  

![#######](/assets/img/anh20.png)  

- Khi load lại trang thì sẽ trở thành như này. Và chúng ta đã push file lên thành công

![#######](/assets/img/anh21.png) 

- Nhánh master là nhánh chính, nhánh chứa những file đã hoàn thiện, không được chứa những file code bẩn,….. Vì vậy, khi chúng ta có bất kì 1 sự thay đổi nào về file thì khi push lên phải push ở trên một nhánh khác.
- Chuyển từ nhánh master qua 1 nhánh mới bằng câu lệnh git checkout –b <tên_nhánh>

![#######](/assets/img/anh22.png) 

Khi đó trên web chúng ta có thêm 1 nhánh nữa.

![#######](/assets/img/anh23.png) 

File demo ban đầu:

![#######](/assets/img/anh24.png) 

File demo sau khi sửa:

![#######](/assets/img/anh25.png) 

- Khi đó khi ta kiểm tra trạng thái của file thì lại thấy chuyển sang trạng thái chưa sẵn sang để commit. Làm tương tự những bước như trên để đổi về trạng thái sẵn sàng commit và commit chúng lại.

![#######](/assets/img/anh26.png) 

- Chúng ta sẽ push dữ liệu lên trên nhánh vừa tạo đó

![#######](/assets/img/anh27.png) 

- Và đây là dữ liệu chúng ta push lên trên nhánh đó.

![#######](/assets/img/anh28.png) 

- Sau đó sẽ nhấn vào nút Compare & pull request. Nó sẽ hiện ra như hình dưới. Và ở đây chúng ta có thể xem sự thay đổi của file giữa lần đầu commit và lần commit sau đó.

![#######](/assets/img/anh29.png) 

![#######](/assets/img/anh30.png) 

- Copy đường link dẫn đến cho này gửi cho bạn bè, đồng nghiệp,.. để họ vào xem và kiểm tra code nhé.
- Để thêm ý kiến,…. và merge nó về nhánh master về code vừa được push lên thì nhấn vào Create pull request.

![#######](/assets/img/anh31.png) 

- Tại đây chúng ta có thể cmt những ý kiến của bản thân về dòng code trên. Khi nào cảm thấy ok done thì nhấn vào chữ Merge pull request và nhấn vào Confirm request.

- Khi quay trở lại ta sẽ thấy dòng mess ở phần commit ở nhánh master sẽ giống hệt mess ở nhánh phụ mình vừa làm.

![#######](/assets/img/anh32.png) 

- Khi vào xem code sẽ là code gần nhất chúng ta thay đổi.

![#######](/assets/img/anh33.png) 

- Khác so với lần commit đầu là đã có thêm dòng <h1> Goodluck <\h1>

- Trên đây là 1 luồng làm việc cơ bản với Git và Github mà mình biết được, hy vọng nó sẽ là một công cụ tốt để giúp các bạn có thể hoàn thành tốt hành trình học tập của mình tại FPoly và sau này ra trường đi làm nhé . Goodluck

- Người soạn: linhpttph16448 :v (Phạm Thị Thùy Linh)

## The End




