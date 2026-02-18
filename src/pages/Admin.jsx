
import React, { useState, useEffect } from 'react';
import './Admin.css';

const Admin = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Load existing images
        const saved = JSON.parse(localStorage.getItem('mahi_gallery')) || [];
        setImages(saved);
    }, []);

    const handleUpload = (e) => {
        const files = Array.from(e.target.files);

        files.forEach(file => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const newImage = reader.result; // Base64 String
                setImages(prev => {
                    const updated = [...prev, newImage];
                    localStorage.setItem('mahi_gallery', JSON.stringify(updated));
                    return updated;
                });
            };
        });
    };

    const deleteImage = (index) => {
        const updated = images.filter((_, i) => i !== index);
        setImages(updated);
        localStorage.setItem('mahi_gallery', JSON.stringify(updated));
    };

    return (
        <div className="admin-container">
            <h1 style={{ color: '#ff4da6' }}>📸 Secret Photo Uploader</h1>
            <p style={{ color: '#666' }}>Use this page to add photos of Mahi easily!</p>

            <div className="upload-section">
                <input
                    type="file"
                    id="fileInput"
                    multiple
                    accept="image/*"
                    onChange={handleUpload}
                    style={{ display: 'none' }}
                />
                <label htmlFor="fileInput" className="upload-btn">
                    ➕ Add Photos
                </label>
            </div>

            <div className="preview-grid">
                {images.map((img, i) => (
                    <div key={i} className="photo-card">
                        <img src={img} alt="Uploaded" />
                        <button onClick={() => deleteImage(i)}>❌</button>
                    </div>
                ))}
            </div>

            <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#999' }}>
                Note: These photos are saved IN THIS BROWSER only. Mahi will need to upload them on her phone too, or you can screenshot/screenrecord this for her! ❤️
            </p>

            <a href="/beautiful-mahi" className="back-link">⬅ Back to Beautiful Mahi</a>
        </div>
    );
};

export default Admin;
