import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Search, ChevronRight, ArrowLeft, HelpCircle, MessageCircle, Phone, MapPin } from 'lucide-react';
import './style.css';

const guideData = [
  {
    category: 'Handheld',
    slug: 'handheld',
    description: 'Camera cầm tay, action camera, gimbal, micro và thiết bị quay sáng tạo của DJI.',
    series: [
      {
        name: 'DJI Osmo Pocket',
        slug: 'dji-osmo-pocket',
        description: 'Camera cầm tay nhỏ gọn, chống rung tốt, phù hợp quay vlog, du lịch và nội dung hằng ngày.',
        products: [
          {
            name: 'DJI Osmo Pocket 3',
            slug: 'dji-osmo-pocket-3',
            description: 'Camera cầm tay nhỏ gọn với cảm biến lớn, màn hình xoay và khả năng quay video chất lượng cao.',
            videos: [
              { title: 'Hướng dẫn kích hoạt DJI Osmo Pocket 3', description: 'Các bước kích hoạt thiết bị lần đầu, kiểm tra pin và thiết lập cơ bản.', youtubeUrl: 'https://www.youtube.com/embed/VIDEO_ID_1', tag: 'Thiết lập ban đầu' },
              { title: 'Hướng dẫn kết nối DJI Mimo', description: 'Cách kết nối Osmo Pocket 3 với điện thoại qua ứng dụng DJI Mimo.', youtubeUrl: 'https://www.youtube.com/embed/VIDEO_ID_2', tag: 'Kết nối app' },
              { title: 'Cài đặt quay cơ bản cho người mới', description: 'Gợi ý độ phân giải, chống rung, màu sắc và các thông số quay phổ biến.', youtubeUrl: 'https://www.youtube.com/embed/VIDEO_ID_3', tag: 'Cài đặt quay' }
            ]
          },
          {
            name: 'DJI Pocket 2',
            slug: 'dji-pocket-2',
            description: 'Camera gimbal cầm tay nhỏ gọn, phù hợp quay nhanh, vlog và du lịch.',
            videos: [
              { title: 'Hướng dẫn sử dụng DJI Pocket 2 cho người mới', description: 'Tổng quan nút bấm, thao tác quay và các chế độ cơ bản.', youtubeUrl: 'https://www.youtube.com/embed/VIDEO_ID_4', tag: 'Người mới' },
              { title: 'Cách kết nối Pocket 2 với điện thoại', description: 'Hướng dẫn kết nối thiết bị với app và kiểm tra firmware.', youtubeUrl: 'https://www.youtube.com/embed/VIDEO_ID_5', tag: 'Kết nối app' }
            ]
          }
        ]
      },
      {
        name: 'DJI Osmo Action',
        slug: 'dji-osmo-action',
        description: 'Action camera chống nước, chống rung mạnh, phù hợp thể thao, du lịch và quay ngoài trời.',
        products: [
          {
            name: 'DJI Osmo Action 5 Pro',
            slug: 'dji-osmo-action-5-pro',
            description: 'Action camera nhỏ gọn với khả năng quay linh hoạt, chống rung tốt và thời lượng pin ổn định.',
            videos: [
              { title: 'Hướng dẫn kích hoạt Osmo Action 5 Pro', description: 'Các bước mở máy, kích hoạt, kiểm tra phụ kiện và cập nhật firmware.', youtubeUrl: 'https://www.youtube.com/embed/VIDEO_ID_6', tag: 'Kích hoạt' },
              { title: 'Cài đặt quay đẹp trên Osmo Action', description: 'Gợi ý thông số quay ngày, đêm, thể thao và vlog.', youtubeUrl: 'https://www.youtube.com/embed/VIDEO_ID_7', tag: 'Cài đặt quay' }
            ]
          }
        ]
      },
      { name: 'DJI Osmo Nano', slug: 'dji-osmo-nano', description: 'Camera siêu nhỏ cho nhu cầu quay nhanh, linh hoạt và gọn nhẹ.', products: [] },
      { name: 'DJI Osmo 360', slug: 'dji-osmo-360', description: 'Camera 360 độ dành cho du lịch, thể thao, vlog sáng tạo và hậu kỳ linh hoạt.', products: [] },
      { name: 'DJI Osmo Mobile', slug: 'dji-osmo-mobile', description: 'Gimbal điện thoại giúp quay video mượt hơn, dễ tracking, timelapse và sáng tạo nội dung.', products: [] },
      { name: 'DJI Mic', slug: 'dji-mic', description: 'Micro không dây cho quay vlog, phỏng vấn, livestream và sản xuất nội dung chuyên nghiệp.', products: [] },
      { name: 'DJI Ronin', slug: 'dji-ronin', description: 'Gimbal chống rung chuyên nghiệp cho máy ảnh, quay phim và sản xuất video nâng cao.', products: [] }
    ]
  },
  {
    category: 'Drone',
    slug: 'drone',
    description: 'Flycam DJI cho người mới, nhà sáng tạo nội dung, quay phim chuyên nghiệp và ứng dụng doanh nghiệp.',
    series: [
      {
        name: 'DJI Mini',
        slug: 'dji-mini',
        description: 'Flycam nhỏ gọn, dễ mang theo, phù hợp người mới và nhu cầu quay du lịch.',
        products: [
          {
            name: 'DJI Mini 4 Pro',
            slug: 'dji-mini-4-pro',
            description: 'Flycam nhỏ gọn với khả năng quay chất lượng cao, nhiều tính năng thông minh và dễ sử dụng.',
            videos: [
              { title: 'Hướng dẫn kích hoạt DJI Mini 4 Pro', description: 'Cách chuẩn bị pin, điều khiển, app DJI Fly và kích hoạt thiết bị.', youtubeUrl: 'https://www.youtube.com/embed/VIDEO_ID_8', tag: 'Kích hoạt' },
              { title: 'Hướng dẫn bay lần đầu an toàn', description: 'Các bước kiểm tra trước khi bay, cất cánh, hạ cánh và lưu ý an toàn.', youtubeUrl: 'https://www.youtube.com/embed/VIDEO_ID_9', tag: 'Bay lần đầu' },
              { title: 'Cài đặt quay video trên DJI Fly', description: 'Gợi ý thiết lập video, ảnh, màu sắc và lưu file cho người mới.', youtubeUrl: 'https://www.youtube.com/embed/VIDEO_ID_10', tag: 'Cài đặt quay' }
            ]
          }
        ]
      },
      { name: 'DJI Air', slug: 'dji-air', description: 'Dòng drone cân bằng giữa tính di động, chất lượng hình ảnh và tính năng thông minh.', products: [] },
      { name: 'DJI Mavic', slug: 'dji-mavic', description: 'Dòng drone cao cấp cho quay phim, chụp ảnh và sản xuất nội dung chuyên nghiệp.', products: [] },
      { name: 'DJI Matrice', slug: 'dji-matrice', description: 'Drone doanh nghiệp dành cho khảo sát, kiểm tra công trình và ứng dụng chuyên dụng.', products: [] },
      { name: 'DJI Lito', slug: 'dji-lito', description: 'Khu vực dành cho dòng sản phẩm DJI Lito nếu có dữ liệu hướng dẫn riêng.', products: [] },
      { name: 'DJI Flip', slug: 'dji-flip', description: 'Drone nhỏ gọn, dễ dùng, phù hợp quay sáng tạo và nội dung nhanh.', products: [] },
      { name: 'DJI Neo', slug: 'dji-neo', description: 'Drone nhỏ gọn dành cho quay cá nhân, du lịch và nội dung mạng xã hội.', products: [] },
      { name: 'DJI Avata', slug: 'dji-avata', description: 'FPV drone cho trải nghiệm bay nhập vai và quay góc nhìn tốc độ cao.', products: [] },
      { name: 'DJI RC', slug: 'dji-rc', description: 'Bộ điều khiển DJI, hướng dẫn kết nối, cập nhật và thao tác với app DJI Fly.', products: [] }
    ]
  },
  { category: 'DJI Vacuums', slug: 'dji-vacuums', description: 'Khu vực hướng dẫn cho robot hút bụi hoặc thiết bị vệ sinh DJI nếu có.', series: [{ name: 'DJI Vacuum Series', slug: 'dji-vacuum-series', description: 'Tổng hợp hướng dẫn thiết lập, kết nối app, vệ sinh và bảo trì thiết bị.', products: [] }] },
  {
    category: 'Power Station',
    slug: 'power-station',
    description: 'Trạm sạc và nguồn điện di động DJI, hướng dẫn sử dụng, sạc pin và bảo quản.',
    series: [{
      name: 'DJI Power', slug: 'dji-power', description: 'Trạm sạc di động DJI phục vụ du lịch, làm việc ngoài trời và sạc thiết bị.',
      products: [{ name: 'DJI Power 1000', slug: 'dji-power-1000', description: 'Trạm sạc di động dung lượng cao, hỗ trợ nhiều cổng kết nối và tình huống sử dụng.', videos: [
        { title: 'Hướng dẫn sử dụng DJI Power 1000', description: 'Các bước bật thiết bị, kiểm tra cổng sạc và sử dụng an toàn.', youtubeUrl: 'https://www.youtube.com/embed/VIDEO_ID_11', tag: 'Thiết lập ban đầu' },
        { title: 'Lưu ý khi sạc và bảo quản DJI Power', description: 'Cách sạc, xả, bảo quản và sử dụng thiết bị bền hơn.', youtubeUrl: 'https://www.youtube.com/embed/VIDEO_ID_12', tag: 'Bảo quản' }
      ]}]
    }]
  }
];

