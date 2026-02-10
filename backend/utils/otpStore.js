const otpStore = new Map();

export const saveOTP = (email, otp) => {
  otpStore.set(email, {
    otp,
    expires: Date.now() + 5 * 60 * 1000,
  });
};

export const verifyOTP = (email, otp) => {
  const data = otpStore.get(email);
  if (!data) return false;
  if (Date.now() > data.expires) return false;
  return data.otp === otp;
};
