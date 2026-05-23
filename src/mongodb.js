/**
 * MongoDB Atlas HTTPS Data API Client Integration Helper
 * 
 * Safely writes form submissions from a client React app to a remote MongoDB database
 * without exposing TCP driver sockets or administrative DB strings.
 * Includes a robust, crash-free LocalStorage mock fallback.
 */

// MongoDB config from environment variables
const config = {
  apiUrl: import.meta.env.VITE_MONGODB_DATA_API_URL,
  apiKey: import.meta.env.VITE_MONGODB_DATA_API_KEY,
  cluster: import.meta.env.VITE_MONGODB_CLUSTER || "Cluster0",
  database: import.meta.env.VITE_MONGODB_DATABASE || "reddy_convent"
};

// Check if credentials are fully provided to determine if MongoDB is active
const isConfigured = !!config.apiUrl && !!config.apiKey;

if (isConfigured) {
  console.log("🍃 MongoDB Atlas integration active!");
} else {
  console.log(
    "ℹ️ MongoDB credentials not detected. Operating in mock mode (saving entries to LocalStorage)."
  );
}

/**
 * Sends a secure insertion payload to MongoDB Atlas Data API
 * @param {string} collectionName 
 * @param {Object} document 
 * @returns {Promise<Object>} REST response status
 */
async function insertDocument(collectionName, document) {
  const payload = {
    dataSource: config.cluster,
    database: config.database,
    collection: collectionName,
    document: {
      ...document,
      createdAt: { "$date": new Date().toISOString() } // MongoDB Extended JSON date format
    }
  };

  try {
    const response = await fetch(`${config.apiUrl}/action/insertOne`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "api-key": config.apiKey
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Data API Error (${response.status}): ${errText}`);
    }

    const result = await response.json();
    return { success: true, id: result.insertedId, isMock: false };
  } catch (error) {
    console.error(`Error saving to MongoDB (${collectionName}):`, error);
    throw error;
  }
}

/**
 * Saves admission inquiry to MongoDB (or local fallback)
 * @param {Object} data 
 * @returns {Promise<Object>} Submission status
 */
export async function saveAdmission(data) {
  if (isConfigured) {
    return await insertDocument("admissions", data);
  } else {
    // Mock save fallback
    return new Promise((resolve) => {
      setTimeout(() => {
        const admissions = JSON.parse(localStorage.getItem("srr_admissions") || "[]");
        const id = "mock_mongo_" + Math.random().toString(36).substring(2, 9);
        const payload = { ...data, _id: id, createdAt: new Date().toISOString() };
        admissions.push(payload);
        localStorage.setItem("srr_admissions", JSON.stringify(admissions));
        console.log("💾 Mock MongoDB: Admission Inquiry saved to LocalStorage:", payload);
        resolve({ success: true, id, isMock: true });
      }, 500); // Simulate network latency
    });
  }
}

/**
 * Saves contact message to MongoDB (or local fallback)
 * @param {Object} data 
 * @returns {Promise<Object>} Submission status
 */
export async function saveContact(data) {
  if (isConfigured) {
    return await insertDocument("contacts", data);
  } else {
    // Mock save fallback
    return new Promise((resolve) => {
      setTimeout(() => {
        const contacts = JSON.parse(localStorage.getItem("srr_contacts") || "[]");
        const id = "mock_mongo_" + Math.random().toString(36).substring(2, 9);
        const payload = { ...data, _id: id, createdAt: new Date().toISOString() };
        contacts.push(payload);
        localStorage.setItem("srr_contacts", JSON.stringify(contacts));
        console.log("💾 Mock MongoDB: Contact Message saved to LocalStorage:", payload);
        resolve({ success: true, id, isMock: true });
      }, 500); // Simulate network latency
    });
  }
}
