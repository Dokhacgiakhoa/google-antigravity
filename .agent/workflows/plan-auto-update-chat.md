# Plan: Tích hợp chức năng Kiểm tra Cập nhật vào Chat AI

Để AI có thể tự động kiểm tra và xử lý yêu cầu cập nhật từ người dùng, chúng ta sẽ thực hiện các bước sau:

## 📋 Danh mục công việc

1. **Tạo Script Công cụ (`cli/lib/check-version.js`)**:
   - Viết một script Node.js trả về thông tin phiên bản (hiện tại và mới nhất) dưới dạng JSON.
   - AI sẽ dùng `run_command` để chạy script này để lấy dữ liệu.

2. **Cập nhật Quy tắc (`.agent/rules/compliance.md` hoặc `security.md`)**:
   - Bổ sung chỉ dẫn cho Agent: Khi thấy người dùng hỏi về "phiên bản", "cập nhật", "update", "bản mới nhất", hãy chạy lệnh kiểm tra trước.

3. **Tạo Workflow `/update` (`.agent/workflows/update.md`)**:
   - Định nghĩa quy trình: Kiểm tra -> Thông báo kết quả -> Hỏi xác nhận -> Thực hiện lệnh `npm install -g antigravity-ide@latest`.

4. **Tích hợp vào `SKILLS.md`**:
   - Đảm bảo AI biết nó có khả năng này.

## 🛡️ Pre-flight Checklist

- [ ] **Dependency Check**: Sử dụng `update-notifier` (đã có trong package.json).
- [ ] **Null/Undefined Safety**: Xử lý trường hợp không có kết nối mạng (timeout).
- [ ] **Integration Impact**: Không làm gián đoạn luồng CLI hiện có.

---
**Bạn có đồng ý với hướng tiếp cận này không?**
