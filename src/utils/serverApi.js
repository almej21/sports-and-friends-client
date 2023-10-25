import axios from "axios";

// withCredentials = giving access to the server to read cookies etc.

export const login = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:4000/user/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const register = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:4000/user/signup", data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const logout = () => {
  return new Promise((resolve, reject) => {
    axios({
      url: "http://localhost:4000/user/logout",
      method: "GET",
      withCredentials: true,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getUserInfo = () => {
  return new Promise((resolve, reject) => {
    axios({
      url: "http://localhost:4000/user/userinfo",
      method: "GET",
      withCredentials: true,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

export const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    axios({
      url: "http://localhost:4000/user/getallusers",
      method: "GET",
      withCredentials: true,
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        reject(err.response.data);
      });
  });
};

export const allfixtures = () => {
  return new Promise((resolve, reject) => {
    axios({
      url: "http://localhost:4000/fixtures/allfixturesavailable",
      method: "GET",
      withCredentials: true,
    })
      .then((res) => {
        // console.log(res);
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export const getUserChats = () => {
  console.log("ServerApi.getUserChats call...");
  return new Promise((resolve, reject) => {
    axios({
      url: `http://localhost:4000/chat`,
      method: "GET",
      withCredentials: true,
    })
      .then((res) => {
        // console.log(res);
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export const getUserById = (userId) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `http://localhost:4000/user/${userId}`,
      method: "GET",
      withCredentials: true,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        console.log(err.response.data);
        reject(err.response.data);
      });
  });
};

export const startChat = (data) => {
  console.log("ServerApi.startChat call...");

  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:4000/chat", data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export const createGroupChat = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:4000/chat/group", data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export const chatRename = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .put("http://localhost:4000/chat/rename", data, { withCredentials: true })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export const getMessagesByChatId = (chatId) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `http://localhost:4000/messages/${chatId}`,
      method: "GET",
      withCredentials: true,
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export const addToGroup = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .put("http://localhost:4000/chat/groupadd", data, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export const removeFromGroup = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .put("http://localhost:4000/chat/groupremove", data, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export const sendMessage = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:4000/messages", data, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

removeFromGroup;
