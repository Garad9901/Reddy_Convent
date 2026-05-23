/**
 * MongoDB Client Integration Helper
 * 
 * Routes form submissions from the React client to your local Express server (port 5000)
 * which securely saves them to your MongoDB Database.
 * Includes a robust, crash-free LocalStorage mock fallback when the server is offline or not yet deployed.
 */

const SERVER_URL = "http://localhost:5000";

/**
 * Checks if the backend Express server is online
 * @returns {Promise<boolean>} Status
 */
async function isServerOnline() {
  try {
    const response = await fetch(`${SERVER_URL}/api/status`, { signal: AbortSignal.timeout(1000) });
    if (response.ok) {
      const data = await response.json();
      return data.status === "online";
    }
    return false;
  } catch (error) {
    return false;
  }
}

/**
 * Saves admission inquiry to Express Node/MongoDB backend (or local fallback)
 * @param {Object} data 
 * @returns {Promise<Object>} Submission status
 */
export async function saveAdmission(data) {
  const isOnline = await isServerOnline();

  if (isOnline) {
    try {
      const response = await fetch(`${SERVER_URL}/api/admissions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Server response error");
      }

      const result = await response.json();
      return { success: true, id: result.id, isMock: false };
    } catch (error) {
      console.warn("Express server save failed, falling back to local storage:", error.message);
      // Fall through to mock logic on network/save error
    }
  }

  // Mock save fallback
  return new Promise((resolve) => {
    setTimeout(() => {
      const admissions = JSON.parse(localStorage.getItem("srr_admissions") || "[]");
      const id = "mock_mongo_" + Math.random().toString(36).substring(2, 9);
      const payload = { ...data, _id: id, createdAt: new Date().toISOString() };
      admissions.push(payload);
      localStorage.setItem("srr_admissions", JSON.stringify(admissions));
      console.log("💾 Offline Fallback: Admission Inquiry saved locally to LocalStorage:", payload);
      resolve({ success: true, id, isMock: true });
    }, 500); // Simulate network latency
  });
}

/**
 * Saves contact message to Express Node/MongoDB backend (or local fallback)
 * @param {Object} data 
 * @returns {Promise<Object>} Submission status
 */
export async function saveContact(data) {
  const isOnline = await isServerOnline();

  if (isOnline) {
    try {
      const response = await fetch(`${SERVER_URL}/api/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Server response error");
      }

      const result = await response.json();
      return { success: true, id: result.id, isMock: false };
    } catch (error) {
      console.warn("Express server save failed, falling back to local storage:", error.message);
      // Fall through to mock logic on network/save error
    }
  }

  // Mock save fallback
  return new Promise((resolve) => {
    setTimeout(() => {
      const contacts = JSON.parse(localStorage.getItem("srr_contacts") || "[]");
      const id = "mock_mongo_" + Math.random().toString(36).substring(2, 9);
      const payload = { ...data, _id: id, createdAt: new Date().toISOString() };
      contacts.push(payload);
      localStorage.setItem("srr_contacts", JSON.stringify(contacts));
      console.log("💾 Offline Fallback: Contact Message saved locally to LocalStorage:", payload);
      resolve({ success: true, id, isMock: true });
    }, 500); // Simulate network latency
  });
}
