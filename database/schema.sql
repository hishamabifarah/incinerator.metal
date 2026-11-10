CREATE TABLE IF NOT EXISTS page_views (
  id BIGSERIAL PRIMARY KEY,
  country_code VARCHAR(2),
  pathname TEXT NOT NULL,
  referrer VARCHAR(255),
  device_type VARCHAR(20),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON page_views (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_page_views_country ON page_views (country_code);
CREATE INDEX IF NOT EXISTS idx_page_views_pathname ON page_views (pathname);