function normalizeText(text) {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd');
}

function Header() {
  return <header className="topbar"><div className="container header-inner"><div className="brand"><span className="dji-logo">DJI</span><span className="divider"/><span>Help Center</span></div><a href="#footer" className="contact-link">Contact Us</a></div></header>;
}

function Hero({ searchTerm, setSearchTerm }) {
  return <section className="hero"><div className="container"><p className="eyebrow">Product Usage</p><h1>Hướng Dẫn Sử Dụng Sản Phẩm DJI</h1><p className="hero-desc">Tổng hợp video hướng dẫn chi tiết cho từng dòng sản phẩm DJI, giúp bạn thiết lập, sử dụng và khai thác thiết bị hiệu quả hơn.</p><div className="search-box"><Search size={20}/><input value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} placeholder="Tìm DJI Osmo Pocket 3, DJI Mini 4 Pro, DJI Mic 2..." /></div></div></section>;
}

function Breadcrumb({ selectedCategory, selectedSeries, selectedProduct }) {
  const items = ['Trang chủ', 'Hướng dẫn sử dụng'];
  if (selectedCategory) items.push(selectedCategory.category);
  if (selectedSeries) items.push(selectedSeries.name);
  if (selectedProduct) items.push(selectedProduct.name);
  return <nav className="container breadcrumb">{items.map((item, i)=><React.Fragment key={item+i}><span className={i===items.length-1?'active':''}>{item}</span>{i<items.length-1&&<ChevronRight size={16}/>}</React.Fragment>)}</nav>;
}

