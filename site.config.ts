import { siteConfig } from './lib/site-config'

export default siteConfig({
  // -------------------------------------------------------------------------
  // CẤU HÌNH CHÍNH
  // -------------------------------------------------------------------------

  // ID trang Notion: Đã chuyển sang dạng chuẩn có gạch ngang để tránh lỗi
  rootNotionPageId: '2ef1622a-5c19-81e4-9e51-f2f23380e9b3',

  rootNotionSpaceId: null,

  name: 'CST Marine',
  domain: 'cst.vn',
  author: 'CST Team',
  description: 'Chuyên trang thu thập và phân tích tin tức về khoa học và công nghệ bảo tồn đa dạng sinh học biển.',

  // -------------------------------------------------------------------------
  // MẠNG XÃ HỘI
  // Để tránh lỗi, nếu không dùng thì hãy để ghi chú (//) ở đầu dòng
  // thay vì gán giá trị null.
  // -------------------------------------------------------------------------
  // twitter: 'cst_marine',
  // github: 'cst-team',
  // linkedin: 'cst-linkedin',
  // mastodon: '#', 
  // newsletter: '#',
  // youtube: '#',

  // -------------------------------------------------------------------------
  // CẤU HÌNH KHÁC
  // -------------------------------------------------------------------------
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  isPreviewImageSupportEnabled: true,
  isRedisEnabled: false,
  pageUrlOverrides: null,
  
  navigationStyle: 'default'
})
