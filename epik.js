// epik.js
// Unlock Epik VIP

var body = JSON.parse($response.body);

body.subscriber = {
  entitlements: {
    "pro": {
      expires_date: null,
      product_identifier: "epik_lifetime",
      purchase_date: "2023-01-01T00:00:00Z"
    }
  },
  first_seen: "2023-01-01T00:00:00Z",
  last_seen: "2025-06-23T00:00:00Z",
  management_url: null,
  original_app_user_id: "epik_pro_user_" + Math.floor(Math.random() * 100000),
  original_purchase_date: "2023-01-01T00:00:00Z",
  subscriptions: {
    "epik_lifetime": {
      billing_issues_detected_at: null,
      expires_date: null,
      is_sandbox: false,
      original_purchase_date: "2023-01-01T00:00:00Z",
      period_type: "lifetime",
      purchase_date: "2023-01-01T00:00:00Z",
      store: "app_store",
      unsubscribe_detected_at: null
    }
  }
};

$done({ body: JSON.stringify(body) });
