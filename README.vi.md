# Google Antigravity

[English](./README.md) | [Tiếng Việt](./README.vi.md)

> **Bộ Não AI Agent Tối Ưu.**  
> *Bộ sưu tập toàn diện các Quy tắc, Kỹ năng và Quy trình làm việc cho AI Agent hiện đại.*

[![Giấy Phép: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Google Antigravity** là động cơ trí tuệ cốt lõi để xây dựng các AI Agent. Nó cung cấp công cụ CLI (`npx`) giúp bạn tạo lập tức thì các dự án sẵn sàng cho Agent với bộ kỹ năng chuyên nghiệp toàn diện và các quy tắc vận hành chặt chẽ.

| **20+** Master Skills | **15+** Specialist Agents | **11** Quy trình | **13** Shared Modules |
| :---: | :---: | :---: | :---: |
| Bộ Kỹ Năng Chủ Chốt | Tác Nhân Chuyên Gia | Quy trình Chuẩn | Tiêu chuẩn dùng chung |

## 📦 Cài Đặt

### Bắt đầu nhanh

Chạy lệnh sau:

```sh
# 1. Tạo dự án mới (Khuyên dùng)
npx antigravity-ide ten-du-an

# 2. Cài vào thư mục hiện tại (Smart Install)
npx antigravity-ide
```

Hệ thống sẽ tự động cấu hình qua 2 bước:
1.  **Agent Engine**: 
    - **Standard (Node.js)**: Tốc độ cao, loại bỏ các file Python không cần thiết.
    - **Advanced (Python)**: Hỗ trợ Full AI/Data Science (giữ nguyên .py, notebook).
2.  **Lĩnh vực (Industry)**: 
    - Chọn lĩnh vực của bạn (Tài chính, Giáo dục, Vận tải...).
    - Hệ thống sẽ **tải toàn bộ kỹ năng** nhưng tự động cấu hình để **ưu tiên tối đa** cho lĩnh vực đó.

### Bỏ qua câu hỏi (dùng mặc định)

```sh
npx antigravity-ide my-project --skip-prompts
```

### Cập nhật phiên bản mới nhất

Luôn giữ bộ não Antigravity của bạn ở bản mới nhất với các kỹ năng và tính năng mới:

```sh
npx antigravity-ide update
```

## 🤖 Tương thích Đa Mô hình AI

**Google Antigravity** được thiết kế để làm "Bộ não" cho bất kỳ AI Model nào.

- **Google Gemini**: Tận dụng tối đa cửa sổ ngữ cảnh 2M token.
- **Anthropic Claude**: Tối ưu hóa tư duy với bộ quy tắc `.agent`.
- **OpenAI GPT-4**: Chuẩn hóa định dạng kỹ năng.

👉 **Xem [GEMINI.md](./GEMINI.md) để biết hướng dẫn tích hợp chi tiết.**

## 🚀 Tính năng Cốt lõi

### 🧠 **Bộ Não Agent (.agent)**
Trái tim của hệ thống là thư mục `.agent`, chứa:
- **Kỹ năng Chuyên nghiệp**: Các kỹ năng sẵn sàng cho Production (Dev, DevOps, Security, Data).
- **Tương thích Đa nền tảng**: Tối ưu hóa cho **Gemini Pro**, **Claude 3.5 Sonnet**, và **GPT-4o**.
- **Quy tắc Vận hành**: Các giao thức định nghĩa sẵn để Agent hoạt động an toàn và hiệu quả.

### ⚡ **Khởi tạo Dự án (CLI)**
Công cụ CLI thông minh để bootstrap dự án mới:
- **Smart Install**: Tự động phát hiện ngữ cảnh để cài vào thư mục hiện tại hoặc tạo mới.
- **Agent Engines**: **Standard** (Node.js, siêu nhẹ) hoặc **Advanced** (Python, đầy đủ sức mạnh).
- **Domain Intelligence**: Tải toàn bộ kỹ năng chuyên nghiệp nhưng tự động ưu tiên lĩnh vực của bạn (Tài chính, Y tế...) trong cấu hình Agent.
- **Nhanh gọn**: Tối giản, lọc file thông minh theo Engine.

## 📂 Cấu trúc dự án

```text
antigravity-ide/
├── .agent/           # 🧠 BỘ NÃO: Config & 550+ Skills
└── cli/              # ⚡ CLI TOOL: Tạo project
```

## 📚 Tài liệu

- [**README.md**](./README.md) - Phiên bản tiếng Anh
- [**SKILLS.md**](./SKILLS.md) - Danh sách 550+ skills
- [**GEMINI.md**](./GEMINI.md) - Hướng dẫn tích hợp Gemini
- [**COPYRIGHT.md**](./COPYRIGHT.md) - Thông tin bản quyền

---
*Được tạo với ❤️ bởi Dokhacgiakhoa*
