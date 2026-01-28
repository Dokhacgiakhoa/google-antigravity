# Antigravity IDE

[English](./README.md) | [Tiếng Việt](./README.vi.md)

> **Framework AI Agent Tối Ưu.**  
> *Xây dựng trên nền tảng vững chắc của [Antigravity Kit](https://github.com/vudovn/antigravity-kit).*

[![Giấy Phép: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Nâng Cấp](https://img.shields.io/badge/Antigravity-Enhanced-blueviolet)]()

**Google Antigravity** là phiên bản "siêu nạp" của Antigravity Kit gốc. Nó biến một Agent template cơ bản thành một hệ sinh thái khổng lồ, sẵn sàng cho production, để xây dựng các AI Agent tiên tiến.

## 📦 Cài Đặt

### Bắt Đầu Nhanh (Khuyến Nghị)

Tạo dự án AI Agent mới ngay lập tức:

```bash
npx antigravity-ide create my-agent-project
```

Làm theo hướng dẫn tương tác để tùy chỉnh:
- **Template**: Minimal / Standard / Full
- **Quy Tắc Agent**: Strict / Balanced / Flexible  
- **Kỹ Năng**: Chọn từ 6 danh mục (webdev, mobile, devops, security, ai, data)
- **Workflows**: Git, Testing, Deployment, Code Review
- **Dashboard**: Giao diện Web Next.js (tùy chọn)

### Bỏ Qua Hỏi Đáp (Dùng Mặc Định)

```bash
npx antigravity-ide create my-project --skip-prompts
```

### Cài Đặt Toàn Cục

```bash
npm install -g antigravity-ide
antigravity-ide create my-project
```

## 🚀 Điểm Nổi Bật Nâng Cấp

Phiên bản "Pro Max" này bao gồm các cải tiến đáng kể:

1.  **🧠 Trung Tâm Kỹ Năng Khổng Lồ**: Tích hợp **2.500+ Kỹ Năng** từ `antigravity-awesome-skills`. Agent của bạn giờ đây biết mọi thứ từ *Kiến Trúc Kubernetes Nâng Cao* đến *Viết Bản Sao Marketing Viral* ngay từ đầu.
2.  **🧪 Phòng Thí Nghiệm Nghiên Cứu**: Bao gồm thư mục `lab/` với các tính năng thử nghiệm, giao thức agent "Beta", và các mẫu thiết kế tiên tiến từ `antigravity-lab`.
3.  **✅ Bộ Kiểm Thử Hoàn Chỉnh**: Tích hợp đầy đủ `antigravity-test` trong `test/` để đánh giá nghiêm ngặt agent và kiểm tra hồi quy.
4.  **⚡ Giao Diện Web Tối Ưu**: Dashboard Next.js được cấu hình sẵn trong `web/` để quản lý, trực quan hóa và điều phối các agent của bạn.

## 📂 Cấu Trúc Dự Án

```text
antigravity-ide/
├── .agent/           # 🧠 BỘ NÃO: Cấu hình & 2500+ Kỹ Năng (Nâng Cấp)
├── web/              # 🖥️ GIAO DIỆN: Dashboard Next.js
├── lab/              # 🧪 PHÒNG THÍ NGHIỆM: Tính Năng Thử Nghiệm
├── test/             # 🛡️ BẢO VỆ: Kiểm Thử & Benchmark
└── COPYRIGHT.md      # 📜 Thông tin bản quyền (Tiếng Việt)
```

## 🛠️ Bắt Đầu Nhanh

Dự án này là một monorepo. Để khởi động giao diện chính:

```bash
cd web
npm install
npm run dev
```

Truy cập `http://localhost:3000` để xem Dashboard.

## 📚 Tài Liệu

- [**README.md**](./README.md) - Phiên bản tiếng Anh
- [**COPYRIGHT.md**](./COPYRIGHT.md) - Thông tin bản quyền chi tiết
- [**AGENT_FLOW.vi.md**](./AGENT_FLOW.vi.md) - Hướng dẫn kỹ thuật Agent (Sắp có)
- [**CHANGELOG.vi.md**](./CHANGELOG.vi.md) - Lịch sử thay đổi (Sắp có)

## 📜 Ghi Nhận & Giấy Phép

Dự án này tuân theo Giấy Phép MIT.

*   Dự án này là sản phẩm phái sinh từ [Antigravity Kit](https://github.com/vudovn/antigravity-kit) của [vudovn](https://github.com/vudovn).
*   Xem [LICENSE](./LICENSE) để biết thông tin chi tiết về giấy phép bên thứ ba.
*   Xem [COPYRIGHT.md](./COPYRIGHT.md) để đọc giải thích bằng tiếng Việt.

---
*Được tạo với ❤️ bởi Dokhacgiakhoa*