function CategoryTabs({ categories, selectedCategory, onSelectCategory }) {
  return <section className="container category-grid">{categories.map(category=><button key={category.slug} onClick={()=>onSelectCategory(category)} className={`category-card ${selectedCategory?.slug===category.slug?'selected':''}`}><h2>{category.category}</h2><p>{category.description}</p></button>)}</section>;
}

function ProductGrid({ seriesList, onSelectSeries }) {
  return <section className="container section"><div className="section-head"><h2>Tutorials Collection</h2><p>Chọn dòng sản phẩm để xem video hướng dẫn chi tiết.</p></div><div className="series-grid">{seriesList.map(series=><button key={series.slug} onClick={()=>onSelectSeries(series)} className="series-item"><div><h3>{series.name}</h3><p>{series.description}</p><small>{series.products.length || 0} sản phẩm hướng dẫn</small></div><ChevronRight size={20}/></button>)}</div></section>;
}

function ProductSelector({ series, selectedProduct, onSelectProduct }) {
  return <div className="product-panel"><div className="panel-head"><h2>{series.name}</h2><p>{series.description}</p></div><div className="product-grid">{series.products.length ? series.products.map(product=><button key={product.slug} onClick={()=>onSelectProduct(product)} className={selectedProduct?.slug===product.slug?'product-card selected':'product-card'}><h3>{product.name}</h3><p>{product.description}</p></button>) : <p className="empty">Chưa có sản phẩm mẫu trong dòng này. Bạn có thể thêm sản phẩm và video vào dữ liệu.</p>}</div></div>;
}

function VideoCard({ video }) {
  return <article className="video-card"><div className="video-frame"><iframe src={video.youtubeUrl} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div><div className="video-body"><span>{video.tag}</span><h3>{video.title}</h3><p>{video.description}</p></div></article>;
}

function ProductDetail({ product }) {
  if (!product) return null;
  return <section className="detail"><div className="section-head"><p className="eyebrow">Video Tutorials</p><h2>{product.name}</h2><p>{product.description}</p></div><div className="video-grid">{product.videos.map(video=><VideoCard key={video.title} video={video}/>)}</div></section>;
}

