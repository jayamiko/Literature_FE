import { useState } from "react";
import { API } from "../../config/api";
import './Profile.css'

export default function Avatar({ userId, photo }) {
    const [preview, setPreview] = useState(photo);

    const handleChange = async (e) => {
        try {
            const newImageUrl = URL.createObjectURL(e.target.files[0]);
            setPreview(newImageUrl);

            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            };

            const formData = new FormData();
            formData.set("photo", e.target.files[0], e.target.files[0].name);

            await API.put(`/user/${userId}`, formData, config);


            setTimeout(() => {
            }, 1000);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="input-file-avatar">
            <div className="preview-image" style={{ width: 280, height: 345 }}>
                <img
                    src={preview}
                    alt="User"
                    width="226.67"
                    height="202"
                    value={photo}
                    className="rounded"
                />
                <div className='btnChange'>
                    <input
                        type="file"
                        hidden
                        id="photo"
                        aria-label="file upload"
                        name="photo"
                        onChange={handleChange}
                        multiple
                    />
                    <label
                        htmlFor="photo"
                        className="label-upload mt-3 text-white fw-bold"
                        style={{ width: 280 }}
                    >
                        Change Photo Profile
                    </label>
                </div>
            </div>
        </div>
    );
}