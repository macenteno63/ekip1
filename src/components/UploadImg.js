import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {uploadPicture} from "../reducers/user.reducer";

const UploadImg = () => {
    const [file, setFile] = useState();
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.users.users);

    const handlePicture = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("name", userData.nom);
        data.append("userId", userData._id);
        data.append("file", file);
        console.log(data);
        dispatch(uploadPicture(data, userData._id));
    };
    return (
        <div>
            <form action="" onSubmit={handlePicture} className="upload-pic">
                <label htmlFor="file">Changer d'image</label>
                <input
                    type="file"
                    id="file"
                    name="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <br/>
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    );
};

export default UploadImg;