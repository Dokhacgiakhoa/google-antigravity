# 📚 Hướng Dẫn Về "Thư Viện Dùng Chung" (.shared)

> **.shared** là "Tàng thư các tuyệt kỹ" của Antigravity. Đây là nơi chứa các file mẫu, cấu hình chuẩn và checklist xác thực.

---

## 1. Tại sao cần .shared?

Thay vì mỗi dự án phải setup lại từ đầu (copy file `.eslintrc`, cấu hình lại Docker, viết lại file helper...), Antigravity lưu trữ tất cả **Best Practices** vào đây.
Khi cần, Agent chỉ việc "copy-paste" ra dùng. Nhanh và Chuẩn.

---

## 2. Danh mục 17 Kho Tàng (Modules) v4.0

### 🏢 Nhóm Cốt Lõi (Core DNA)
*   **`design-philosophy`**: Triết lý thiết kế (Linear, Magic UI).
*   **`dx-toolkit`**: Công cụ hỗ trợ Dev (VSCode Settings, Linting).
*   **`metrics`**: Cấu hình giám sát (Logging, Telemetry).
*   **`vitals-templates`**: Tiêu chuẩn hiệu năng (Lighthouse Config).

### 🛠️ Nhóm Kỹ Thuật (Technical Stack)
*   **`ai-master`**: Prompt mẫu, cấu hình RAG System.
*   **`api-standards`**: Chuẩn thiết kế API (RESTful, Error Codes).
*   **`database-master`**: Các mẫu Schema DB (E-commerce, SaaS).
*   **`design-system`**: Bộ Token màu sắc, Typography chuẩn.
*   **`i18n-master`**: Hệ thống đa ngôn ngữ.
*   **`resilience-patterns`**: Mẫu thiết kế chịu lỗi (Circuit Breaker).
*   **`security-armor`**: Bộ quy tắc chống hack (OWASP).
*   **`seo-master`**: Checklist SEO, mẫu JSON-LD.
*   **`testing-master`**: Chiến lược kiểm thử toàn diện.
*   **`ui-ux-pro-max`**: Hiệu ứng động cao cấp.

### 🌐 Nhóm Chuyên Biệt (Vertical Blueprints)
*   **`compliance`**: Mẫu pháp lý (GDPR, HIPAA).
*   **`domain-blueprints`**: Kiến trúc mẫu theo từng ngành nghề.
*   **`infra-blueprints`**: Cấu hình hạ tầng (Docker, Terraform).

---

## 3. Cách Sử Dụng

Bạn **không cần** sửa trực tiếp vào thư mục này.
Agent sẽ tự động:
1.  **Đọc** file mẫu từ đây khi bạn yêu cầu tạo tính năng tương ứng.
2.  **Copy** file ra dự án của bạn (nếu chưa có).
3.  **Validate** code của bạn dựa trên checklist trong này (khi chạy `/audit`).

> **Ví dụ**: Khi bạn bảo *"Tạo database cho web bán hàng"*, Agent sẽ vào `database-master`, lấy file `ecommerce.sql` ra làm nền tảng.
