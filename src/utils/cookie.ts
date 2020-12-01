export const setCookie = (cname: string, cvalue: string, exdays: number) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
};
<<<<<<< HEAD

export const getCookie = (cname: string) => {
=======
/*
export const getCookie = cname => {
>>>>>>> 2b375b20882c15899594cd7e5d2b016404b5af85
  const name = cname + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
<<<<<<< HEAD
};
=======
};*/
>>>>>>> 2b375b20882c15899594cd7e5d2b016404b5af85
/*
export const checkCookie = (cname) => {
  let user = getCookie(cname);
  if (user != '') {
    alert('Welcome again ' + user);
  } else {
    user = prompt('Please enter your name:', '');
    if (user != '' && user != null) {
      setCookie('username', user, 365);
    }
  }
};
*/
