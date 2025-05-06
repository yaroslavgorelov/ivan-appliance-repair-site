/**
 * Database.js - Client-side database for storing booking data
 * 
 * This is a demonstration implementation using IndexedDB for client-side storage.
 * In a production environment, this would be replaced with a server-side database.
 */

class BookingDatabase {
    constructor() {
        this.dbName = 'IvanApplianceRepairDB';
        this.dbVersion = 1;
        this.bookingsStore = 'bookings';
        this.db = null;
        this.isInitialized = false;
    }

    /**
     * Initialize the database
     * @returns {Promise} - Resolves when the database is ready
     */
    async init() {
        if (this.isInitialized) {
            return Promise.resolve();
        }

        return new Promise((resolve, reject) => {
            // Check if IndexedDB is supported
            if (!window.indexedDB) {
                console.error("Your browser doesn't support IndexedDB. Booking data will not be saved.");
                reject(new Error("IndexedDB not supported"));
                return;
            }

            // Open the database
            const request = indexedDB.open(this.dbName, this.dbVersion);

            // Handle database upgrade (first time creation or version change)
            request.onupgradeneeded = (event) => {
                const db = event.target.result;

                // Create bookings object store with auto-incrementing ID
                if (!db.objectStoreNames.contains(this.bookingsStore)) {
                    const bookingsStore = db.createObjectStore(this.bookingsStore, { 
                        keyPath: 'id', 
                        autoIncrement: true 
                    });

                    // Create indexes for common queries
                    bookingsStore.createIndex('email', 'email', { unique: false });
                    bookingsStore.createIndex('phone', 'phone', { unique: false });
                    bookingsStore.createIndex('preferredDate', 'preferredDate', { unique: false });
                    bookingsStore.createIndex('serviceType', 'serviceType', { unique: false });
                }
            };

            // Handle success
            request.onsuccess = (event) => {
                this.db = event.target.result;
                this.isInitialized = true;
                console.log('Database initialized successfully');
                resolve();
            };

            // Handle errors
            request.onerror = (event) => {
                console.error('Database initialization error:', event.target.error);
                reject(event.target.error);
            };
        });
    }

    /**
     * Store a new booking in the database
     * @param {Object} bookingData - The booking data to store
     * @returns {Promise} - Resolves with the ID of the new booking
     */
    async storeBooking(bookingData) {
        // Make sure the database is initialized
        if (!this.isInitialized) {
            await this.init();
        }

        return new Promise((resolve, reject) => {
            // Add timestamp to booking data
            const bookingWithTimestamp = {
                ...bookingData,
                createdAt: new Date().toISOString()
            };

            // Start a transaction
            const transaction = this.db.transaction([this.bookingsStore], 'readwrite');
            const store = transaction.objectStore(this.bookingsStore);

            // Add the booking
            const request = store.add(bookingWithTimestamp);

            // Handle success
            request.onsuccess = (event) => {
                const bookingId = event.target.result;
                console.log(`Booking stored with ID: ${bookingId}`);
                resolve(bookingId);
            };

            // Handle errors
            request.onerror = (event) => {
                console.error('Error storing booking:', event.target.error);
                reject(event.target.error);
            };
        });
    }

    /**
     * Get all bookings from the database
     * @returns {Promise} - Resolves with an array of all bookings
     */
    async getAllBookings() {
        // Make sure the database is initialized
        if (!this.isInitialized) {
            await this.init();
        }

        return new Promise((resolve, reject) => {
            // Start a transaction
            const transaction = this.db.transaction([this.bookingsStore], 'readonly');
            const store = transaction.objectStore(this.bookingsStore);

            // Get all bookings
            const request = store.getAll();

            // Handle success
            request.onsuccess = (event) => {
                const bookings = event.target.result;
                resolve(bookings);
            };

            // Handle errors
            request.onerror = (event) => {
                console.error('Error getting bookings:', event.target.error);
                reject(event.target.error);
            };
        });
    }

    /**
     * Get bookings for a specific date
     * @param {string} date - The date to filter by (YYYY-MM-DD format)
     * @returns {Promise} - Resolves with an array of bookings for the specified date
     */
    async getBookingsByDate(date) {
        // Make sure the database is initialized
        if (!this.isInitialized) {
            await this.init();
        }

        return new Promise((resolve, reject) => {
            // Start a transaction
            const transaction = this.db.transaction([this.bookingsStore], 'readonly');
            const store = transaction.objectStore(this.bookingsStore);
            const index = store.index('preferredDate');

            // Get bookings for the specified date
            const request = index.getAll(date);

            // Handle success
            request.onsuccess = (event) => {
                const bookings = event.target.result;
                resolve(bookings);
            };

            // Handle errors
            request.onerror = (event) => {
                console.error('Error getting bookings by date:', event.target.error);
                reject(event.target.error);
            };
        });
    }

    /**
     * Get bookings for a specific customer by email
     * @param {string} email - The customer's email address
     * @returns {Promise} - Resolves with an array of bookings for the specified customer
     */
    async getBookingsByEmail(email) {
        // Make sure the database is initialized
        if (!this.isInitialized) {
            await this.init();
        }

        return new Promise((resolve, reject) => {
            // Start a transaction
            const transaction = this.db.transaction([this.bookingsStore], 'readonly');
            const store = transaction.objectStore(this.bookingsStore);
            const index = store.index('email');

            // Get bookings for the specified email
            const request = index.getAll(email);

            // Handle success
            request.onsuccess = (event) => {
                const bookings = event.target.result;
                resolve(bookings);
            };

            // Handle errors
            request.onerror = (event) => {
                console.error('Error getting bookings by email:', event.target.error);
                reject(event.target.error);
            };
        });
    }

    /**
     * Delete a booking from the database
     * @param {number} id - The ID of the booking to delete
     * @returns {Promise} - Resolves when the booking is deleted
     */
    async deleteBooking(id) {
        // Make sure the database is initialized
        if (!this.isInitialized) {
            await this.init();
        }

        return new Promise((resolve, reject) => {
            // Start a transaction
            const transaction = this.db.transaction([this.bookingsStore], 'readwrite');
            const store = transaction.objectStore(this.bookingsStore);

            // Delete the booking
            const request = store.delete(id);

            // Handle success
            request.onsuccess = () => {
                console.log(`Booking with ID ${id} deleted`);
                resolve();
            };

            // Handle errors
            request.onerror = (event) => {
                console.error('Error deleting booking:', event.target.error);
                reject(event.target.error);
            };
        });
    }
}

// Create and export a singleton instance
const bookingDB = new BookingDatabase();

// Initialize the database when the script loads
bookingDB.init().catch(error => {
    console.error('Failed to initialize database:', error);
});

// Make the database available globally
window.bookingDB = bookingDB;