function FAQ() {
  const faqs = [
    ['Tôi nên xem video nào trước khi sử dụng sản phẩm?', 'Bạn nên xem video kích hoạt hoặc thiết lập ban đầu trước, sau đó đến video kết nối app và cài đặt quay cơ bản.'],
    ['Làm sao để kích hoạt thiết bị DJI?', 'Phần lớn sản phẩm DJI cần bật thiết bị, kết nối với app DJI Mimo hoặc DJI Fly, đăng nhập tài khoản và làm theo hướng dẫn kích hoạt trên màn hình.'],
    ['Tôi cần tải app nào để sử dụng thiết bị DJI?', 'Các dòng handheld thường dùng DJI Mimo. Các dòng drone phổ thông thường dùng DJI Fly. Một số dòng doanh nghiệp hoặc gimbal chuyên nghiệp có thể dùng app riêng.'],
    ['Video hướng dẫn có áp dụng cho tất cả phiên bản không?', 'Một số thao tác cơ bản có thể giống nhau, nhưng bạn nên chọn đúng tên sản phẩm để tránh khác biệt về menu, app hoặc firmware.']
  ];
  return <section className="container section faq"><div className="section-head"><h2>FAQ</h2><p>Giải đáp nhanh các câu hỏi phổ biến khi bắt đầu sử dụng sản phẩm DJI.</p></div><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<ChevronRight size={18}/></summary><p>{a}</p></details>)}</div></section>;
}

function Footer() {
  return <footer id="footer"><div className="container footer-grid"><div><div className="dji-logo">DJI</div><p>Trung tâm hướng dẫn sử dụng sản phẩm DJI, hỗ trợ người dùng thiết lập, sử dụng và bảo quản thiết bị đúng cách.</p></div><div><h3>Support</h3><p><MessageCircle size={16}/> Liên hệ hỗ trợ kỹ thuật</p><p><Phone size={16}/> Hotline/Zalo: 083.3555.512</p></div><div><h3>Store</h3><p><MapPin size={16}/> 15 Lý Thái Tổ, TP. Hồ Chí Minh</p></div></div></footer>;
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(guideData[0]);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredCategories = useMemo(() => {
    const keyword = normalizeText(searchTerm.trim());
    if (!keyword) return guideData;
    return guideData.map(category => {
      const matchedSeries = category.series.map(series => {
        const matchedProducts = series.products.filter(product => normalizeText(`${product.name} ${product.description} ${product.videos.map(v=>`${v.title} ${v.description} ${v.tag}`).join(' ')}`).includes(keyword));
        const seriesMatched = normalizeText(`${series.name} ${series.description}`).includes(keyword);
        return seriesMatched || matchedProducts.length ? { ...series, products: seriesMatched ? series.products : matchedProducts } : null;
      }).filter(Boolean);
      const categoryMatched = normalizeText(`${category.category} ${category.description}`).includes(keyword);
      return categoryMatched || matchedSeries.length ? { ...category, series: categoryMatched ? category.series : matchedSeries } : null;
    }).filter(Boolean);
  }, [searchTerm]);

  const visibleCategories = filteredCategories.length ? filteredCategories : guideData;
  const currentCategory = visibleCategories.find(c => c.slug === selectedCategory?.slug) || visibleCategories[0];
  const currentSeriesList = currentCategory?.series || [];

  function selectCategory(category) { setSelectedCategory(category); setSelectedSeries(null); setSelectedProduct(null); }
  function selectSeries(series) { setSelectedSeries(series); setSelectedProduct(series.products[0] || null); window.history.replaceState(null, '', `/huong-dan-su-dung/${series.slug}${series.products[0] ? `/${series.products[0].slug}` : ''}`); }
  function selectProduct(product) { setSelectedProduct(product); if (selectedSeries) window.history.replaceState(null, '', `/huong-dan-su-dung/${selectedSeries.slug}/${product.slug}`); }
  function back() { setSelectedSeries(null); setSelectedProduct(null); window.history.replaceState(null, '', '/huong-dan-su-dung'); }

  return <main><Header/><Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm}/><Breadcrumb selectedCategory={currentCategory} selectedSeries={selectedSeries} selectedProduct={selectedProduct}/><CategoryTabs categories={visibleCategories} selectedCategory={currentCategory} onSelectCategory={selectCategory}/><section className="container filter-bar"><span>Nhóm: <b>{currentCategory?.category || 'Tất cả'}</b>{searchTerm ? ` · Từ khóa: "${searchTerm}"` : ''}</span>{(searchTerm || selectedSeries) && <button onClick={()=>{setSearchTerm(''); back();}}>Xóa bộ lọc</button>}</section>{!selectedSeries ? <ProductGrid seriesList={currentSeriesList} onSelectSeries={selectSeries}/> : <section className="container section"><button className="back-btn" onClick={back}><ArrowLeft size={16}/> Quay lại danh mục</button><ProductSelector series={selectedSeries} selectedProduct={selectedProduct} onSelectProduct={selectProduct}/><ProductDetail product={selectedProduct}/></section>}<FAQ/><Footer/></main>;
}

createRoot(document.getElementById('root')).render(<App />);
