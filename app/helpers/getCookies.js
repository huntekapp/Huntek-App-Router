const getCookie = (name) => {
  const cookieString = document.cookie;
  const cookies = cookieString.split("; ");
  const cookie = cookies.find((cookie) => cookie.startsWith(`${name}=`));
  if (cookie) {
    const value = cookie.split("=")[1];
    return value;
  }
  return null;
};

export default getCookie;