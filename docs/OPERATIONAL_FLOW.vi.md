# Hướng dẫn Phối hợp Chuyên sâu: Rules (@) vs Workflows (/)

> **Triết lý Antigravity**:
> - **/ (Workflow)**: Là **Tổng tư lệnh** (Ra lệnh bắt đầu chiến dịch).
> - **@ (Rule)**: Là **Tham mưu trưởng** (Cung cấp chiến thuật chuyên môn).

Tài liệu này cung cấp **6 Kịch bản Thực chiến** cho các quy mô và lĩnh vực khác nhau để bạn hình dung rõ cách phối hợp.

---

## 1. Kịch bản 1: Portfolio Cá nhân (Freelancer/Dev) 🎨
**Mục tiêu**: Làm web giới thiệu bản thân, blog, tối ưu SEO để kiếm việc.
**Quy mô**: Personal | **Lĩnh vực**: Personal Portfolio.

| Bước | User gõ lệnh (Prompt) | Giải thích cơ chế |
| :--- | :--- | :--- |
| **1. Khởi tạo** | `/create` | Chọn template "Personal", Industry "Personal". AI tự cài `@seo`, `@ui-ux-pro-max`. |
| **2. Kế hoạch** | `/brainstorm` | AI gợi ý các section: About Me, Skills, Projects, Blog. |
| **3. Giao diện** | "Tạo Hero section thật ấn tượng, hiệu ứng gõ chữ" <br> `Context: @ui-ux-pro-max` | AI dùng thư viện animation xịn, thiết kế tối giản, dark mode. |
| **4. Nội dung** | "Viết code trang Blog hỗ trợ Markdown" <br> `Context: @frontend` | AI dùng Next.js MDX, tối ưu load bài viết. |
| **5. Tối ưu** | `/seo` | AI quét thẻ meta, sitemap, check tốc độ tải trang (Lighthouse). |
| **6. Phát hành** | `/deploy` | Đẩy thẳng lên Vercel miễn phí. |

---

## 2. Kịch bản 2: E-commerce Startup (SME) 🛒
**Mục tiêu**: Sàn bán lẻ thời trang, có giỏ hàng, thanh toán.
**Quy mô**: SME | **Lĩnh vực**: F&B / Retail.

| Bước | User gõ lệnh (Prompt) | Giải thích cơ chế |
| :--- | :--- | :--- |
| **1. Khởi tạo** | `/create` | Chọn "SME", Industry "F&B/Retail". AI cài `@database`, `@backend` chuẩn. |
| **2. Cấu trúc DB** | "Thiết kế Schema cho Product và Order" <br> `Context: @database-architect` | AI tạo bảng SQL chuẩn 3NF, có indexing tối ưu tra cứu. |
| **3. API** | "Viết API đặt hàng (Checkout)" <br> `Context: @backend` | AI viết API Node.js, xử lý transaction an toàn. |
| **4. Tích hợp** | "Gắn cổng thanh toán Stripe/Momo" <br> `Context: @security` | AI xử lý token thanh toán, tuyệt đối không lưu thẻ tín dụng. |
| **5. Giao diện** | `/enhance` -> "Thêm hiệu ứng bay vào giỏ hàng" | Cập nhật UI nhỏ mà không làm hỏng logic cũ. |
| **6. Vận hành** | `/monitor` | Cài đặt log theo dõi đơn hàng lỗi. |

---

## 3. Kịch bản 3: Ngân hàng số / Fintech (Enterprise) �
**Mục tiêu**: App ví điện tử, yêu cầu bảo mật tuyệt đối.
**Quy mô**: Enterprise | **Lĩnh vực**: Finance.

| Bước | User gõ lệnh (Prompt) | Giải thích cơ chế |
| :--- | :--- | :--- |
| **1. Khởi tạo** | `/create` | Chọn "Enterprise", Industry "Finance". AI kích hoạt `@security`, `@compliance`, `@audit`. |
| **2. Bảo mật** | `/plan` -> "Lập kế hoạch kiến trúc Zero Trust" | AI đề xuất kiến trúc chia tách network, mã hóa 2 lớp. |
| **3. Core Auth** | "Code module đăng nhập xác thực 2 bước (2FA)" <br> `Context: @security @backend` | AI dùng thư viện Auth chuẩn, hash password bằng Argon2/Bcrypt. |
| **4. Kiểm thử** | `/test` | Chạy bộ test chuyên sâu (E2E) giả lập tấn công (Penetration Test). |
| **5. Rà soát** | `/audit` <br> `Context: @compliance` | Quét mã nguồn xem có vi phạm chuẩn GDPR/PCI-DSS không. |
| **6. Bàn giao** | `/document` | Viết tài liệu kỹ thuật chi tiết cho team vận hành. |

