import { siteConfig } from './lib/site-config'

export default siteConfig({
  // -------------------------------------------------------------------------
  // CẤU HÌNH CHÍNH (QUAN TRỌNG NHẤT)
  // -------------------------------------------------------------------------

  // ID của trang Notion gốc (Hãy đảm bảo đây là ID trang của BẠN)
  rootNotionPageId: '7875426197cf461698809def95960ebf',

  // Để null
  rootNotionSpaceId: null,

  // Thông tin website
  name: 'CST Marine',
  domain: 'cst.vn',
  author: 'CST Team',
  description: 'Chuyên trang thu thập và phân tích tin tức về khoa học và công nghệ bảo tồn đa dạng sinh học biển.',

  // -------------------------------------------------------------------------
  // MẠNG XÃ HỘI (Nếu không có thì để null, đừng xóa dòng)
  // -------------------------------------------------------------------------
  twitter: null,
  github: null,
  linkedin: null,
  // mastodon: '#', 
  // newsletter: '#',
  // youtube: '#',

  // -------------------------------------------------------------------------
  // CẤU HÌNH HÌNH ẢNH & GIAO DIỆN
  // -------------------------------------------------------------------------
  
  // Icon và Cover mặc định (để null sẽ lấy từ Notion)
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // Hỗ trợ ảnh xem trước mờ (Low Quality Image Placeholder) - Nên để true cho đẹp
  isPreviewImageSupportEnabled: true,

  // Caching (Không cần bật nếu dùng Vercel miễn phí cơ bản)
  isRedisEnabled: false,

  // Ghi đè đường dẫn (để null)
  pageUrlOverrides: null,

  // Kiểu thanh điều hướng (Menu)
  // 'default': Chỉ hiện ô tìm kiếm và tên
  // 'custom': Hiện thêm các link About, Contact... (cần cấu hình thêm bên dưới)
  navigationStyle: 'default'
  
  // Ví dụ nếu muốn dùng custom menu sau này:
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
