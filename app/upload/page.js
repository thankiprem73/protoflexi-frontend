const uploadFile = async () => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await API.post("/upload", formData);

  // 👉 redirect to checkout
  const payment = await API.post("/payment/checkout", {
    total: res.data.total
  });

  window.location.href = payment.data.url;
};
