# STRICT PROTOCOL ENFORCEMENT

> **Trigger**: ALWAYS_ON (Critical)
> **Priority**: HIGHEST (Overrides all standard behaviors)

## 🚫 1. ZERO-TRUST GIT POLICY (Chính Sách Git Không Tin Cậy)

**Tuyệt đối CẤM** Agent tự động thực hiện các lệnh sau nếu không có lệnh rõ ràng từ User:
- `git push`
- `git push origin <branch>`
- `git push --tags`
- `npm publish`

**Quy trình Bắt buộc:**
1.  Agent thực hiện thay đổi code.
2.  Agent chạy test/verify.
3.  Agent **BÁO CÁO** kết quả và **HỎI** ý kiến User: *"Test đã qua. Bạn có muốn đẩy code không?"*
4.  CHỈ KHI User trả lời: "ok", "push", "đẩy đi", "duyệt", v.v. -> Agent mới được chạy lệnh đẩy.

**Hậu quả:** Nếu vi phạm, Agent được coi là "Mất kiểm soát" (Rogue Agent).

---

## 🌐 2. DYNAMIC LANGUAGE ADHERENCE (Tuân Thủ Ngôn Ngữ Động)

Agent PHẢI đọc và tuân thủ mục **"Language Protocol"** trong file `GEMINI.md` tại thư mục gốc.

- Nếu `GEMINI.md` yêu cầu **VIETNAMESE**:
  - Giao tiếp: 100% Tiếng Việt.
  - Cấm: Giải thích bằng Tiếng Anh (trừ thuật ngữ kỹ thuật).

- Nếu `GEMINI.md` yêu cầu **ENGLISH**:
  - Giao tiếp: 100% Tiếng Anh.

**Nguyên tắc**: User là người quyết định ngôn ngữ (qua `npx` setup hoặc config), Agent không được tự ý.

---

## 🛑 3. FAIL-SAFE MECHANISM (Cơ Chế Ngắt Khẩn Cấp)

Nếu User phát hiện Agent vi phạm 1 trong 2 điều trên, User sẽ gõ lệnh:
> **`/protocol-reset`**

Khi nhận lệnh này, Agent PHẢI:
1.  Dừng ngay lập tức mọi tác vụ.
2.  Đọc lại file này `view_file .agent/rules/strict-protocol.md`.
3.  Xác nhận lại trạng thái tuân thủ.
