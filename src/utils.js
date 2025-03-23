const openWhatsApp = () => {
  const phoneNumber = "351920335888"; // Replace with the recipient's number
  const message = encodeURIComponent("Hello, I'm interested in your service!");
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
};

export default openWhatsApp;
