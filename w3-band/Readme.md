# giới thiệu về dự án
   -  Viết lại 1 trang web có mẫu sẵn
   -  Link nguồn: [W3SChool Band](https://www.w3schools.com/w3css/tryw3css_templates_band.htm)
   -  Đây là 1 trang web về ban nhạc.

# Các bước làm dự án

- **Các bước thực hiện một công việc**
  - Từ ngoài vào trong
  - từ trên xuống dưới
  - *Từ tổng quát đến chi tiết*

1. Phân tích
   - Đây là một trang web dạng onepage 
   - giới thiệu về 1 band nhạc
   - về content gồm nhiều nội dung: 
     - Content đầu tiên là slider chia sẻ hình ảnh ban nhạc các khoảnh khắc đại loại thế
     - Giới thiệu về Band nhạc các thành viên trong ban nhạc
     - Giới thiệu về lịch trình của họ và bán vé
     - Liên lạc với họ
     - Footer là bản đồ đại loại thế
2. Dựng base ( xây dựng)
   1.  Header
       1.  Navigation
       2.  Subnavigation
   2. Slider:
   3. Contennt
      1. About
      2. Tour
      3. Contact
      4. Image
   4. Footer
3. Xây dựng từng thành phần theo phân tích
   1. Các bước phân tích chi tiết: 
      1. Vị trí
      2. Kích thước
      3. màu sắc
      4. Kiểu dáng
4. Hoàn thiện


# Các bước làm chi tiết

1. Reset CSS
2. Tạo ra khung sườn ( các block của các thành phần )
3. Làm Nav
4. Làm Sub Nav
   1. Sử dụng Icon từ [ThemifyIcon](https://themify.me/themify-icons)
5. Làm Slider: 
   1. Sử dụng kỹ thuật background-image
   2. Đặc điểm kỹ thuật padding thì chỉ sử dụng vùng padding. Các vùng khác phải được nâng lên 1 layer khác
6. Làm about
   1. Phân tích điểm chung giữa các content
   2. Heading-content; 
      1. Lưu ý khoảng cách giữa các chữ
      2. độ dày nét (letter-spacing)
   3. Sologan:
      1. Chữ nghiên, màu chữ (Có thể sử dụng `opacity`)
   4. About:
      1. Lưu ý căn chữ kiểu justify (căn đều đoạn văn)
      2. Khoảng cách giữa 2 dòng chữ (line Height TA =1.4 TV = 1.6 (đơn vị là REM ( theo cái ji đó VD như cha hay sao ấy)))
   5. Members
      1. Phân tích `div`
      2. 3 div đứng hàng nganng (sử dungj float)
      3. margin
      4. Ảnh bo góc
7. Tour Ticket
   1. Phân tích
   2. vì Chữ xuất hiện nhiều nên ta nên tạo ra 1 class chữ trắng luôn
   3. Places.
   4. MODAL
   5. OVERLAY
8. Responsive

# Tablet Responsive
- Cơ bản vânx thế. Chỉ có lề trái phải nhỏ hơn
- Chúng ta sử dụng fixed kích thước width = 800 nên lớn hơn kích thước của tablet

# Mobile Responsive
- Ẩn bớt menu và thêm phím bấm tạo ra menu
- Tạo ra một icon mới và xóa icon cũ
- Đôi khi fixed chiều cao của header cũng có cái hay. Ta có thể sử dụng overflow để ẩn bớt 
- Viết javascript để mở và đóng menu
- Khi ấn vào 1 element trên menu thì nó trôi đến đúng vị trí nhưng phải ẩn bỏ menu đi
- Khi bấm vào menu thì ko nhất thiết phải bấm vào hẳn chữ (trên mobile là thế)
- cần chú ý đến khi chưa xổ ra menu thì ko nên chơi kiểu label như thế
- sub menu cần to hơn và chỉ rõ là submenu của ai
- 

## Lỗi thường gặp
   - nên sử dụng `max-width` đi kèm với `width` để phù hợp tất cả các màn hình
   - `margin-left, margin-right` có giá trị âm, khi màn hình nhỏ thì nó lại kéo màn hình sang 2 bên để tạo thêm màn hình. Như vậy. Ta nên cho phần tử cha lớn nhất padding ngược lại để nó xóa bớt (khi nó màn hình PC nó to thì ko có ji xảy ra cả. Chỉ khi thu nhỏ vừa = kích thước mới thấy được lợi hại) 
     - Trong the Band thì bản thân thằng Member nó ko bám sát  (content) nên chả có ji xảy ra cả
     - Hoặc sử dụng `overFlow= hidden` thì những gì chui ra ngoài thì ẩn đi
   - Khi viết JS cho mobile riêng thì cũng cần lưu ý đến PC cũng bị ảnh hưởng 
     -  Ở đây cụ thể là nav-bar đang bị ảnh hưởng
   - Khi viết Function onlick thì nên click cho thằng hover và thẻ cha. Nếu ko vẫn hover nhưng ko có ji xảy ra là do click JS với CSS ko trùng khớp (Tốt nhất là ko trung trạm ji hết) 

- Cố định chiều cao của phần tử cha. 
  - Khi phần tử con tăng lên nhưng phần tử cha ko thể bao bọc nó vào được nữa
  
## UX 

   - Khi sử dụng nên cho các button full màn hình
   - Các input cũng full
   - Nav full ko cần ấn vào chữ
   - label cũng rất cần thiết
   - Tăng kích thước `button` , `input` , `icon`thật cũng rất quan trọng (Ít nhất cũng 48px)
   - Số điện thoại và Mail của thể sử dụng thẻ của HTML để gửi link đi
   - Nên cho text Shadow khi trên banner cho dễ nhìn

# Kỹ thuật
   - Sử dungj Background-image : (Muốn kích thước chiều cao luono luôn bằng 1 nửa kích thước chiều ngang (kể cả các kích thước màn hình khác nhau))
     - padding-top: ?% ( nếu sử dụng ?% thì nó có nghĩa là ?% ngang của chính nó)
   - Căn giữa everyThing (Khi đã sử dụng Position)
     - left:50%; (đến đây thì lề trái của ele đã ra giữa)
     - transform:translate (-50%) (Lùi ele lấy tâm của nó làm gốc tọa độ)
     - text-align (căn lề giống word)
   -  full viền rồi text align 
   -  Clear Float
   -  Kỹ thuật căn giữa các ảnh thành 1 hàng  (Có 3 ảnh trở lên)
   -  Khi sử dụng các button = icon. nên sử dụng padding. Để có thể click chuột dễ dàng
   -  `max-width` :mạnh hơn `width` nó sẽ ghi đè khi cần thiết
-  Float mà ko cùng kích thước nó tự đẩy xuống hàng

## Phát hiện lỗi
- Có một khoảng cách nhỏ giữa các List-style-type
- Khi làm Slider nếu sử dụng thẻ img, thì khi chuyển ảnh có thể ảnh không cùng kích thước đãn tới ảnh bị nhấp nhô => Sử dụng  background-image
- Khi sử dụng float vs các thẻ con. THì thẻ cha sẽ bị co lại (vì nó bị chui ra 1 layer khác) (sử dụng overflow=hidden), hoặc sử dụng clear float
- Khi sử dụng `margin` thì ko thể đôr `background-color` được
- Bình thường `img` sẽ có display là `inline` khiến cho nó giống như text có khoảng hở bên dưới, Nếu ta sửa nó thành `block` để nó bao trùm thì sẽ ko bị hở ra ji cả 
- `Inline` được `padding` thì nó vẫn va chạm với thằng bên trên (chỉ block mới chiếm diện tích)
- `Margin` phần tử con ko làm tăng kích thước phần tử cha. thậm chí nó còn đè vào trong padding của phần tử cha
- Nên đặt `witdh` cho icon để tạo khoảng cách thay vì margin. Vì đôi khi icon có kích thước không bằng nhau
- Khi hover trên mobile thì nó chuyển thành active. Sẽ rất dễ xảy ra lỗi. Ta nên sửa thành onClick thì hơn. Bởi vì nó có thể missClick (nó sẽ bỏ hover trước -> sắp xếp lại bố cục -> click)