---

## 4. Kịch bản 4: Mobile Game 2D (Indie Game) 🎮
**Mục tiêu**: Game xếp hình đơn giản, chạy mượt trên điện thoại.
**Quy mô**: Personal/SME | **Lĩnh vực**: Game/Mobile.

| Bước | User gõ lệnh (Prompt) | Giải thích cơ chế |
| :--- | :--- | :--- |
| **1. Khởi tạo** | `/create` | Chọn Industry "Mobile & Game". AI cài `@mobile`, `@performance`. |
| **2. Logic Game** | "Viết hàm xử lý va chạm và tính điểm" <br> `Context: @backend` | AI viết logic tối ưu thuật toán, tránh lag. |
| **3. Đồ họa** | "Tạo màn hình Menu chính có nhạc nền" <br> `Context: @ui-ux-pro-max @mobile` | AI thiết kế UI to rõ cho ngón tay chạm (Touch targets). |
| **4. Hiệu năng** | `/debug` -> "Game bị giật khi nổ hiệu ứng" <br> `Context: @performance` | AI soi heap memory, tối ưu lại vòng lặp render. |
| **5. Đa ngữ** | `/plan` -> "Thêm tiếng Việt và Anh" <br> `Context: @i18n` | Tách string ra file json để dịch. |

---

## 5. Kịch bản 5: CRM Nội bộ Doanh nghiệp (Corporate) 🏢
**Mục tiêu**: Quản lý nhân sự, chấm công, dashboard báo cáo.
**Quy mô**: SME | **Lĩnh vực**: Other (Corporate Tool).

| Bước | User gõ lệnh (Prompt) | Giải thích cơ chế |
| :--- | :--- | :--- |
| **1. Khởi tạo** | `/create` | Chọn Template "Dashboard". |
| **2. Cấu trúc** | `/plan` -> "Sơ đồ module Nhân viên và Phòng ban" | AI vẽ sơ đồ quan hệ thực thể (ERD). |
| **3. Import** | "Viết script import danh sách từ Excel" <br> `Context: @backend @data` | AI viết script Python/Node xử lý file lớn an toàn. |
| **4. Dashboard** | "Vẽ biểu đồ tròn thống kê nhân sự" <br> `Context: @frontend` | Dùng thư viện Chart.js/Recharts. |
| **5. Hướng dẫn** | `/onboard` | Tạo tài liệu hướng dẫn nhân viên mới cách dùng tool. |

---

## 6. Kịch bản 6: AI Research Lab (Advanced) 🧠
**Mục tiêu**: Xây dựng mô hình dự đoán, xử lý dữ liệu lớn.
**Quy mô**: Enterprise | **Lĩnh vực**: AI/Data.

| Bước | User gõ lệnh (Prompt) | Giải thích cơ chế |
| :--- | :--- | :--- |
| **1. Khởi tạo** | `/create` | **Chọn Engine: Advanced (Python)**. AI cài `@ai-engineer`, `@data`. |
| **2. Môi trường** | `/check` (Tính năng mới) | AI nhắc cài Python 3.13, CUDA nếu cần. |
| **3. Dữ liệu** | "Viết pipeline làm sạch dữ liệu raw" <br> `Context: @data` | AI viết Pandas/NumPy script chau chuốt. |
| **4. Model** | "Dựng khung mô hình RAG với LangChain" <br> `Context: @ai-engineer` | AI setup Vector DB, Embeddings flow. |
| **5. Tối ưu** | "Giảm thời gian train model" <br> `Context: @performance` | AI gợi ý kỹ thuật lượng tử hóa (Quantization) hoặc Cache. |

---

## ⚡ Tổng kết Chiến thuật

*   Dùng **/ (Workflow)** khi bạn muốn chuyển trạng thái dự án (Bắt đầu -> Code -> Test -> Release).
*   Dùng **@ (Rule)** khi bạn muốn "mai mối" đúng chuyên gia cho công việc (Việc UI gọi ông Frontend, việc DB gọi ông Database).

> **Mẹo**: Nếu bạn lười gõ `@`, cũng không sao. Hệ thống Antigravity đủ thông minh để tự đoán dựa trên từ khóa (ví dụ nói "sửa CSS" nó tự hiểu là `@frontend`). Nhưng gõ rõ `@` thì AI sẽ làm chính xác và nghiêm túc hơn 200%.
