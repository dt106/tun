# Tun — Tech Stack

App thảo luận địa điểm ăn uống dạng mạng xã hội (quán → thread bình luận / món).

## Hiện có (đã bootstrap)

| Layer | Công nghệ | Ghi chú |
| --- | --- | --- |
| Framework | **React Native 0.86** (CLI, không dùng Expo) | `android/` + `ios/` native |
| UI library | **React 19.2** + **lucide-react-native** + **react-native-svg** | icons theo mock |
| Theme | Forest green `#2D4635` + cream `#F5F5F0` | khớp bản vẽ |
| Fonts | Georgia / Snell Roundhand (iOS) · serif/sans (Android) | brand + display |
| Language | **TypeScript 5.8** | strict theo RN preset |
| Bundler | **Metro** | |
| Lint / Format | **ESLint** + **Prettier** | |
| Test | **Jest** + `react-test-renderer` | |
| Safe area | `react-native-safe-area-context` | đã có |

## Frontend (MVP đang dựng)

| Layer | Công nghệ | Lý do |
| --- | --- | --- |
| Navigation | `@react-navigation/native` + native stack + bottom tabs | chuẩn RN, deep link dễ |
| Gestures | `react-native-gesture-handler` | bắt buộc với Navigation |
| Screens | `react-native-screens` | performance native stack |
| State UI | local state + Context nhẹ | MVP chưa cần Redux |
| Server state | **TanStack Query** (giai đoạn sau) | cache feed, like, comment |
| List | `FlashList` (giai đoạn sau) | feed / comment dài |
| Image | RN `Image` → sau dùng `react-native-fast-image` | upload ảnh món |
| Map | **`react-native-maps`** | điểm nổi bật: pin ảnh + hot score + sheet Đang hot |
| Animation | `react-native-reanimated` (phase 2) | like, sheet, transition |

## Backend (đề xuất — chưa gắn)

Chọn **một** stack cho MVP (ưu tiên tốc độ):

| Option | Stack | Phù hợp khi |
| --- | --- | --- |
| **A (khuyến nghị MVP)** | **Supabase** (Postgres + Auth + Storage + Realtime) | cần comment realtime, upload ảnh nhanh |
| B | Firebase (Auth + Firestore + Storage) | quen Google ecosystem |
| C | NestJS / Node + Postgres + S3 | muốn control full, scale lớn sau |

### Model dữ liệu gợi ý (Supabase / Postgres)

- `profiles` — user, avatar, bio, reputation
- `places` — quán (tên, địa chỉ, geo, cover)
- `dishes` — món thuộc quán
- `threads` — thảo luận gắn `place_id` hoặc `dish_id`
- `comments` — nested reply (`parent_id`)
- `likes` / `votes`
- `check_ins` — check-in / trạng thái đông
- `lists` + `list_items` — list “top phở Q.1”

## Auth & Media

| Việc | Công nghệ |
| --- | --- |
| Đăng nhập | Supabase Auth (email / Apple / Google) |
| Ảnh quán & món | Supabase Storage (+ CDN) |
| Push | Firebase Cloud Messaging / Notifee (phase 2) |

## Tooling & chất lượng

| Việc | Công nghệ |
| --- | --- |
| Node | `>= 22.11` |
| iOS deps | CocoaPods (`bundle exec pod install`) |
| CI (sau) | GitHub Actions — lint + typecheck + jest |

## Roadmap kỹ thuật ngắn

1. **MVP UI** — Home feed, Place detail + comments, Dish thread (mock data)
2. **Backend** — Supabase schema + Auth + CRUD place/comment
3. **Social** — like, reply, follow user/place
4. **Discovery** — map, trending, lists, polls
5. **Trust** — reputation, ảnh gốc, anti-spam

## Không dùng (cố ý)

- Expo managed workflow — project đã là RN CLI
- Purple / generic AI UI kit — design riêng (charcoal + sage)
- Redux ngay từ đầu — overhead cho MVP
