const checkout = async () => {
  const res = await API.post("/payment", { amount: 120 });
  window.location.href = res.data.url;
};
