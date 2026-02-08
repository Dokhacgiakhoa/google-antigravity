# Từ điển Hệ thống Antigravity (System Glossary) 📖

Đây là tài liệu tra cứu **toàn diện** tất cả các Thực thể (Entity), Lệnh (Command), và Từ khóa (Keyword) có trong hệ thống Antigravity.
Hãy dùng các từ khóa này để giao tiếp chính xác với AI.

---

## 1. Workflows (Quy trình) - Ký hiệu `/`
*Gõ lệnh này để KHỞI ĐỘNG một chuỗi hành động.*

| Lệnh | Ý nghĩa | Khi nào dùng? |
| :--- | :--- | :--- |
| `/audit` | **Kiểm toán chất lượng** | Trước khi bàn giao, cần rà soát lỗi bảo mật/hiệu năng. |
| `/brainstorm` | **Bão não ý tưởng** | Bí ý tưởng, cần AI gợi ý giải pháp/kiến trúc. |
| `/create` | **Khởi tạo tính năng** | Xây dựng module mới (FE + BE + DB). |
| `/debug` | **Gỡ lỗi** | Phân tích log lỗi và tìm nguyên nhân. |
| `/deploy` | **Triển khai** | Đẩy ứng dụng lên Server/Cloud. |
| `/document` | **Viết tài liệu** | Tự động viết README, API Docs từ code. |
| `/enhance` | **Nâng cấp** | Thay đổi UI hoặc tối ưu logic nhỏ. |
| `/monitor` | **Giám sát** | Setup công cụ theo dõi hệ thống. |
| `/onboard` | **Dẫn nhập** | Hướng dẫn cho thành viên mới gia nhập team. |
| `/orchestrate` | **Điều phối** | Phối hợp nhiều Agent cho task lớn. |
| `/plan` | **Lập kế hoạch** | Phân tích yêu cầu và thiết kế giải pháp. |
| `/preview` | **Xem trước** | Chạy thử sản phẩm trong sandbox. |
| `/security` | **Quét bảo mật** | Kiểm tra lỗ hổng chuyên sâu. |
| `/seo` | **Tối ưu tìm kiếm** | Đưa web lên Top Search Google/AI. |
| `/status` | **Trạng thái** | Dashboard tiến độ thực hiện task. |
| `/test` | **Kiểm thử** | Chạy Unit Test, E2E Test. |
| `/ui-ux-pro-max`| **Giao diện Đỉnh cao**| Thiết kế UI Premium (Magic UI). |
| `/update-docs` | **Đồng bộ tài liệu** | Tự động cập nhật /docs sau khi thay đổi code. |
| `/release-version`| **Phát hành bản mới**| Chốt phiên bản, update stats và chuẩn bị release. |
| `/api` | **Master API** | Thiết kế chuẩn OpenAPI 3.1. |
| `/realtime` | **Thời gian thực** | Socket.io, WebRTC, SSE. |
| `/compliance` | **Pháp lý** | Kiểm tra chuẩn GDPR/HIPAA. |
| `/mobile` | **Di động** | Phát triển Native App & Optimization. |
| `/portfolio` | **Trang cá nhân** | Xây dựng Landing Page cá nhân. |
| `/blog` | **Hệ thống Blog** | Xây dựng module tin tức. |
| `/visually` | **Trực quan hóa** | Vẽ biểu đồ, sơ đồ luồng. |
| `/explain` | **Giải thích code** | Tìm hiểu logic sâu của từng module. |
| `/update` | **Cập nhật Agent** | Tải bộ não mới nhất cho Agent. |
| `/log-error` | **Nhật ký lỗi** | Tự động ghi lỗi vào ERRORS.md. |

---

## 2. Rules (Luật/Ngữ cảnh) - Ký hiệu `@`
*Gõ từ khóa này (hoặc nói tên) để GÁN NGỮ CẢNH chuyên môn cho AI.*

| Tag Rule | Chuyên môn | Nhiệm vụ |
| :--- | :--- | :--- |
| `@backend` | kĩ sư Backend | Viết API, xử lý Logic Server, Database. |
| `@frontend` | Kỹ sư Frontend | Viết Giao diện, CSS, Animation, React/Vue. |
| `@security` | Chuyên gia Bảo mật | Mã hóa, Auth, chống Hack. |
| `@debug` | Chuyên gia Gỡ lỗi | Phân tích Log, tìm nguyên nhân lỗi. |
| `@business` | Chuyên gia BA | Phân tích nghiệp vụ, quy trình doanh nghiệp. |
| `@compliance` | Luật sư Compliance | Kiểm tra tuân thủ GDPR, HIPAA, PCI-DSS. |
| `@architecture`| Kiến trúc sư | Review sơ đồ hệ thống, Clean Code. |
| `@gemini` | **Core System** | Luật gốc của hệ thống (file cấu hình chính). |

