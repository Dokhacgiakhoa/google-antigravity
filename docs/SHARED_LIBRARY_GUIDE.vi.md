# 📚 Hướng Dẫn Về "Thư Viện Dùng Chung" (.shared)

> **.shared** là "Tàng thư các tuyệt kỹ" của Antigravity. Đây là nơi chứa các file mẫu, cấu hình chuẩn và checklist xác thực.

---

## 1. Tại sao cần .shared?

Thay vì mỗi dự án phải setup lại từ đầu (copy file `.eslintrc`, cấu hình lại Docker, viết lại file helper...), Antigravity lưu trữ tất cả **Best Practices** vào đây.
Khi cần, Agent chỉ việc "copy-paste" ra dùng. Nhanh và Chuẩn.

---

## 2. Danh mục 17 Kho Tàng (Modules)

### 🧠 Cốt Lõi & AI
*   **`ai-master`**: Chứa các Prompt mẫu, cấu hình RAG System.
*   **`core`**: Cấu trúc dự án mẫu (Project Structure).

### 🛡️ Bảo Mật & Tuân Thủ
*   **`security-armor`**: Bộ quy tắc chống hack (OWASP), script quét lỗ hổng.
*   **`compliance`**: Mẫu pháp lý (Privacy Policy, GDPR Checklists).
*   **`api-standards`**: Chuẩn thiết kế API (RESTful, Error Codes).

### 🎨 Giao Diện & Trải Nghiệm
*   **`design-system`**: Bộ Token màu sắc, Typography chuẩn.
*   **`ui-ux-pro-max`**: Các hiệu ứng động cao cấp (Motion Presets).
*   **`design-philosophy`**: Triết lý thiết kế (Linear, Magic UI).

### 🏗️ Hạ Tầng & Vận Hành
*   **`infra-blueprints`**: File cấu hình Docker, Terraform, CI/CD.
*   **`database-master`**: Các mẫu Schema DB (E-commerce, Social, SaaS).
*   **`metrics`**: Cấu hình giám sát (Logging, Telemetry).
*   **`resilience-patterns`**: Mẫu thiết kế chịu lỗi (Circuit Breaker).

### 📈 Tăng Trưởng & Chất Lượng
*   **`seo-master`**: Checklist SEO, mẫu JSON-LD.
*   **`testing-master`**: Kịch bản test mẫu (E2E, Unit Test).
*   **`vitals-templates`**: Tiêu chuẩn hiệu năng (Lighthouse Config).
*   **`i18n-master`**: File ngôn ngữ mẫu (Đa ngôn ngữ).
*   **`dx-toolkit`**: Công cụ hỗ trợ Dev (VSCode Settings, Linting).

---

## 3. Cách Sử Dụng

Bạn **không cần** sửa trực tiếp vào thư mục này.
Agent sẽ tự động:
1.  **Đọc** file mẫu từ đây khi bạn yêu cầu tạo tính năng tương ứng.
2.  **Copy** file ra dự án của bạn (nếu chưa có).
3.  **Validate** code của bạn dựa trên checklist trong này (khi chạy `/audit`).

> **Ví dụ**: Khi bạn bảo *"Tạo database cho web bán hàng"*, Agent sẽ vào `database-master`, lấy file `ecommerce.sql` ra làm nền tảng.
