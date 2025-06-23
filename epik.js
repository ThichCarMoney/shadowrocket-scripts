// epik.js
// Unlock Epik Premium

let obj = {
  code: 0,
  message: "success",
  data: {
    membership: {
      membership_type: "premium",
      purchase_type: "lifetime",
      expired_at: 4070880000000  // tương đương năm 2099
    },
    user: {
      user_id: "vip_user_" + Math.floor(Math.random() * 100000),
      nickname: "VIP User"
    }
  }
};

$done({ body: JSON.stringify(obj) });