---

## 3. Agents (Những nhân cách AI)
*Mỗi dự án v4.0 có 22 vai diễn chuyên gia:*

*   **Orchestrator**: Nhạc trưởng điều phối đa agent.
*   **Project Planner**: Lập kế hoạch & quản lý Backlog.
*   **Product Manager**: Quản lý sản phẩm & lộ trình.
*   **Product Owner**: Đại diện giá trị nghiệp vụ.
*   **Backend Specialist**: Lập trình viên phía máy chủ.
*   **Frontend Specialist**: Kiến trúc sư giao diện.
*   **Mobile Developer**: Phát triển ứng dụng di động.
*   **Game Developer**: Phát triển Game & Logic đồ họa.
*   **Cloud Architect**: Kiến trúc sư hạ tầng đám mây.
*   **DevOps Engineer**: Kỹ sư vận hành & CI/CD.
*   **Database Architect**: Chuyên gia thiết kế dữ liệu.
*   **Security Auditor**: Chuyên gia kiểm tra bảo mật.
*   **Penetration Tester**: Hacker mũ trắng (Pentest).
*   **Quality Inspector**: Giám sát tiêu chuẩn chất lượng.
*   **QA Automation Engineer**: Kỹ sư kiểm thử tự động.
*   **Test Engineer**: Kỹ sư kiểm tra tính năng.
*   **Performance Optimizer**: Chuyên gia tối ưu tốc độ.
*   **SEO Specialist**: Chuyên gia tối ưu tìm kiếm.
*   **Documentation Writer**: Chuyên gia viết tài liệu.
*   **Explorer Agent**: Agent nghiên cứu & thám hiểm code.
*   **Code Archaeologist**: Chuyên gia phân tích code cũ.
*   **Debugger**: Thám tử săn lỗi (Sherlock Holmes).

---

## 4. Master Skills (Kỹ năng Lõi)
*550+ Skills, đây là những skill "trùm cuối" hay dùng nhất.*

| Skill Name | Công dụng |
| :--- | :--- |
| `ai-engineer` | Làm app AI, Chatbot, RAG. |
| `api-documenter` | Viết tài liệu API chuẩn OpenAPI. |
| `cloud-architect-master` | Thiết kế hệ thống Cloud đa nền tảng. |
| `database-migration` | Chuyên gia chuyển đổi Database an toàn. |
| `deployment-engineer` | Chuyên gia CI/CD và Docker. |
| `full-stack-scaffold` | Dựng dự án chuẩn chỉnh từ đầu. |
| `modern-web-architect` | Kiến trúc Web hiện đại (Next.js/React). |
| `security-auditor` | Kiểm tra lỗ hổng bảo mật. |
| `seo-expert-kit` | Bộ công cụ SEO toàn diện. |
| `tdd-master-workflow` | Quy trình Test-Driven Development. |
| ... | *(Và hàng trăm skill khác trong folder `.agent/skills`)* |

---

## 5. Shared Modules (Thư viện dùng chung)
*Các module tiêu chuẩn Enterprise được tự động nạp.*

*   `ai-master`: Chuẩn mực AI.
*   `api-standards`: Chuẩn mực thiết kế API.
*   `compliance`: Các quy định pháp lý.
*   `database-master`: Chuẩn thiết kế Database.
*   `design-system`: Hệ thống thiết kế UI.
*   `domain-blueprints`: Kiến trúc mẫu theo ngành.
*   `i18n-master`: Đa ngôn ngữ.
*   `infra-blueprints`: Mẫu hạ tầng (Terraform).
*   `metrics`: Đo đạc chỉ số.
*   `security-armor`: Áo giáp bảo mật.
*   `testing-master`: Chiến lược kiểm thử.
*   `ui-ux-pro-max`: Giao diện cao cấp.

---

> **Mẹo**: Bạn không cần nhớ hết.
> *   Cần hành động -> Gõ `/` rồi Tab.
> *   Cần chuyên môn -> Gõ `@` rồi Tab (hoặc mô tả "gọi ông backend ra đây").
